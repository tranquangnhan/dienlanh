import { Button, Input, Select } from 'antd';
import axios from 'axios';
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../utils/constant";
import img1 from './img/midu.jpg';
import "./NhanVienAdd.scss";
import { useHistory } from "react-router-dom";
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
    const [agency,setAgency]  = useState();
    const [agencySelected,setAgencySelected]  = useState();

    const [roleId,setRoleId]  = useState();
    const [userId,setUserId]  = useState();
    const [birthday,setBirthday]  = useState();
    const [file,setFile]  = useState();

    const history = useHistory();
  
    function save(){
      const formData = new FormData();
      formData.append('file',file)
      try {
         axios({
          method: "post",
          url: `${ROUTE.MAIN_URL}/user/staff?address=${address}&agencyId=${agencySelected}
          &birthday=${birthday}&email=${email}&fullName=${fullName}
          &phone=${phone}&roleId=${roleId}&userId=${userId}&username=${username}&valid=${status}`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then(res=>{
       
          if(res?.status === 200 && res?.data?.success === true){
            history.push("/nhan-vien");
          }
        })
      
      } catch(error) {
        console.log(error)
      }
    }

     
    useEffect(()=>{

      axios.get(`${ROUTE.MAIN_URL}/agency/all`)
      .then(res => {
        if(res.status === 200){
        
          setAgency(res.data.data)
        }
      })
      .catch(error => console.log(error));

    },[]);

   

    return (
      <>
        <div className="title-table">Thêm nhân viên</div>
        <div className='boxEdit'>
            <div className="img">
                <img src={img1} name='img'/>
                <input type="file" name='img' id="img" onChange={(dom)=>setFile(dom.target.files[0])} className='inputfile'/>
            </div>
            <div className="table">
              <table>
                    <tbody>
                        <tr>
                            <td width="20%">Tên Đầy Đủ</td>
                            <td ><Input onChange={(dom)=>setFullName(dom.target.value)}  placeholder='Nhập tên tài khoản' /> </td>
                        </tr>
                        <tr>
                            <td width="20%">Chi Nhánh</td>
                            <td >
                              <Select defaultValue="Cơ Sở Quận 12" style={{ width: 120 }} onChange={(dom) => setAgencySelected(dom)}>
                                    {
                                      agency?.map(item=>(
                                        <Option value={item?.id}>{item?.name}</Option>
                                      ))
                                    }
                              </Select> 
                            </td>
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
                            <td width="20%">Ngày Sinh</td>
                            <td ><Input onChange={(dom)=>setBirthday(dom.target.value)} placeholder='Nhập ngày sinh' /></td>
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
                        <tr>
                            <td width="20%">UserId</td>
                            <td ><Input onChange={(dom)=>setUserId(dom.target.value)} placeholder="Nhập UserId"/></td>
                        </tr>
                         <tr>
                            <td width="20%">Chức Vụ</td>
                            <td >
                              <Select defaultValue="1" style={{ width: 120 }} onChange={(dom)=>setRoleId(dom)}>
                                    <Option value='1'>Quản Trị Viên</Option>
                                    <Option value='2'>Quản Lý</Option>
                                    <Option value='3'>Nhân Viên Kỹ Thuật</Option>
                                    <Option value='4'>Nhân Viên Thu Ngân</Option>
                              </Select> 
                            </td>
                        </tr>
                        <tr>
                            <td width="20%">Trạng thái</td>
                            <td >
                                <Select  style={{ width: 120 }} value="Đang hoạt động" onChange={(dom)=>setStatus(dom)}>
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
  