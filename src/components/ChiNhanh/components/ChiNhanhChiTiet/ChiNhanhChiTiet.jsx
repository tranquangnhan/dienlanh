import { Button, Modal, Select,Input, Space  } from 'antd';
import React, { useState ,useEffect  } from "react";
import "./ChiNhanhChiTiet.scss";
import img1 from './img/midu.jpg';
import {
  useParams
} from "react-router-dom";
import { ROUTE } from '../../../../utils/constant';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}



export const ChiNhanhChiTiet = () => {
  const [detail,setDetail] = useState();
  const [name,setName] = useState();
  const [address,setAddress] = useState();
  const [ward_id,setWard_id] = useState();
  const [phone ,setPhone ] = useState();
  const [manager_id,setManager_id] = useState();
  const [rating,setRating] = useState();
  const [status,setStatus] = useState();
  const [created_date,setCreated_date] = useState();
  const [updated_by,setUpdated_by] = useState();
  const [wardName,setWardName] = useState();
  const [wardNameSelected,setWardNameSelected] = useState();
  const history = useHistory();
  const [currentStatus,setCurrentStatus] = useState("3");
  const [reload, setReload] = useState(0);

  // lấy id của chi tiết loại dịch vụ
    let { id } = useParams();
  
    useEffect(()=>{

      axios.get(`${ROUTE.MAIN_URL}/agency/${id}`)
      .then(res => {
        if(res.status === 200){
          setDetail(res.data.data)
        }
      })
      .catch(error => console.log(error));

    },[detail,reload]);
  
    function sua(){
     axios.put(`${ROUTE.MAIN_URL}/agency/update/${id}/manager?address=${address ?? detail?.address}&name=${name ?? detail?.name}&phone=${phone ?? detail?.phone}&updated_by=1&ward_id=3`)
      .then(res => {
        console.log(res?.data?.success)
        if(res?.status === 200 && res?.data?.success === true){
          history.push("/dich-vu");
        }
      })
      .catch(error => console.log(error));
    }


    // function isActiveLDV(dom){
    
    //   if(dom == 2){ // dừng hoạt động
    //     axios.patch(`${ROUTE.MAIN_URL}/service-type/${id}/de-active`)
    //       .then(res => {
    //        setCurrentStatus(dom)
    //        setReload(1);
    //       })
    //       .catch(error => console.log(error));
    //   }else{
    //     axios.patch(`${ROUTE.MAIN_URL}/service-type/${id}/active`)
    //       .then(res => {
    //         setCurrentStatus(dom)
    //         setReload(1);
    //       })
    //       .catch(error => console.log(error));
    //   }
      
    // }

    useEffect(()=>{

      axios.get(`${ROUTE.MAIN_URL}/ward/all`)
      .then(res => {
        if(res.status === 200){
        
          setWardName(res.data.data)
        }
      })
      .catch(error => console.log(error));

    },[]);

    function getStatusName(status) {
      switch (status) {
        case 1:
          return <Space style={{color: "red"}}>Dừng hoạt động</Space>;
        case 2:
          return <Space style={{color: "green"}}>Hoạt động</Space>;
        default:
            break;
      }
    }

    

    console.log(wardNameSelected);
    // const num = (detail?.status);
    // const str = num.toString(); //> type string "123"
    return (
      <>
       <div className="title-table">Chi tiết chi nhánh</div>
        <div className='boxEdit'>
        
            <div className="table">
              <table>
                    <tbody>
                    <tr>
                            <td width="20%">Tên chi nhánh</td>
                            <td > <Input value={name ?? detail?.name} onChange={(dom)=>setName(dom?.target.value)}/></td>
                        </tr>

                        <tr>
                            <td width="20%">Địa chỉ</td>
                            <td ><Input  value={address ?? detail?.address} onChange={(dom)=>setAddress(dom?.target.value)}/></td>
                        </tr>
                        
                        <tr>
                            <td width="20%">Số điện thoại</td>
                            <td ><Input  value={phone ?? detail?.phone} onChange={(dom)=>setPhone(dom?.target.value)}/></td>
                        </tr>

                        <tr>
                            <td width="20%">Ngày tạo</td>
                            <td ><Input  value={created_date ?? detail?.created_date.split(" ")[0]} onChange={(dom)=>setCreated_date(dom?.target.value)}/></td>
                        </tr>

                        

                        <tr>
                            <td width="20%">Trạng thái</td>
                            <td >
                            <>{getStatusName(detail?.status)}</>    
                            </td>

                        </tr>
                        
                  </tbody>
                  <div className="btn-xacnhan">
                      <Button type="danger">
                        Đóng
                      </Button>
                      <Button type="primary" onClick={()=>sua()}>
                        Lưu
                      </Button>
                     
                  </div>
              </table>
              

              
          </div>
        </div>
 
      </>
    );
  };
  