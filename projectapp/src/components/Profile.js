import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateProfile } from "../service/allApi";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../service/baseUrl";

function Profile() {
  const [update, setUpdate] = useState("");

  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");


  const [existingImage, setExistingImage] = useState("")


  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const [profile, setProfile] = useState({
    user: "",
    image: "",
    github: "",
    linkedIn: "",
  });

  // useEffect(() => {
  //   const userData = (JSON.parse(localStorage.getItem("current_user")))

  //   setProfile({ ...profile, user: userData.userName, image: "", github: userData.github, linkedIn: userData.linkedIn})
  //   setExistingImage(userData.profile)
  // },[update])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("current_user"));
  
    setProfile({ ...profile, user: userData.userName, image: "", github: userData.github, linkedIn: userData.linkedIn });
    setExistingImage(userData.profile);
  }, [profile, update]);
  






  useEffect(() => {
    if (profile.image) {
      setPreview(URL.createObjectURL(profile.image));
    }
    else {
      setPreview("")
    }
  }, [profile.image]);
  // console.log(preview);



  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])
  console.log(token);

 



  const setData = (e) => {
    const { value, name } = e.target;
    setProfile({ ...profile, [name]: value });
  };


  
  const handleupdate = async (e) => {
    e.preventDefault();
    const { userName, image, GitHub, LinkedIn } = profile;

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
      reqBody.append("profile", image ? image : existingImage)
      reqBody.append("github", GitHub);
      reqBody.append("linkedIn", LinkedIn);
      console.log(reqBody);
      const response = await updateProfile(reqBody, reqHeader, id);
      // console.log(response);

      if (response.status === 200) {
        alert("updated successfully");
        //update the changed data in local storage
        localStorage.setItem("current_user", JSON.stringify(response.data));
        setUpdate(response.data)
        handleClose()
      }
      else {
        alert("profile updation failed");
      }
    }
  };

console.log(profile)





  // //api call
  // const getprofile = async () => {
  //   //id
  //   if (localStorage.getItem("current_id")) {
  //     let id = localStorage.getItem("current_id");

  //     const headers = {
  //       "Content-Type": "application/json",
  //       access_token: `Bearer ${token}`,
  //     };

  //     const result = await getprofileApi(id);
  //     // console.log(result.data);
  //     console.log(result);

  //     //update the data in profile state
  //     if (result.status == 200) {
  //       setProfile({
  //         ...profile,
  //         user: result.data.userName,
  //         GitHub: result.data.github,
  //         LinkedIn: result.data.linkedIn,
  //         updatedImg: result.data.profile,
  //       });
  //     }
  //     //  else {
  //     //   alert("failed");
  //     // }
  //   }
  // };












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
     { existingImage !== "" ?
      <img className="mt-3 w-25 mb-3 rounded" 
      src={`${BASE_URL}/uploads/${existingImage}`} 
      alt=""
      />
        : 

        <img className="mt-3 w-25 mb-3 rounded" 
       src={"https://i.postimg.cc/jdn1JnQY/images.png"} alt="" />
        }
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

           {existingImage !=="" ?
             <img className="mt-3 w-50 rounded  mb-3   " style={{ textAlign: "center" }} 
             src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt=""/>
              : 
              <img className="mt-3 w-50 rounded  mb-3   " style={{ textAlign: "center" }} 
             src={preview ? preview :  "https://i.postimg.cc/jdn1JnQY/images.png"} alt="" />
              
             }
          </label>


          {/* <input onChange={(e) => setProfile({ ...profile, ["image"]: e.target.files[0] })} */}
          <input onChange={(e) => setProfile({ ...profile, "image": e.target.files[0] })} 

              id="img1" style={{ display: "none" }} type="file" />
          <div className="mt-5">
            <input value={profile?.user} onChange={(e) => setData(e)}
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
  )
}

export default Profile;




