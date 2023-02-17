import React, { useState } from "react";

function login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return <div>Please log in.</div>;
}

export default login;
