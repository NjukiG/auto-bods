import React from "react";
import PackagesTable from "../PackagesTable/PackagesTable";
import Package from "../Packages/Package";

export default function PackagesDetails(){
    return (
       <div>
            <div>
            <Package />
        </div>
        <div style={{marginTop: 30}}>
            <PackagesTable />
        </div>
       </div>
    )
}