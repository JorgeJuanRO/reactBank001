import React from "react";

function User() {
  const name = this.key
  var userData = localStorage.getItem('users');
  user = userData.filter(item=>if(item.name == name));

  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100px",
      }}
    >
      <h1>{user.name} Account</h1>
      <h3> Balance: {user.balance}</h3>
    </div>
  );
}

export default User;
