import { Button, Modal, Select,Input,DatePicker  } from 'antd';
import React, { useState } from "react";
import "./NhanVienAdd.scss";
import img1 from './img/midu.jpg';

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const NhanVienAdd = () => {

  
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
                            <td width="20%">Tên tài khoản</td>
                            <td ><Input placeholder='Nhập tên tài khoản' /> </td>
                        </tr>
                        <tr>
                            <td width="20%">Mật Khẩu</td>
                            <td > <Input placeholder='Nhập mật khẩu' /></td>
                        </tr>
                        <tr>
                            <td width="20%">Ngày sinh</td>
                            <td > <DatePicker style={{ width: '100%' }} /></td>
                        </tr>
                        <tr>
                            <td width="20%">Số điện thoại</td>
                            <td ><Input placeholder='Nhập số điện thoại' /></td>
                        </tr>
                        <tr>
                            <td width="20%">Địa chỉ</td>
                            <td ><Input placeholder="Địa chỉ"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Mail</td>
                            <td ><Input placeholder="Nhập Email"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Chi nhánh</td>
                            <td ><Input placeholder="Nhập chi nhánh"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Chức vụ</td>
                            <td ><Input placeholder="Nhập chức vụ"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Trạng thái</td>
                            <td >
                                <Select  style={{ width: 120 }} onChange={handleChange}>
                                  <Option value="jack">Đang hoạt động</Option>
                                  <Option value="lucy">Không hoạt động</Option>
                                </Select>
                              
                              </td>
                        </tr>
                      
                  </tbody>
                  <div className="btn-xacnhan">
                      <Button type="danger">
                        Đóng
                      </Button>
                      <Button type="primary">
                        Lưu
                      </Button>
                     
                  </div>
              </table>
 
          </div>
        </div>
 
      </>
    );
  };
  