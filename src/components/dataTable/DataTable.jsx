import React from 'react';

import "./dataTable.scss"
import { useSelector } from "react-redux";
import { getDataTable } from "../../reducks/dataTable/selectors"

const DataTable = () => {
    const selector = useSelector((state) => state);
    const dataTable = getDataTable(selector);
    
    
    return(
        <div className="data-table">
        <h3>Data table </h3>
        <span>*Click province to see the data</span>
        
        <h3>Province: {dataTable.province}</h3>
        <h3>Population: {dataTable.population}</h3>
        
        </div>
    );

}

export default DataTable;
