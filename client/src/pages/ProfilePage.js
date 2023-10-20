import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, [username]);
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, [email]);
  useEffect(() => {
    setImage(localStorage.getItem("image"));
  }, [image]);
  return (
    <>
      <div className="container">
        <h1>Profile Page</h1>
        <div
          style={{ paddingTop: "60px" }}
          className="container d-flex justify-content-center align-items-center"
        >
          <div className="card">
            <div className="upper">
              <img
                src="https://i.imgur.com/Qtrsrk5.jpg"
                className="img-fluid"
              />
            </div>

            <div className="user text-center">
              <div className="profile">
                <img src={image} className="rounded-circle" width="80" />
              </div>
            </div>

            <div className="mt-5 text-center">
              <h4 className="mb-0">{username}</h4>
              <span className="text-muted d-block mb-2">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
