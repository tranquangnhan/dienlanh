import { Button, Modal, Select,Input,DatePicker  } from 'antd';
import React, { useState } from "react";
import "./KhuyenMaiAdd.scss";
import img1 from './img/midu.jpg';

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const KhuyenMaiAdd = () => {

  
    return (
      <>
        <div className="title-table">Thêm khuyến mãi</div>
        <div className='boxEdit'>
            <div className="table">
              <table>
                    <tbody>
                    <tr>
                            <td width="20%">Tên Khuyến Mãi</td>
                            <td > <Input value="" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Mô tả</td>
                            <td ><Input value="" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Giảm giá (%)</td>
                            <td ><Input value="" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Ngày tạo</td>
                            <td ><Input value="" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Ngày hết hạn</td>
                            <td ><Input value="" /></td>
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
                        Thêm
                      </Button>
                     
                  </div>
              </table>
 
          </div>
        </div>
 
      </>
    );
  };
  