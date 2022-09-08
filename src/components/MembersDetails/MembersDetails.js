import React from "react";
import MembersTable from "../Members-Table/MembersTable";
import Members from "../Members/Members";

export default function MembersDetails(){
    return (
       <div>
            <div>
            <Members />
        </div>
        <div style={{marginTop: 30}}>
            <MembersTable />
        </div>
       </div>
    )
}