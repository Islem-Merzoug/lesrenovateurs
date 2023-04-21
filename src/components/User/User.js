import React, { useEffect } from "react";
import { useState } from "react";
import "./User.css";

const UserCard = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setUser({
      username: localStorage.getItem("username"),
      //   name: localStorage.getItem("bio"),
      email: localStorage.getItem("email"),
      //   name: localStorage.getItem("location"),
    });
  };
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={`${"user.name"}'s avatar`}
        />
      </div>
      <div className="user-info">
        <h2>{user?.username}</h2>
        {/* <p>{"user.bio"}</p> */}
        <div className="user-details">
          <div className="user-detail">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{user?.email}</span>
          </div>
          {/* <div className="user-detail">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{"user.location"}</span>
          </div>
          <div className="user-detail">
            <span className="detail-label">Website:</span>
            <a
              href={"user.website"}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-value"
            >
              {"user.website"}
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
