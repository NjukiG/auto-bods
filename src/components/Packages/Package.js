import React, { useState } from "react";
import "./Package.css"
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";

export default function Package(){

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState()


   console.log(name)
    console.log(description)
    console.log(amount)


  const sendDataToAPI = ()=> {
    axios.post("http://127.0.0.1:9292/packages", {
      name,
    description,
  amount})
  }
   

    return(
        <div className={"form-display"}>
            <Form>
    <Form.Field>
      <label>Name</label>
      <input name = "name"
       placeholder='Name of package'
       onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <textarea name = "" 
      placeholder='Enter your description'
      onChange={(e) => setDescription(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Amount</label>
      <input name = "amount" 
      placeholder='Amount in KSH'
      onChange={(e) => setAmount(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI} className={"submit"}>Submit</Button>
  </Form>
        </div>
    )
}
