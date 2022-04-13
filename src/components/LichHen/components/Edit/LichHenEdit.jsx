import { Button, Modal, Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import {
  useParams
} from "react-router-dom";
import "./LichHenEdit.scss";
import { LichHenItem } from "./LichHenItem/LichHenItem";
import { ROUTE } from "../../../../utils/constant";
import { Link } from 'react-router-dom';

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


export const LichHenEdit = () => {

  const [fullName,setfullName] = useState();
  const [phone,setPhone] = useState();
  const [address,setAddress] = useState();
  const [date,setDate] = useState();
  const [description,setDescription] = useState();
  const [quantity,setQuantity] = useState();
  const [time,setTime] = useState();

  const [detail,setDetail] = useState();
  const [detailOrder,setDetailOrder] = useState();
  const [staffWorkSlot,setStaffWorkSlot] = useState();
  const [idStaffWorkSlot,setIdStaffWorkSlot] = useState();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    // lấy nhân viên đang rảnh

      let date = detail?.date.split(" ")[0] ;
      axios.get(`${ROUTE.MAIN_URL}/workSlot/staff?register_date=${date}&slot_start=${detail?.time}`)
      .then(res => {
        if(res.status === 200){
          setStaffWorkSlot(res.data.data)
        }
      })
      .catch(error => console.log(error));
    };
  
    const handleOk = () => {
      setIsModalVisible(false);

      // xét nhân viên vào appointment
      let idOrderDetail = detailOrder?.[0].id;
   
      axios.patch(`${ROUTE.MAIN_URL}/workSlot/detail/${idStaffWorkSlot}/${idOrderDetail}`)
      .then(res => {
        if(res?.status === 200 && res?.data?.data?.success === true){
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
    console.log(idStaffWorkSlot)
  

    const [size, setSize] = React.useState('default');

    const handleSizeChange = e => {
        setSize(e.target.value);
    };

    // lấy id của chi tiết lịch hẹn
    let { id } = useParams();
   
    useEffect(()=>{

      axios.get(`${ROUTE.MAIN_URL}/appointment/${id}`)
      .then(res => {
        if(res.status === 200){
          setDetail(res.data.data)
        }
      })
      .catch(error => console.log(error));

    },[]);


    // hàm lấy order detail
    useEffect(()=>{

      axios.get(`${ROUTE.MAIN_URL}/order/${id}/appointment`)
      .then(res => {
        if(res.status === 200){
          return res.data.data.id;
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

    },[]);


    // function sua(){
    //   axios.put(`${ROUTE.MAIN_URL}/appointment/update/${id}`,{
    //       full_name: fullName ?? detail?.full_name,
    //       phone: phone ??  detail?.phone,
    //       address: address ??  detail?.address,
    //       date: date ??  detail?.date,
    //       description: description ??  detail?.description,
    //       quantity: quantity ?? detail?.quantity,
    //       time: time?? detail?.time,
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => console.log(error));
    // }



    
 
    return (
      <>
        <div className="title-table">Sửa Lịch Hẹn Khách Hàng</div>
        <div className="table">
           <table>
                <tbody>
                    <LichHenItem name="Tên khách hàng" 
                      value={fullName ?? detail?.full_name} 
                      changeValue={(item)=> setfullName(item)}
                    />

                    <LichHenItem name="Điện thoại" 
                      value={phone ?? detail?.phone}
                      changeValue={(item)=> setPhone(item)}
                    />
                    <LichHenItem name="Địa chỉ"   
                      value={address ?? detail?.address}
                      changeValue={(item)=> setAddress(item)}
                    />
                    <LichHenItem name="Ngày dự kiến" 
                       value={date ?? detail?.date}
                       changeValue={(item)=> setDate(item)}
                    />
                    <LichHenItem name="Mô tả" 
                       value={description ?? detail?.description}
                       changeValue={(item)=> setDescription(item)}
                    />
                    <LichHenItem name="Số lượng (máy)" 
                     value={quantity ?? detail?.quantity}
                     changeValue={(item)=> setQuantity(item)}/>

                    <LichHenItem name="Thời gian" 
                     value={time ?? detail?.time}
                     changeValue={(item)=> setTime(item)}/>
                    <tr>
                        <td width="100%" colSpan={2}> <hr /></td>
                    </tr>

                    <LichHenItem name="Nội dung" value={detailOrder?.[0]?.description ?? ""}/>
         
               </tbody>
           </table>
            <div className="btn-addtho">
                <Button type="primary" onClick={showModal}>
                    Thêm Thợ Máy
                </Button>
            </div>

            <div className="btn-xacnhan">
                <Link to="/lich-hen">
                  <Button type="primary">
                    Đóng
                  </Button>
                </Link>
            </div>
         
        </div>
        <Modal title="Chọn Nhân Viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Select defaultValue={staffWorkSlot?.[0]?.full_name} style={{ width: 120 }} onChange={handleChange}>
                {staffWorkSlot?.map(item=>(
                  <Option value={item?.id}>{item?.full_name}</Option>
                ))}
            </Select>
        </Modal>
      </>
    );
  };
  