import { Button, Modal, Select,Input,DatePicker  } from 'antd';
import React, { useState } from "react";
import "./LoaiDichVuAdd.scss";
import img1 from './img/midu.jpg';

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const LoaiDichVuAdd = () => {

  
    return (
      <>
        <div className="title-table">Thêm loại dịch vụ</div>
        <div className='boxEdit'>
        <div className="img">
              <img src={img1} />
            </div>
            <div className="table">
              <table>
                    <tbody>
                        <tr>
                            <td width="20%">Tên loại dịch vụ</td>
                            <td > <Input value="" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Mô tả</td>
                            <td ><Input value=" " /></td>
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
  