import React, { useEffect, useState }from "react";
import { Table, Button } from 'semantic-ui-react'
import axios from "axios";


export default function MembersTable(){

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get("https://63199d6c6b4c78d91b3f3620.mockapi.io/members")
        .then((getData) => {
            setApiData(getData.data)
        })
    })

    return (
        <div>
            <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data) => {
            return (
                <Table.Row>
        {/* <Table.Cell>{data.id}</Table.Cell> */}
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>{data.email}</Table.Cell>
        <Table.Cell>{data.address}</Table.Cell>
        <Table.Cell>
            <Button>UPDATE</Button>
        </Table.Cell>
        <Table.Cell>
            <Button>DELETE</Button>
        </Table.Cell>
      </Table.Row>
            )
        })}
      
    </Table.Body>
  </Table>
        </div>
    )
}