import React, { useState } from "react";
import "./Members.css"
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";

export default function Members(){
    // let history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")


    // console.log(name)
    // console.log(email)
    // console.log(address)


    const sendDataToAPI = ()=> {
      axios.post("https://auto-bods-backend.herokuapp.com/members", {
        name,
      email,
    address})
    // .then(() => {
    //   // history.push("/MembersDetails")
    // })
    }

    return(
        <div className={"form-display"}>
            <Form>
    <Form.Field>
      <label>Name</label>
      <input name = "name"
       placeholder='Name'
       onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input name = "email" 
      placeholder='Email'
      onChange={(e) => setEmail(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input name = "address" 
      placeholder='Address'
      onChange={(e) => setAddress(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI} className={"submit"}>Submit</Button>
  </Form>
        </div>
    )
}
