import React, { useEffect, useState } from "react";
import { Table, Button } from 'semantic-ui-react'
import axios from "axios";
import { Link } from "react-router-dom"


export default function PackagesTable(){

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get("https://auto-bods-backend.herokuapp.com/packages")
        .then((getData) => {
            setApiData(getData.data)
        })
    }, [])

    const setID = (id) => {
        // console.log(id)
        localStorage.setItem("ID", id)
    }

    const setData = (id, name, description, amount) => {
        localStorage.setItem("ID", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", description)
        localStorage.setItem("address", amount)
    }

    const getData = () => {
        axios.get("https://auto-bods-backend.herokuapp.com/packages")
        .then((getData) => {
            setApiData(getData.data)
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://auto-bods-backend.herokuapp.com/packages/${id}`)
        .then(() => {
            getData()
        })
    }

    return (
        <div>
               <Table celled padded="very">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
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
        <Table.Cell>{data.description}</Table.Cell>
        <Table.Cell>{data.amount}</Table.Cell>
        <Table.Cell>
            <Link to = "/update">
            <Button className="btn-update" onClick={() => setID(data.id)}>UPDATE</Button>
            </Link>
        </Table.Cell>
        <Table.Cell>
            <Link to = "/delete">
            <Button className="btn-delete" onClick={() => onDelete(data.id)}>DELETE</Button>
            </Link>
        </Table.Cell>
      </Table.Row>
            )
        })}
      
    </Table.Body>
  </Table>
        </div>
    )
}