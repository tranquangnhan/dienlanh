import { Button, Modal, Select,Input  } from 'antd';
import React, { useState } from "react";
import "./NhanVienEdit.scss";
import img1 from './img/midu.jpg';

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const NhanVienEdit = () => {

  
  

    return (
      <>
        <div className="title-table">Sửa Lịch Hẹn Khách Hàng</div>
        <div className='boxEdit'>
            <div className="img">
              <img src={img1} />
            </div>
            <div className="table">
              <table>
                    <tbody>
                        <tr>
                            <td width="20%">Tên tài khoản</td>
                            <td >abcxyz102 </td>
                        </tr>
                        <tr>
                            <td width="20%">Họ và tên</td>
                            <td > <Input value="Nguyễn Văn B" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Ngày sinh</td>
                            <td ><Input value="01/02/1990" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Số điên thoại</td>
                            <td ><Input value="0123456789" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Địa chỉ</td>
                            <td ><Input value="Số 123 đường abc, phường 11, Quận 12, TP. Hồ Chí Minh"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Mail</td>
                            <td ><Input value="abc@gmai.com"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Chi nhánh</td>
                            <td ><Input value="Quận 4"/></td>
                        </tr>
                        <tr>
                            <td width="20%">Chức vụ</td>
                            <td ><Input value="Nhân viên kỹ thuật"/></td>
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
  