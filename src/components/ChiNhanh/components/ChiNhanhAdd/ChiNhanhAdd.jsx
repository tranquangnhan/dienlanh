import { Button, Input, Select } from 'antd';
import axios from 'axios';
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from '../../../../utils/constant';
import "./ChiNhanhAdd.scss";
import { useHistory } from "react-router-dom";
const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


export const ChiNhanhAdd = () => {
    const [name,setName] = useState();
    const [description,setDescription] = useState();
    const [price,setPrice] = useState();
    const [status,setStatus] = useState();
    const [typeName,setTypeName] = useState();
    const [typeNameSelected,setTypeNameSelected] = useState();
    const history = useHistory();
  
    function save(){
      axios.post(`${ROUTE.MAIN_URL}/service/create?description=${description}&name=${name}&price=${price}&status=${status}&type_id=${typeNameSelected}`)
      .then(res => {
        console.log(res?.data?.success)
        if(res?.status === 200 && res?.data?.success === true){
          history.push("/dich-vu");
        }
      })
      .catch(error => console.log(error));
    }

     

    useEffect(()=>{

      axios.get(`${ROUTE.MAIN_URL}/service-type/all`)
      .then(res => {
        if(res.status === 200){
        
          setTypeName(res.data.data)
        }
      })
      .catch(error => console.log(error));

    },[]);



    return (
      <>
        <div className="title-table">Thêm chi nhánh</div>
        <div className='boxEdit'>
            <div className="table">
              <table>
                    <tbody>
                        <tr>
                            <td width="20%">Tên dịch vụ</td>
                            <td ><Input onChange={(dom)=>setName(dom.target.value)}  placeholder='Nhập tên dịch vụ' /> </td>
                        </tr>
                        
                        <tr>
                            <td width="20%">Loại dịch vụ</td>
                            <td >
                              <Select defaultValue="Vệ sinh máy lạnh" style={{ width: 200 }} onChange={(dom) => setTypeNameSelected(dom)}>
                                    {
                                      typeName?.map(item=>(
                                        <Option value={item?.id}>{item?.name}</Option>
                                      ))
                                    }
                              </Select> 
                            </td>
                        </tr>

                        <tr>
                            <td width="20%">Mô tả</td>
                            <td ><Input onChange={(dom)=>setDescription(dom.target.value)}  placeholder='Nhập mô tả' /> </td>
                        </tr>

                        <tr>
                            <td width="20%">Phí (đồng)</td>
                            <td ><Input onChange={(dom)=>setPrice(dom.target.value)}  placeholder='Nhập phí sửa chữa' /> </td>
                        </tr>
                        
                        <tr>
                            <td width="20%">Trạng thái</td>
                            <td >
                                <Select defaultValue="1" style={{ width: 160 }} onChange={(dom)=>setStatus(dom)}>
                                  <Option value="1">Dừng hoạt động</Option>
                                  <Option value="2">Hoạt động </Option>
                                </Select>
                              </td>

                        </tr>
                        
                      
                  </tbody>
                  <div className="btn-xacnhan">
                      <Link to="/loai-dich-vu">
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
  