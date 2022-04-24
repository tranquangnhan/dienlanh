import { Button, Modal, Select,Input, Space  } from 'antd';
import React, { useState ,useEffect  } from "react";
import "./NhanVienEdit.scss";
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



export const NhanVienEdit = () => {
  const [detail,setDetail] = useState();
  const [name,setName] = useState();
  const [content,setContent] = useState();
  const [status,setStatus] = useState();
  const history = useHistory();
  const [currentStatus,setCurrentStatus] = useState("3");
  const [reload, setReload] = useState(0);

  // lấy id của chi tiết loại dịch vụ
    let { id } = useParams();
  
    useEffect(()=>{

      axios.get(`${ROUTE.MAIN_URL}/staff/${id}/profile`)
      .then(res => {
        if(res.status === 200){
          setDetail(res.data.data)
        }
      })
      .catch(error => console.log(error));

    },[detail,reload]);
  
   


    function isActiveLDV(dom){
    
      if(dom == 2){ // dừng hoạt động
        axios.patch(`${ROUTE.MAIN_URL}/service-type/${id}/de-active`)
          .then(res => {
           setCurrentStatus(dom)
           setReload(1);
          })
          .catch(error => console.log(error));
      }else{
        axios.patch(`${ROUTE.MAIN_URL}/service-type/${id}/active`)
          .then(res => {
            setCurrentStatus(dom)
            setReload(1);
          })
          .catch(error => console.log(error));
      }
      
    }

    function getStatusName(status) {
      switch (status) {
        case 1:
          return "Đã xóa";
        case 2:
          return "Dừng hoạt động";
        case 3:
          return "Hoạt động"
        // case 1:
        //   return <Space style={{color: "red"}}>Đã xóa</Space>;
        // case 2:
        //   return <Space style={{color: "red"}}>Dừng hoạt động</Space>;
        // case 3:
        //   return <Space style={{color: "green"}}>Hoạt động</Space>;
        default:
            break;
      }
    }

    console.log(currentStatus);
    // const num = (detail?.status);
    // const str = num.toString(); //> type string "123"
    return (
      <>
       <div className="title-table">Chi tiết nhân viên</div>
        <div className='boxEdit'>
        <div className="img">
        <img width="300" height="300" src={detail?.imageUrl ?? "No image"}></img>
            </div>
            <div className="table">
              <table>
                    <tbody>
                    <tr>
                            <td width="20%">Tên loại dịch vụ</td>
                            <td > <Input value={name ?? detail?.name} onChange={(dom)=>setName(dom?.target.value)}/></td>
                        </tr>
                        <tr>
                            <td width="20%">Mô tả</td>
                            <td ><Input  value={content ?? detail?.content} onChange={(dom)=>setContent(dom?.target.value)}/></td>
                        </tr>
                        <tr>
                            <td width="20%">Trạng thái</td>
                            <td >
                                <Select value={getStatusName(detail?.status) ?? getStatusName(currentStatus)} style={{ width: 160 }} onChange={(dom)=>isActiveLDV(dom)}>
                                  <Option value="2">Dừng hoạt động</Option>
                                  <Option value="3">Hoạt động </Option>
                                </Select>
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
  