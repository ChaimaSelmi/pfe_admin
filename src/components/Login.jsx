import React, { useState } from 'react'
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState();
  const OnChangeHandle=(e)=>{
    setData({
      ...data, [e.target.name]:e.target.value
    }) 
    console.log(data)
  }
  const navigate = useNavigate()
  const OnSubmitHandle=(e)=>{
    e.preventDefault()
    AuthService.signin(data).then((res)=>{
        console.log(res)
        localStorage.setItem("user",JSON.stringify(res.data))
        navigate("/Home")
        }).catch((error)=>{
          console.log(error)
      })
  }
  return (
<div>
  <main className="main-content  mt-0">
    <section>
      <div className="page-header min-vh-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div className="card card-plain mt-8">
                <div className="card-header pb-0 text-left bg-transparent">
                  <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                  <p className="mb-0">Enterez votre username et password pour sign-in</p>
                </div>
                <div className="card-body">
                  <form role="form">
                    <label>Username</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Username" name='username' aria-label="Email" aria-describedby="email-addon" onChange={OnChangeHandle}/>
                    </div>
                    <label>Password</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Password" name='password' aria-label="Password" aria-describedby="password-addon" onChange={OnChangeHandle}/>
                    </div>
                    
                    <div className="text-center">
                      <button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0" onClick={OnSubmitHandle}>Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  </main>
 
</div>


  )
}

export default Login
