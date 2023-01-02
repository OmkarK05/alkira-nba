import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import './AppTable.scoped.scss';
import arrowDown from '../../assets/icons/caret-down-fill.svg'
import arrowUp from '../../assets/icons/caret-up-fill.svg'


const AppTable = (props) => {
    const [paginatedRows, setPaginatedRows] = useState(null);
    const [table, setTable] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    
    useEffect(() => {
        setTable(deepCopy(props['table']));
        props['table'] && props['table']['body'] && setPaginatedRows(getPaginatedRows(deepCopy(props['table']['body']), currentPage));
    }, [props['table']]);

    const handleRowClick = (row) => {
        props['handleRowClick'](row);
    }

    const deepCopy = (payload) => {
        let copy = JSON.stringify(payload);
        return JSON.parse(copy);
    }

    const sortTable = (sortBy, header) => {
        const columnToSort = header['name'];
        const updateTable = deepCopy(props['table']['body']).sort((a, b) => { 
            if(sortBy === 'ascending') return a[columnToSort].localeCompare(b[columnToSort]);
            if(sortBy === 'descending') return b[columnToSort].localeCompare(a[columnToSort]);
        });
        setTable({ ...table, body: updateTable });
        setPaginatedRows(getPaginatedRows(updateTable, currentPage));
    }

    const disableNext = useMemo(() => {
       return table && currentPage === table['pagination']['total_pages'];
    }, [table && currentPage, table && table['pagination']['total_pages']])

    const disablePrev = useMemo(() => {
        return table && currentPage === 1;
     }, [table && currentPage, table && table['pagination']['total_pages']])

     
    const handlePagination = (pagination) => {
        let pageNumber = currentPage;
        if(pagination === 'next') pageNumber += 1;
        if(pagination === 'prev') pageNumber -= 1;

        setCurrentPage(pageNumber);
        setPaginatedRows(getPaginatedRows(table['body'], pageNumber));
    }

    const getPaginatedRows = (rows, pageNumber) => {
        return rows.slice((pageNumber - 1) * 7, pageNumber * 7);
    }

    return(
        <div>
            <div className="table-container">
            { 
                table &&
                    (<table  id="app-table" className="app-table">
                        <thead id="table-header" className="table-header">
                            <tr>
                                {
                                    table['headers'].map((header) => (
                                            <th key={`table-header-${header['label']}`} className="table-header-cell">
                                                <div className="d-flex align-items-center">
                                                    <p className="table-header-cell-title mb-0">
                                                        {header['label']}
                                                    </p>
                                                    <div className="table-column-sorting-icon">
                                                        <img alt="Arrow up" className="arrow-up" src={arrowUp} onClick={() => sortTable('ascending', header)}/>
                                                        <img alt="Arrow Down" className="arrow-down" src={arrowDown} onClick={() => sortTable('descending', header)} />
                                                    </div>
                                                </div>
                                            </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody id="table-body" className="table-body" >
                        {
                            paginatedRows.map((row, index) => (
                                <tr key={`table-body-row-${row['abbrevation']}-${index}`} id={`table-body-row-${row['id']}`} className="table-body-row" onClick={() => handleRowClick(row)}>
                                    <th className="table-body-cell">
                                        {row['team_name']}
                                    </th>
                                    <th className="table-body-cell">
                                        {row['city']}
                                    </th>
                                    <th className="table-body-cell">
                                        {row['abbreviation']}
                                    </th>
                                    <th className="table-body-cell">
                                        {row['conference']}
                                    </th>
                                    <th className="table-body-cell">
                                        {row['division']}
                                    </th>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>)
                }
                </div>
                {
                    props['pagination'] && table && table['pagination'] && (
                        <div className="mt-3">
                            <Button size="sm" className="px-2 py-1" disabled={disablePrev} onClick={ () => handlePagination('prev') }> Prev </Button>

                            <span className="mx-1 text-bold">{currentPage}</span> 
                            <span className="mx-1">in</span> 
                            <span className="mx-1 text-bold">{table['pagination']['total_pages']}</span> 

                            <Button size="sm" className="px-2 py-1" disabled={disableNext} onClick={ () => handlePagination('next') }> Next </Button>
                        </div>
                    )
                }
        </div>
    )
}

export default React.memo(AppTable)