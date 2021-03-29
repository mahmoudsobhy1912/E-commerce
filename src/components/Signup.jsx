import React, { useState } from 'react';

const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [usernameerr, setUsernameErr] = useState("");
    const [emailerr, setEmailErr] = useState("");
    const [passerr, setPassErr] = useState("");

    const change = (e) => {
        const name = e.target.name;
        const val = e.target.value;

        if(name === "username"){
            setUsername(val)
            setUsernameErr("")
        }else if(name === "email"){
            setEmail(val)
            setEmailErr("")
        }else if(name === "password"){
            setPass(val)
            setPassErr("")
        }
    }

    const submit = (e) => {
        e.preventDefault(); 

        if(username === ""){
            setUsernameErr("User Name Incorrect")
        }
        if(email === ""){
            setEmailErr("Type Your Email and Must Contan '@' !")
        }
        if(password === ""){
            setPassErr("Your Password Incorrect")
        }
    }

    return ( 
        <div>
            <form onSubmit={submit}>
            <div>
                    <label>User Name</label>
                    <input type="username" name="username" onChange={change} value={username}/>
                    {usernameerr && <span>{usernameerr}</span>}
                </div>
                <div>
                    <label>E-mail</label>
                    <input type="email" name="email" onChange={change} value={email}/>
                    {emailerr && <span>{emailerr}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" onChange={change} value={password}/>
                    {passerr && <span>{passerr}</span>}
                </div>
                <button className="button">Sign Up</button>
            </form>
        </div>
     );
}
 
export default Signup;