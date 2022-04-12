import { Button, Modal, Select,Input  } from 'antd';
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { ROUTE } from '../../../../utils/constant';
import "./DichVuChiTiet.scss";

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const DichVuChiTiet = () => {
  const [data,setData] = useState();
  const [refreshKey, setRefreshKey] = useState(0);
  

  
  useEffect(()=>{

    axios.get(`${ROUTE.MAIN_URL}/service/all`)
      .then(res => {
        if(res.status === 200){
          setData(res.data.data)
        }
      })
      .catch(error => console.log(error));

  },[refreshKey]);

  
    return (
      <>
       <div className="title-table">Chi tiết dịch vụ</div>
        <div className='boxEdit'>
            
            <div className="table">
              <table>
                    <tbody>
                        <tr>
                            <td width="20%">Loại dịch vụ</td>
                            <td >
                                <Select  style={{ width: 200 }} onChange={handleChange}>
                                  <Option value="jack">Vệ sinh máy lạnh</Option>
                                  <Option value="lucy">Bảo trì máy lạnh</Option>
                                  <Option value="lucy">Sửa chữa máy lạnh</Option>
                                </Select>
                              
                              </td>
                        </tr>
                        <tr>
                            <td width="20%">Tên dịch vụ</td>
                            <td > <Input value="Bơm ga" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Mô tả</td>
                            <td ><Input value="Bơm ga ..." /></td>
                        </tr>
                        <tr>
                            <td width="20%">Phí (đồng)</td>
                            <td ><Input value="500.000" /></td>
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
  