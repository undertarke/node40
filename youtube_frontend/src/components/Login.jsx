import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { loginAPI, loginFacebookAPI } from "../utils/fetchFromAPI";
import ReactFacebookLogin from "react-facebook-login";



const Login = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {

  }, []);

  return <div className="p-5 " style={{ minHeight: "100vh" }}>
    <div className=" d-flex justify-content-center">
      <form className="row g-3 text-white">
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Password</label>
          <input className="form-control" id="pass" />
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-primary" onClick={() => {

            let email = document.querySelector("#email").value;
            let password = document.querySelector("#pass").value;

            let newData = {
              email, password
            }

            loginAPI(newData).then(result => {
              // lưu localStorage => token
              localStorage.setItem("LOGIN_USER", result.data)
              alert("Login thành công")
              window.location.reload()
            }).catch(err => {

              alert(err?.response?.data?.message)
            })

          }}>Login</button>

        </div>
        <ReactFacebookLogin
          appId="937948864649281"
          fields="name,email,picture"
          callback={response => {

            let { name, email, id } = response
            let model = {
              fullName: name,
              email,
              faceAppId: id
            }

            loginFacebookAPI(model).then(result => {
              // lưu localStorage => token
              localStorage.setItem("LOGIN_USER", result.data)
              window.location.reload()

              alert("Login thành công")
            })

          }}
        />
      </form>

    </div>
  </div>
};

export default Login;

// yarn add react-facebook-login