import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { loginApi, registerApi } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


function Auth({ register }) 
{
  
  const navigate=useNavigate()

  //state to check validation

  const [unameValid,setUnameValid]=useState(false)

  const [emailValid,setEmailValid]=useState(false)
  const [passwordValid,setPasswordValid]=useState(false)


  //state to store  data

  const [user,setUser]=useState({
    userName:"", email:"", password:""
  })


  const setInputs=(e)=>{
    const {name,value}=e.target
   setUser({...user,[name]:value})

    if(name=="userName")
      {
           if(value.match(/^[a-zA-Z ]+$/))
            {
            setUnameValid(false)
            // setUser({...user,[name]:value})

           }
           else{
            setUnameValid(true)
           }
    }

    if(name=="email")
      {
      if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[c][o][m]$/))
       {
       setEmailValid(false)

      }
      else{
       setEmailValid(true)
      }
     }

     if(name=="password"){
      if(value.match(/^[a-zA-z0-9@]{10}$/))
       {
       setPasswordValid(false)

      }
      else{
       setPasswordValid(true)
      }
}





    // setUser({...user,[name]:value})
  }

console.log(user);


const handleRegister=async(e)=>{
  e.preventDefault()
  const {userName,email,password}=user
  if(!userName || !email || !password){
    
    toast.error("please fill all the data", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  }
  else{
   const result=await registerApi(user)
  //  console.log(result);
  if(result.status===200){
    toast.success(`${result.data.userName} your account created successfully`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    //reset user state
    setUser( {userName:"", email:"", password:""})
    navigate('/login')
    
  }
  else{
    
    toast.error(result.response.data, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  }
}


const handleLogin=async(e)=>{
  e.preventDefault()
  const {email,password}=user
  if(!email || !password){
    
    toast.error("please fill all the data", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  }
  else{
   const result=await loginApi(user)
  //  console.log(result);
  if(result.status===200){
    //store data in local storage
    localStorage.setItem("current_user",result.data.user.userName);
    localStorage.setItem("current_id",result.data.user._id);
    

    toast.success(`login successfully`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    //reset user state
    setUser( {email:"", password:""})
    navigate('/')
    
  }
  else{
    
    toast.error(result.response.data, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  }
}


  const isRegisterForm = register ? true : false

  return (
    <div>
      <div className='w-50 container bg-light shadow-lg mb-5 p-5 mt-5 '  >

        <Row>
          <Col>
            <Link to={'/'} className='p-3 fs-5' style={{ textDecoration: 'none' }}> <i class="fa-solid fa-circle-arrow-left fa-beat" ></i> Back To Home</Link>
            <img className='w-100'
              src={isRegisterForm ? 'https://i.postimg.cc/PrnQZTvq/project2.jpg' : ' https://i.postimg.cc/8k0BKT6D/project1.webp '} alt=" " />

          </Col>
          <Col className='p-3 mt-4'>
            <h1 className='text-center'>
              {
                isRegisterForm ? 'Sign Up' : 'Sign In'
              }
            </h1>
            <div className='mt-5'>
              
               
                  {
                    
                       isRegisterForm &&
                     <>
                     <FloatingLabel controlId="floatingPassword" label="User Name " className='mb-3'>
                    <Form.Control value={user.userName} onChange={(e)=>setInputs(e)} name="userName"
                     type="text" placeholder="User Name" />
                  </FloatingLabel>
                  
                    { unameValid &&
                      <p className='text-primary'>include characters only</p>}
                   </>
               }


              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control value={user.email}  onChange={(e)=>setInputs(e)} name="email"
                type="email" placeholder="name@example.com" />
              </FloatingLabel>


                { emailValid &&   
                  <p className='text-primary'>Email is not valid</p>
                }              


              <FloatingLabel controlId="floatingPassword" label="Password " className='mb-3'>
                <Form.Control value={user.password}   onChange={(e)=>setInputs(e)} name="password"
                type="password" placeholder="Password" />
              </FloatingLabel>


              {    passwordValid &&         
               <p className='text-primary'>invalid password  </p>
               }


              <div className='text-center mt-5'>
                {
                  isRegisterForm ?
                    <Button onClick={(e)=>handleRegister(e)} className='btn btn-dark rounded-pill px-4 py-2 '>Register</Button>
                    :
                    <Button onClick={(e)=>handleLogin(e)} className='btn btn-dark rounded-pill px-4 py-2'>Login</Button>

                }
                <div className='mt-3'>
                  {
                    isRegisterForm ?
                      <p>Already Have An Account? <Link to={'/login'} style={{ textDecoration: 'none' }}>Login Here</Link></p> :
                      <p>New User ? <Link to={'/register'} style={{ textDecoration: 'none' }}>Sign-Up Here</Link></p>
                  }
                </div>
              </div>

            </div>


          </Col>
        </Row>


      </div>
 <ToastContainer />
    </div>
  )
}

export default Auth