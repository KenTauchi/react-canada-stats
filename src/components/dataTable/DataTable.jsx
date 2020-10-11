import React from 'react';

import "./dataTable.scss"
import { useSelector } from "react-redux";
import { getProv, getPop } from "../../reducks/tableData/selectors"

const DataTable = () => {
    const selector = useSelector((state) => state);
    const dataProv = getProv(selector);
    const dataPop = getPop(selector);
    
    return(
        <div className="data-table">
        <h3>Data table </h3>
        <span>*Click province to see the data</span>
        
        <h3>Province: {dataProv}</h3>
        <h3>Population: {dataPop}</h3>
        
        </div>
    );

}

export default DataTable;
