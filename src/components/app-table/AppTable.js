import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import './AppTable.scoped.scss';
import arrowDown from '../../assets/icons/caret-down-fill.svg';
import arrowUp from '../../assets/icons/caret-up-fill.svg';
import arrowRight from '../../assets/icons/chevron-right.svg';
import arrowLeft from '../../assets/icons/chevron-left.svg';
import { deepCopy } from "../../global";


const AppTable = (props) => {
    const [paginatedRows, setPaginatedRows] = useState(null);
    const [table, setTable] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    /**
     * Here updating table state when props['table'] is changed.
     * Then updating table rows pagination to display paginated rows
     */
    useEffect(() => {
        setTable(deepCopy(props['table']));
        props['table'] && props['table']['body'] && setPaginatedRows(getPaginatedRows(deepCopy(props['table']['body']), currentPage));
    }, [props['table']]);

    /**
     * Method to handle table row click
     * @param {*} row - table row data
     */
    const handleRowClick = (row) => {
        props['handleRowClick'](row);
    }

    /**
     * Method to sort table in ascending and descending order
     * @param {String} sortBy - ascending/descending
     * @param {Object} header - header which needs to be sorted
     */
    const sortTable = (sortBy, header) => {
        const columnToSort = header['name'];
        const updateTable = deepCopy(props['table']['body']).sort((a, b) => { 
            if(sortBy === 'ascending') return a[columnToSort].localeCompare(b[columnToSort]);
            if(sortBy === 'descending') return b[columnToSort].localeCompare(a[columnToSort]);
        });
        setTable({ ...table, body: updateTable });
        setPaginatedRows(getPaginatedRows(updateTable, currentPage));
    }

    /**
     * Cached method to check if need to disable pagination 'next' button
     */
    const disableNext = useMemo(() => {
       return table && currentPage === table['pagination']['total_pages'];
    }, [table && currentPage, table && table['pagination']['total_pages']])

    /**
     * Cached method to check if need to disable pagination 'previous' button
     */
    const disablePrev = useMemo(() => {
        return table && currentPage === 1;
     }, [table && currentPage, table && table['pagination']['total_pages']])

    /**
     * This method handle pagination, it updates currentPage state and updates paginated rows state.
     * @param {String} pagination - next/prev
     */
    const handlePagination = (pagination) => {
        let pageNumber = currentPage;
        if(pagination === 'next') pageNumber += 1;
        if(pagination === 'prev') pageNumber -= 1;

        setCurrentPage(pageNumber);
        setPaginatedRows(getPaginatedRows(table['body'], pageNumber));
    }

    /**
     * This method takes table rows and pageNumber and returns sliced rows.
     * @param {Array} rows - array of table rows
     * @param {Number} pageNumber - page number
     * @returns 
     */
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
                                            <th key={`table-header-${header['label']}`} className="table-header-cell bg-primary text-white">
                                                <div className="d-flex align-items-center">
                                                    <p className="table-header-cell-title mb-0 font-medium">
                                                        {header['label']}
                                                    </p>
                                                    <div id="app-table-sorting-icon" className="table-column-sorting-icon">
                                                        <img id="app-table-sort-ascending-icon" alt="Arrow up" className="arrow-up" src={arrowUp} onClick={() => sortTable('ascending', header)}/>
                                                        <img id="app-table-sort-descending-icon" alt="Arrow Down" className="arrow-down" src={arrowDown} onClick={() => sortTable('descending', header)} />
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
                                <tr key={`table-body-row-${row['abbrevation']}-${index}`} id="table-body-row" className="table-body-row" onClick={() => handleRowClick(row)}>
                                    <td className="table-body-cell bg-tertiary font-medium">
                                        {row['team_name']}
                                    </td>
                                    <td className="table-body-cell bg-tertiary font-medium">
                                        {row['city']}
                                    </td>
                                    <td className="table-body-cell bg-tertiary font-medium">
                                        {row['abbreviation']}
                                    </td>
                                    <td className="table-body-cell bg-tertiary font-medium">
                                        {row['conference']}
                                    </td>
                                    <td className="table-body-cell bg-tertiary font-medium">
                                        {row['division']}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>)
                }
                </div>
                {
                    props['pagination'] && table && table['pagination'] && (
                        <div className="mt-3 d-flex justify-content-end align-items-center">
                            <Button id='app-table-pagination-previous-button' size="sm" className="p-1" disabled={disablePrev} onClick={ () => handlePagination('prev') }> <img className="arrow-left" alt="Previous" src={arrowLeft} /> </Button>
                            <span id="app-table-pagination-text">
                                <span className="mx-2 text-bold">{currentPage}</span> 
                                <span className="mx-1">in</span> 
                                <span className="mx-2 text-bold">{table['pagination']['total_pages']}</span> 
                            </span>
                            <Button id='app-table-pagination-next-button' size="sm" className="p-1" disabled={disableNext} onClick={ () => handlePagination('next') }> <img className="arrow-right" alt="Next" src={arrowRight} /> </Button>
                        </div>
                    )
                }
        </div>
    )
}

export default React.memo(AppTable)