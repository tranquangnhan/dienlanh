import { Button, Modal, Select,Input  } from 'antd';
import React, { useState } from "react";
import "./KhuyenMaiChiTiet.scss";
import img1 from './img/midu.jpg';

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const KhuyenMaiChiTiet = () => {
  
    return (
      <>
       <div className="title-table">Chi tiết khuyến mãi</div>
        <div className='boxEdit'>
            
            <div className="table">
              <table>
                    <tbody>
                        <tr>
                            <td width="20%">Tên Khuyến Mãi</td>
                            <td > <Input value="Mừng 8/3" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Mô tả</td>
                            <td ><Input value="Nhân ngày ..." /></td>
                        </tr>
                        <tr>
                            <td width="20%">Giảm giá (%)</td>
                            <td ><Input value="10" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Ngày tạo</td>
                            <td ><Input value="7/3/2022" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Ngày hết hạn</td>
                            <td ><Input value="9/3/2022" /></td>
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
  