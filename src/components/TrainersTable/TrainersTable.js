import React, { useEffect, useState } from "react";
import { Table, Button } from 'semantic-ui-react'
import axios from "axios";
import { Link } from "react-router-dom"


export default function TrainersTable(){

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:9292/trainers")
        .then((getData) => {
            setApiData(getData.data)
        })
    }, [])

    const setID = (id) => {
        console.log(id)
        localStorage.setItem("ID", id)
    }

    const setData = (id, name, email, gender) => {
        localStorage.setItem("ID", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("gender", gender)
    }

    const getData = () => {
        axios.get("http://127.0.0.1:9292/trainers")
        .then((getData) => {
            setApiData(getData.data)
        })
    }

    const onDelete = (id) => {
        axios.delete(`http://127.0.0.1:9292/trainers/${id}`)
        .then(() => {
            getData()
        })
    }

    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
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
        <Table.Cell>{data.gender}</Table.Cell>
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