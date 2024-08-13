import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getprofileApi, updateProfile } from "../service/allApi";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../service/baseUrl";

function Profile() {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");


  const [existingImage, setExistingImage] = useState("")


  const handleClose = () => {
    setShow(false);
    // setProfile({
    //   image: "",
    //   GitHub: "",
    //   LinkedIn: "",
    // });
  };
  const handleShow = () => setShow(true);

  const [profile, setProfile] = useState({
    userName: "",
    image: "",
    GitHub: "",
    LinkedIn: "",
  });

  useEffect(() => {
    const userData = (JSON.parse(localStorage.getItem("current_user")))

    setProfile({ ...profile, user: userData.userName, image: "", github: userData.github, linkedIn: userData.linkedIn })
    setExistingImage(userData.profile)
  }, [])









  //api call
  const getprofile = async () => {
    //id
    if (localStorage.getItem("current_id")) {
      let id = localStorage.getItem("current_id");

      const headers = {
        "Content-Type": "application/json",
        access_token: `Bearer ${token}`,
      };

      const result = await getprofileApi(id);
      // console.log(result.data);
      console.log(result);

      //update the data in profile state
      if (result.status === 200) {
        setProfile({
          ...profile,
          user: result?.data?.userName,
          GitHub: result?.data?.github,
          LinkedIn: result?.data?.linkedIn,
          updatedImg: result?.data?.profile,
        });
      } else {
        alert("fail");
      }
    }
  };

  useEffect(() => {
    getprofile();
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
    getprofile();
  }, []);
  console.log(token);

  // console.log(profile);

  const setData = (e) => {
    const { value, name } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  // console.log(profile);
  useEffect(() => {
    if (profile.image) {
      setPreview(URL.createObjectURL(profile.image));
    }
  }, [profile.image]);
  // console.log(preview);

  const handleupdate = async (e) => {
    e.preventDefault();
    const { userName, image, GitHub, LinkedIn } = profile;
    if (!userName || !GitHub || !LinkedIn) {
      alert("please fill the data");
    } else {
      //id
      if (localStorage.getItem("current_id")) {
        const id = localStorage.getItem("current_id");

        console.log(id);
        //header
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          access_token: `Bearer ${token}`,
        };
        console.log(reqHeader);

        //body
        const reqBody = new FormData();
        reqBody.append("userName", userName);
        reqBody.append("profile", image);
        reqBody.append("github", GitHub);
        reqBody.append("linkedIn", LinkedIn);
        console.log(reqBody);
        const response = await updateProfile(reqBody, reqHeader, id);

        // console.log(response);

        if (response.status == 200) {
          alert(response.data);
          handleClose();
          //refresh profile data
          getprofile();
          //update now username in local storage
          localStorage.setItem("current_user", profile.userName);
        } else {
          alert("profile updation failed");
        }
      }
    }
  };
  console.log(profile);

  return (
    <div>
      <Row>
        <Col>
          <h4 className="text-secondary">My Profile</h4>
        </Col>
        <Col className="text-end">
          <div>
            <i class="fa-solid fa-circle-check px-3 fa-2x text-success"></i>
          </div>
        </Col>
      </Row>

      <div className="text-center">
        <img className="mt-3 w-25 mb-3 rounded" src={profile?.updatedImg ? `${BASE_URL}/uploads/${profile.updatedImg}`
          : "https://i.postimg.cc/jdn1JnQY/images.png"} alt="" />
      </div>
      <Container>
        <hr className="text-primary" />
        <p className="py-3  ">
          User Name :<b className=" mx-3 fs-3 "> {profile.user}</b>
        </p>
        <hr className="text-primary" />
        <p className="py-3">
          Github :<b> {profile?.GitHub}</b>
        </p>
        <hr className="text-primary" />
        <p className="py-3 ">
          LinkedIn :<b> {profile?.LinkedIn}</b>{" "}
        </p>
        <hr className="text-primary" />

        <p className="text-end pt-5 ">
          <span className="text-danger btn  px-4" onClick={handleShow}>
            Edit
          </span>
        </p>

        <Modal show={show} onHide={handleClose} backdrop="static" size="md" centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">
              <h4>Update Profile</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="img1" className="text-center">
              <input onChange={(e) =>
                setProfile({ ...profile, ["image"]: e.target.files[0] })
                // setProfile({
                // ...profile,
                // image: e.target.files[0]
                // })
              }
                id="img1"
                style={{ display: "none" }}
                type="file"
              />
              <img className="mt-3 w-50 rounded  mb-3   " style={{ textAlign: "center" }} src={preview ? preview
                : "https://i.postimg.cc/jdn1JnQY/images.png"} alt="" />
            </label>

            <div className="mt-5">
              <input value={profile?.userName} onChange={(e) => setData(e)}
                name="userName"
                type="text"
                className="form-control"
                placeholder="Username "
              />
            </div>

            <div className="mt-3 ">
              <input value={profile?.GitHub} onChange={(e) => setData(e)}
                name="GitHub"
                type="text"
                className="form-control"
                placeholder="Github "
              />
            </div>
            <div className="mt-3 mb-5">
              <input
                value={profile?.LinkedIn}
                onChange={(e) => setData(e)}
                name="LinkedIn"
                type="text"
                className="form-control"
                placeholder="LinkedIn "
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={(e) => handleupdate(e)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Profile;

// import React, { useEffect } from 'react'
// import { Button, Col, Container, Row } from 'react-bootstrap'
// import { useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { getprofileApi, updateProfile } from "../service/allApi";
// import { BASE_URL } from '../service/baseUrl';

// function Profile({ userName }) {
//     const [show, setShow] = useState(false);
//     const [preview, setPreview] = useState("")
//     const [token,setToken]=useState("")

//     const handleClose = () => {
//         setShow(false);
//         // setProfile({image:"", gitHub: "", linkedIn: ""})
//     }

//     const handleShow = () => setShow(true);

//     const [profile, setProfile] = useState({
//         user: localStorage.getItem("currentUser"), image: "", gitHub: "", linkedIn: ""
//     })

//     // api call
//     const getProfile=async()=>{
//         // id
//         if(localStorage.getItem("currentId")){
//             let id=localStorage.getItem("currentId")

//             const headers={
//                 "Content-Type": "application/json",
//                 "access_token": `Bearer ${token}`
//             }

//             const result=await getprofileApi(id,headers)

//             console.log(result);
//             // update the data in profile state
//              if(result.status===200){
//                 setProfile({...profile,
//                 user:result?.data?.userName,
//                 gitHub:result?.data?.gitHub,
//                 linkedIn:result?.data?.linkedIn,
//                 updatedImg:result?.data?.profile

//              })}
//              else{
//                 alert("fail")
//              }

//         }
//     }

//     useEffect(()=>{
//         getProfile()
//             // store token in a state
//             if(sessionStorage.getItem("token")){
//                 setToken(sessionStorage.getItem("token"))
//             }

//     },[])

//     console.log(token);

//     // console.log(profile);

//     const setData = (e) => {
//         const { value, name } = e.target
//         setProfile({ ...profile, [name]: value })
//     }
//     // console.log(profile);

//     useEffect(() => {
//         if (profile.image) {
//             setPreview(URL.createObjectURL(profile.image));
//         }
//     }, [profile.image])
//     // console.log(preview);

//     const handleUpdate = async (e) => {
//         e.preventDefault()
//         const { user, image, gitHub, linkedIn } = profile

//         if (!user ||  !gitHub || !linkedIn) {
//             alert("please fill all datas")
//         }
//         else {
//             // api call
//             // id
//             if (localStorage.getItem("currentId")) {
//                 const id = localStorage.getItem("currentId")
//                 console.log(id);
//                 // header
//                 const reqHeader = {
//                     "Content-Type": "multipart/form-data",
//                     "access_token":`Bearer ${token}`
//                 }

//                 console.log(reqHeader);

//                 // body
//                 const reqBody = new FormData()
//                 reqBody.append("userName", user)
//                 reqBody.append("profile", image)
//                 reqBody.append("gitHub", gitHub)
//                 reqBody.append("linkedIn", linkedIn)

//                 // console.log(reqBody);
//                 const response = await updateProfile(reqBody, reqHeader, id)

//                 // console.log(response);

//                 if (response.status == 200) {
//                     alert(response.data)
//                     handleClose()

//                     // refresh profile data
//                     getProfile()
//                     // update new username in local storage
//                     localStorage.setItem("currentUser",profile.user)
//                 }
//                 else {
//                     console.log("profile update fail");
//                 }

//             }

//         }
//     }

//     console.log(profile);

//     return (
//         <div>
//             <Row>
//                 <Col>
//                     <h4 className='text-danger '>
//                         My Profile
//                     </h4>
//                 </Col>
//                 <Col className='text-end'>
//                     <div>
//                         <i class="fa-solid fa-circle-check px-3 fa-2x text-success"></i>
//                     </div>
//                 </Col>

//             </Row>
//             <div className='text-center'>
//                 <img className='w-50 mt-3  mb-3 rounded-end-pill'
//                src={profile?.updatedImg?`${BASE_URL}/uploads/${profile.updatedImg}`:"https://i.postimg.cc/QtHmmRPC/female.jpg"} alt="" />
//             </div>

//             <Container>
//                 <hr className='text-danger ' />
//                 <p className='py-3'>Username : <span className='mx-3 fs-3'>
//                     {profile.user}</span>
//                 </p>
//                 <hr />
//                 <p className='py-3 ' >GitHub : {profile?.gitHub}</p>
//                 <hr className='text-danger ' />
//                 <p className='py-3'>LinkedIn : {profile?.linkedIn}</p>
//                 <hr />

//                 <p className='pt-5 text-end'>
//                     <span className='btn fs-3 text-danger' onClick={handleShow}>
//                         Edit
//                     </span>
//                 </p>

//                 <Modal show={show}
//                     onHide={handleClose}
//                     backdrop='static'
//                     size='md'
//                     centered
//                 >
//                     <Modal.Header closeButton>
//                         <Modal.Title className='text-danger'>
//                             <h4>Update Profile</h4>
//                         </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>

//                         <label htmlFor="img1" className='text-center'>

//                             <img className='w-50 mt-3  mb-3 rounded-end-pill'
//                             src={profile?.updatedImg?`${BASE_URL}/uploads/${profile.updatedImg}`:"https://i.postimg.cc/QtHmmRPC/female.jpg"} alt="" />
//                         </label>

//                         <input placeholder='choose file' onChange={(e) => setProfile({ ...profile, ["image"]: e.target.files[0] })}
//                                 id='img1' style={{ display: 'none' }} type="file" />

//                         <div className='mt-5'>
//                             <input value={profile?.user} onChange={(e) => setData(e)} name="user"
//                                 id='u1' type="text" className='form-control' />
//                         </div>
//                         <div className='mt-3'>
//                             <input value={profile?.gitHub} onChange={(e) => setData(e)} name="gitHub" type="text" className='form-control' placeholder='GitHub' />
//                         </div>
//                         <div className='mt-3 mb-5'>
//                             <input value={profile?.linkedIn} onChange={(e) => setData(e)} name="linkedIn" type="text" className='form-control' placeholder='LinkedIn' />
//                         </div>

//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}>
//                             Close
//                         </Button>
//                         <Button variant="danger" onClick={(e) => handleUpdate(e)}>
//                             Save Changes
//                         </Button>
//                     </Modal.Footer>
//                 </Modal>

//             </Container>

//         </div>
//     )
// }

// export default Profile
