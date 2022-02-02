import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import usersData from "../usersData";
import { UserContext } from "../App";

export default function userProfile() {
  const [usersData, setUsersData] = useContext(UserContext);
  return (
    <div>
      <h1>User Profile of {userData.user.userName}</h1>
      <br />
      <h5>
        <b>User ID: </b>
        {userData.user.id}
      </h5>
      <div>
        {userData.posts}
      </div>
    </div>
  );
}
