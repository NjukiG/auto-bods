import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";

export default function Trainers(){
    // let history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")


    // console.log(name)
    // console.log(email)
    // console.log(address)


    const sendDataToAPI = ()=> {
      axios.post("https://auto-bods-backend.herokuapp.com/trainers", {
        name,
      email,
    gender})
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
      <label>Gender</label>
      <input name = "gender" 
      placeholder='Whats your gender'
      onChange={(e) => setGender(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI} className={"submit"}>Submit</Button>
  </Form>
        </div>
    )
}