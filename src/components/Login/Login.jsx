import React, { useState } from "react";
import "./Login.scss";
import PropTypes from "prop-types";
import { ROUTE } from "../../utils/constant";
import { Button, Input, Space } from "antd";

async function loginUser(credentials) {
  return fetch(`${ROUTE.MAIN_URL}/user/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token.success === true) {
      if (token.data === 1) {
        setToken(token.data);
        localStorage.setItem("name", JSON.stringify("ADMIN"));
      } else {
        setToken(token.data.roleId);
        localStorage.setItem("name", JSON.stringify(token.data.fullName));
        localStorage.setItem("agencyId", JSON.stringify(token.data.agencyId));
      }
    } else {
      alert("sai Tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="form-box">
        <h1>Đăng Nhập</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <Space>Tên tài khoản</Space>
            <Input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <br />
          <br />
          <label>
            <Space>Mật khẩu</Space>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <br />
          <div>
            <button
              style={{
                background: "#5899BA",
                color: "white",
                margin: "0 auto",
              }}
              type="submit"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
