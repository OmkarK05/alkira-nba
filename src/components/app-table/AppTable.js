import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import './AppTable.scoped.scss';
import arrowDown from '../../assets/icons/caret-down-fill.svg'
import arrowUp from '../../assets/icons/caret-up-fill.svg'


const AppTable = (props) => {
    const [table, setTable] = useState(null);
    
    useEffect(() => setTable(props['table']), [props['table']]);

    const handleRowClick = (row) => {
        console.log(row);
    }

    const sortTable = (sortBy, header) => {
        const columnToSort = header['name'];
        const updateTable = table['body'].sort((a, b) => { 
            if(sortBy === 'ascending') return a[columnToSort].localeCompare(b[columnToSort]);
            if(sortBy === 'descending') return b[columnToSort].localeCompare(a[columnToSort]);
        });
        setTable({ ...table, body: updateTable });
    }

    const disableNext = useMemo(() => {
       return table && table['pagination']['current_page'] === table['pagination']['total_pages'];
    }, [table && table['pagination']['current_page'], table && table['pagination']['total_pages']])

    const disablePrev = useMemo(() => {
        return table && table['pagination']['current_page'] === 1;
     }, [table && table['pagination']['current_page'], table && table['pagination']['total_pages']])

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
                            table['body'].map((row, index) => (
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
                    props['pagination'] && props['table'] && props['table']['pagination'] && (
                        <div className="mt-3">
                            <Button size="sm" className="px-2 py-1" disabled={disablePrev} onClick={ () => props['handlePagination']('prev') }> Prev </Button>

                            <span className="mx-1 text-bold">{props['table']['pagination']['current_page']}</span> 
                            <span className="mx-1">in</span> 
                            <span className="mx-1 text-bold">{props['table']['pagination']['total_pages']}</span> 

                            <Button size="sm" className="px-2 py-1" disabled={disableNext} onClick={ () => props['handlePagination']('next') }> Next </Button>
                        </div>
                    )
                }
        </div>
    )
}

export default React.memo(AppTable)