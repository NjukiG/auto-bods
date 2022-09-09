import React, { useState, useEffect } from "react";
// import "./Members.css"
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";


export default function UpdatePackages(){

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState()
    const [ID, setID] = useState(null)


    // console.log(name)
    // console.log(email)
    // console.log(address)


    const sendDataToAPI = ()=> {
      axios.put(`https://63199d6c6b4c78d91b3f3620.mockapi.io/packages/${ID}`, {
        name,
      description,
    amount})
    }

    useEffect(() => {
        setName(localStorage.getItem("name"));
        setDescription(localStorage.getItem("description"));
        setAmount(localStorage.getItem("amount"));
        setID(localStorage.getItem("ID"))
    }, [])

    return(
        <div className={"form-display"}>
            <Form>
    <Form.Field>
      <label>Name</label>
      <input name = "name"
      value={name}
       placeholder='Name of package'
       onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input name = "description" 
      value={description}
      placeholder='Enter your description'
      onChange={(e) => setDescription(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Amount</label>
      <input name = "amount" 
      value={amount}
      placeholder='Amount in KSH'
      onChange={(e) => setAmount(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI} className={"submit"}>UPDATE</Button>
  </Form>
        </div>
    )
}
