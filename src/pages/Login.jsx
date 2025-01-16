import React, { useState } from 'react'
import Fail from './Fail'
import Success from './Sucess'

export default function Login() {

    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[status,setStatus]=useState(0)

    const handleSubmit = (event) => {
      event.preventDefault()
      if(password == "123") {
          setStatus(1);
      } else {
        setStatus(2);
      }
    }

    if (status == 1) {
        return(
            <Success/>
        )
    } else  if (status == 2) {
      return(
            <Fail/>
        );
    }




  return (
    <>
    <h1>React Login</h1>
    <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Password:</label> 
        <input type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               ></input>
        <br></br>
        <button>Login</button>
    </form>

    </>
  );

}
