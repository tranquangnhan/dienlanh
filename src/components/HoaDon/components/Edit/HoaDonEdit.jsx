import { Button, Modal, Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import {
  useParams
} from "react-router-dom";
import "./HoaDonEdit.scss";
import { HoaDonItem } from "./HoaDonItem/HoaDonItem";
import { ROUTE } from "../../../../utils/constant";
import { Link } from 'react-router-dom';

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


export const HoaDonEdit = () => {


  const [detail,setDetail] = useState();
  const [detailOrder,setDetailOrder] = useState();
  const [staffWorkSlot,setStaffWorkSlot] = useState();
  const [idStaffWorkSlot,setIdStaffWorkSlot] = useState();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reload,setReload] = useState(0);
  const [time,setTime] = useState();
  const [idOrderDetail,setIdOrderDetail]= useState();

 
    const showModal = (id) => {
      setIdOrderDetail(id);
      setIsModalVisible(true);
      getFreeStaff()
    };

    useEffect(()=>{
      if(time !== undefined){
      getFreeStaff();
      }
    },[time]);


    // lấy nhân viên đang rảnh 
    function getFreeStaff(){
        let date = detail?.date.split(" ")[0] ;
        axios.get(`${ROUTE.MAIN_URL}/workSlot/staff?register_date=${date}&slot_start=${time ?? detail?.time}`)
        .then(res => {
          if(res.status === 200){
            setStaffWorkSlot(res.data.data)
          }
        })
        .catch(error => console.log(error));
    }

  
    const handleOk = () => {
      setIsModalVisible(false);

      // xét nhân viên vào appointment
  
      axios.patch(`${ROUTE.MAIN_URL}/workSlot/detail/${idStaffWorkSlot}/${idOrderDetail}`)
      .then(res => {
        if(res?.status === 200 && res?.data?.success === true){
          
            alert("Đã thêm Thợ máy thành công!");
        }
      })
      .catch(error => console.log(error));

    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    function handleChange(value) {
      setIdStaffWorkSlot(value);
    }

    const [size, setSize] = React.useState('default');

    const handleSizeChange = e => {
        setSize(e.target.value);
    };

    // lấy id của chi tiết hoá đơn
    let { id } = useParams();
   
    useEffect(()=>{

      axios.get(`${ROUTE.MAIN_URL}/order/${id}`)
      .then(res => {
        if(res.status === 200){
          return res.data.data.appointment_id;
        }
      })
      .then(res=>{
        axios.get(`${ROUTE.MAIN_URL}/appointment/${res}`).then((res)=>{
          setDetail(res.data.data);
        })   
      
      })
    },[]);


    // hàm lấy order detail
    useEffect(()=>{
        if(detail?.id != undefined){
          axios.get(`${ROUTE.MAIN_URL}/order/${detail?.id}/appointment`)
          .then(res => {
            if(res.status === 200){
              return res.data.data?.id;
            }
          })
          .then(res=>{
            axios.get(`${ROUTE.MAIN_URL}/orderDetail/${res}/orderId`)
            .then(res => {
              if(res.status === 200){
                setDetailOrder(res.data.data);
              }
            })
          })
          .catch(error => console.log(error));
      }

    },[detail,reload]);
  


    function chapNhan(id){
   
      axios.patch(`${ROUTE.MAIN_URL}/orderDetail/approve/${id}`)
      .then(res => {
        if(res.status === 200){
          setReload(1);
        }
      })
      .catch(error => console.log(error));
    }

    function changeTime(time){
      setTime(time)
    }

  
 
    return (
      <>
        <div className="title-table">Xem Chi Tiết Hoá Đơn</div>
        <div className="table">
           <table>
                <tbody>
                    <HoaDonItem name="Tên khách hàng" 
                      value={ detail?.full_name} 
                    
                    />

                    <HoaDonItem name="Điện thoại" 
                      value={ detail?.phone}
       
                    />
                    <HoaDonItem name="Địa chỉ"   
                      value={ detail?.address}
                  
                    />
                    <HoaDonItem name="Ngày dự kiến" 
                       value={ detail?.date}
 
                    />
                    <HoaDonItem name="Mô tả" 
                       value={ detail?.description}
               
                    />
                    <HoaDonItem name="Số lượng (máy)" 
                     value={ detail?.quantity}
                    />

                    <HoaDonItem name="Thời gian" 
                     value={detail?.time}
                    />
                    <tr>
                        <td width="100%" colSpan={2}> <hr /></td>
                    </tr>
                    <tr className='mb-2 color-red'>
                      <td width="15%">Nội dung</td>
                    </tr>
                    {detailOrder?.map(res=>(
                        <>
                          
                            <tr>
                              <td ><img width="50" height="50" src={res?.image_url ?? ""}></img></td>
                              <td className='pr-1'>{res?.service_name ?? ""}</td> 
                              <td >{res?.service_price ?? ""}</td>
                              <td >{res?.description ?? ""}</td>
                              {/* show chi tiết ở đây */}
                              {
                                (res?.status === 2) && ( <td>  
                                    <Button type="primary" >
                                      Chấp Nhận
                                  </Button>
                                </td>)
                              }
                              {(res?.status === 3) && (
                              <> 
                              <td>
                                <Button type="primary" onClick={()=>chapNhan(res?.id)}>
                                    Chấp Nhận
                                </Button>
                              </td>
                              <td className='pl-2'> 
                                <Button type="danger" >
                                Từ Chối
                              </Button>
                              </td>
                              </>)
                              }
                              {
                                (res?.status === 5) && ( <td>  
                                    <Button type="primary" >
                                     Hoàn Thành
                                  </Button>
                                </td>)
                              }
                              <td>
                              <Button type="primary" onClick={()=>showModal(res?.id)}>
                                Thêm Thợ Máy
                              </Button>
                              </td>
                              
                              </tr>
                        </>
                    ))}
                  
               </tbody>
           </table>
          

            <div className="btn-xacnhan">
                <Link to="/lich-hen">
                  <Button type="primary">
                    Đóng
                  </Button>
                </Link>
            </div>
         
        </div>
        <Modal title="Chọn Nhân Viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                          
          <div>Chọn Thời Gian </div>
          <Select defaultValue="07:30" style={{ width: 120 }} onChange={changeTime}>
            <Option value="07:30">	07:30</Option>
            <Option value="09:30">	09:30</Option>
            <Option value="13:30">	13:30</Option>
            <Option value="15:30">	15:30</Option>
          </Select>
            <br></br>
            <br></br>
            
            <Select defaultValue={staffWorkSlot?.[0]?.full_name } style={{ width: '100%' }} onChange={handleChange}>
                {staffWorkSlot?.map(item=>(
               
                  <Option value={item?.id}>< strong> Tên: </strong>{item?.full_name} &nbsp;&nbsp;&nbsp;&nbsp;< strong> Thời gian:</strong> {item?.slot_start}  <strong>-</strong> {item?.slot_end}</Option>
                ))}
            </Select>
        </Modal>
      </>
    );
  };
  