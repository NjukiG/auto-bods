import React from "react";
import TrainersTable from "../TrainersTable/TrainersTable";
import Trainers from "../Trainers/Trainers";

export default function TrainersDetails(){
    return (
       <div>
            <div>
            <Trainers />
        </div>
        <div style={{marginTop: 30}}>
            <TrainersTable />
        </div>
       </div>
    )
}