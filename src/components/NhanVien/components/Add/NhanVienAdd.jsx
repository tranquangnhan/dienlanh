import { Button, Input, Select } from 'antd';
import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../utils/constant";
import img1 from './img/midu.jpg';
import "./NhanVienAdd.scss";

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


export const NhanVienAdd = () => {
    const [username,setUsername] = useState();
    const [fullName,setFullName] = useState();
    const [password,setPassword]  = useState();
    const [address,setAddress]  = useState();
    const [phone,setPhone]  = useState();
    const [email,setEmail]  = useState();
    const [status,setStatus]  = useState();

    function save(){
      axios.post(`${ROUTE.MAIN_URL}/user/customer?address=${address}
      &email=${email}&fullName=${fullName}&password=${password}
      &phone=${phone}&username=${username}
      `)
      .then(res => {
        if(res.status === 200){
          console.log(res)
        }
      })
      .catch(error => console.log(error));
    }

    return (
      <>
        <div className="title-table">Thêm Lịch Hẹn Khách Hàng</div>
        <div className='boxEdit'>
            <div className="img">
              <img src={img1} />
            </div>
            <div className="table">
              <table>
                    <tbody>
                        <tr>
                            <td width="20%">Tên Đầy Đủ</td>
                            <td ><Input onChange={(dom)=>setFullName(dom.target.value)}  placeholder='Nhập tên tài khoản' /> </td>
                        </tr>
                        <tr>
                            <td width="20%">Tên tài khoản</td>
                            <td ><Input onChange={(dom)=>setUsername(dom.target.value)}  placeholder='Nhập tên tài khoản' /> </td>
                        </tr>
                        <tr>
                            <td width="20%">Mật Khẩu</td>
                            <td > <Input onChange={(dom)=>setPassword(dom.target.value)} placeholder='Nhập mật khẩu' /></td>
                        </tr>
                    
                        <tr>
                            <td width="20%">Số điện thoại</td>
                            <td ><Input onChange={(dom)=>setPhone(dom.target.value)} placeholder='Nhập số điện thoại' /></td>
                        </tr>
                        <tr>
                            <td width="20%">Địa chỉ</td>
                            <td ><Input onChange={(dom)=>setAddress(dom.target.value)} placeholder="Địa chỉ"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Mail</td>
                            <td ><Input onChange={(dom)=>setEmail(dom.target.value)} placeholder="Nhập Email"/></td>
                        </tr>
                        {/* <tr>
                            <td width="20%">Chi nhánh</td>
                            <td ><Input placeholder="Nhập chi nhánh"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Chức vụ</td>
                            <td ><Input placeholder="Nhập chức vụ"/></td>
                        </tr> */}
                        <tr>
                            <td width="20%">Trạng thái</td>
                            <td >
                                <Select  style={{ width: 120 }} value="true" onChange={(dom)=>setStatus(dom.target.value)}>
                                  <Option value="true">Đang hoạt động</Option>
                                  <Option value="false">Không hoạt động</Option>
                                </Select>
                              </td>
                        </tr>
                      
                  </tbody>
                  <div className="btn-xacnhan">
                      <Link to="/nhan-vien">
                        <Button type="danger">
                          Đóng
                        </Button>
                      </Link>
                     
                      <Button type="primary" onClick={()=>save()}>
                        Lưu
                      </Button>
                     
                  </div>
              </table>
 
          </div>
        </div>
 
      </>
    );
  };
  