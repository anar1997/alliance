import {  HomePageDiv } from "./Login.styled";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function Login() {

const[username, setUsername] = useState("")
const[password, setPassword] = useState("")
const[fail, setFail] = useState({open: false})

const navigate = useNavigate();


    const handleUsername =(e) =>{
        setUsername(e.target.value)
        console.log(e.target.value);
    }
    const handlePassword =(e) =>{
        setPassword(e.target.value)
        console.log(e.target.value);
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const url = "https://dev.kodaze.com/api/v1/users/login/";
 

        console.log(username, password);  
        axios.post(url, {
            username:username,
            password:password,
          })
          .then(res => {
           return (
               console.log(res.statusText),
                localStorage.setItem("token", res.data.access),
                navigate("/home")
            )
          }).catch( err =>{
                if(err.response.status === 400){
                    setFail({ open: true },
                        setTimeout(() => { setFail({ open: false }) }, 2000)
                    )       
                }else if (err.response.status === 401) {
                    setFail({ open: true },
                        setTimeout(() => { setFail({ open: false }) }, 2000)
                    )   
                } else {
                    
                }
            }
          )
             
          

         
    }
      
    // useEffect(() => {
    // setFail({ open: true },
    //setTimeout(() => { setFail({ open: false }) }, 2000)
    //)      
    //     if(!localStorage.getItem("token")) {
            
    //     }
    //   }, [])

    return (


        <HomePageDiv>
            {
                fail.open ? <p className="alertNow">Ad və ya Şifrə səhvdir</p> : ""
            }
            <div className="form">
                <h1 className="title">İstifadəçi Girişi</h1>
                <form  onSubmit={handleSubmit}>
                    <label className="input_title" for="fname">İstifadəçi Adı:</label><br />
                    <input className="input" type="password" id="fname" name="fname" value={username} onChange={handleUsername}  placeholder="İstifadəçi Adı"/><br />
                    <label className="input_title" for="lname">İstifadəçi Şifrəsi:</label><br />
                    <input className="input" type="password" id="lname" name="lname" value={password} onChange={handlePassword} placeholder="Şifrə"/><br /><br />
                    <input type="submit" value="Submit" className="submit"/>
                </form>
            </div>

        </HomePageDiv>
    )
}



export default Login;