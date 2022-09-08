import React, { useState } from "react";
import "./Members.css"
import { Button, Form } from 'semantic-ui-react'



export default function Members(){

    const [memberDetails, setMemberDetails] = useState({
        name: "",
        email: "",
        address: ""
    })

    console.log(memberDetails)

    return(
        <div>
            <Form>
    <Form.Field>
      <label>Name</label>
      <input name = "name"
       placeholder='Name'
       onChange={(e) => setMemberDetails(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input name = "email" 
      placeholder='Email'
      onChange={(e) => setMemberDetails(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input name = "address" 
      placeholder='Address'
      onChange={(e) => setMemberDetails(e.target.value)} />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
        </div>
    )
}
