import React, { useEffect,useState } from "react";
import { Table, Space, Button } from "antd";
import "./LichHen.scss";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ROUTE } from "../../utils/constant";


export const LichHen = () => {
  const [data,setData] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  function xet(id,staff_id){
    axios.put(`${ROUTE.MAIN_URL}/appointment/accept/${id}/2`,)
    .then(res => {
      if(res.status === 200){
        setData(res)
        setRefreshKey(oldKey => oldKey +1)
      }
    })
    .catch(error => console.log(error));
   
  }
  
  function cancel(id){
    axios.patch(`${ROUTE.MAIN_URL}/appointment/cancel/${id}`,)
    .then(res => {
      if(res.status === 200){
        setRefreshKey(oldKey => oldKey +1)
      }
    })
    .catch(error => console.log(error));
  }

 

  useEffect(()=>{

    axios.get(`${ROUTE.MAIN_URL}/appointment/all`)
      .then(res => {
        if(res.status === 200){
          const item = res.data.data.filter(item => item.status === 3)
          setData(item.sort((a,b)=>b.id-a.id))
        }
      })
      .catch(error => console.log(error));

  },[refreshKey]);

  function getStatusName(status) {
    switch (status) {
      case 1:
        return <Space style={{color: "red"}}>Đã hủy</Space>;
      case 2:
        return <Space style={{color: "green"}}>Đã xác nhận</Space>;
      case 3:
        return <Space style={{color: "orange"}}>Đang chờ</Space>;
      case 4:
        return <Space style={{color: "green"}}>Đã hoàn tất</Space>;
      default:
          break;
    }
  }

  const columns = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Tên Khách Hàng",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/lich-hen/${record.id}`}>  {record.full_name} </Link>
        </Space>
      ),
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phone",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
    },
    {
      title: "Loại Dịch Vụ",
      dataIndex: "description",
    },
    {
      title: "Số Lượng",
      dataIndex: "quantity",
    },
    {
      title: "Trạng thái",
      render: (text, record) => (

        <>{getStatusName(record.status)}</>

      ),
    },
    {
      title: "",
      key: "action",
      render: (text, record) => 
    {  
          if(record.status === 1) {
            return (
            <Button key={record.id} type="disable" style={{ background: "#c82333", color: "white", margin:"0 auto" }} shape="round" size="large ">
                Đã huỷ
            </Button>
            ) 
          }
          if(record.status === 2) {
            return (
            <Button key={record.id} type="disable" style={{ background: "#28a745", color: "white", margin:"0 auto" }} shape="round" size="large ">
                Đã xác nhận
            </Button>
            ) 
          }
          if(record.status === 3) {
            return (
              <Space size="middle" key={record.id}>
                  <a href={record.key}>
                  <Button onClick={() => xet(record.id,record.staff_id)} type="primary" shape="round" size="large ">
                      <Link to={`/hoa-don/:id`}>Chấp nhận</Link>
                    </Button>
                  </a>
                  <a>
                    <Button onClick={() => cancel(record.id)} type="danger" shape="round" size="large ">
                      Từ Chối
                    </Button>
                  </a>
              </Space>
            )
          }
          if(record.status === 4) {
            return (
            <Button key={record.id} type="disable" style={{ background: "#f7941d", color: "white", margin:"0 auto" }} shape="round" size="large ">
                Xong
            </Button>
            ) 
          }
    }
      ,
    },
  ];


  return (
    <>
      <div className="title-table">
        Danh sách lịch hẹn &nbsp;&nbsp;
      <Button style={{ background: "orange", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/lich-hen`}>Đang chờ</Link></Button>&nbsp;&nbsp;
      <Button style={{ background: "green", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/lich-hen/lich-su`}>Đã xác nhận</Link></Button>
      </div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
