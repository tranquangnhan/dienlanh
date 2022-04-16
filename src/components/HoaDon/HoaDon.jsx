import React, { useEffect,useState } from "react";
import { Table, Space, Button } from "antd";
import "./HoaDon.scss";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ROUTE } from "../../utils/constant";


export const HoaDon = () => {
  const [data,setData] = useState();
  const [refreshKey, setRefreshKey] = useState(0);


  function xet(id,staff_id){
    axios.put(`${ROUTE.MAIN_URL}/appointment/accept/${id}/2`,)
    .then(res => {
      if(res.status === 200){
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

    axios.get(`${ROUTE.MAIN_URL}/order/all`)
      .then(res => {
        if(res.status === 200){
          const item = res.data.data.filter(item=>item.status === 2 || item.status === 3)
          setData(item.sort((a,b)=>b.id-a.id))
          // setData(res.data.data.sort((a,b)=>b.id-a.id));
        }
      })
      .catch(error => console.log(error));

  },[refreshKey]);

  
  const columns = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Tên Khách Hàng",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/hoa-don/${record.id}`}>  {record.customer_name} </Link>
        </Space>
      ),
    },
    {
      title: "Ngày tạo",
      render: (text, record) => (
        <>{record?.created_date.split(" ")[0]}</>
      ),
    },
   
    {
      title: "Trạng thái",
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
          if(record.status === 2 || record.status === 3) {
            return (
            <Button key={record.id} type="disable" style={{ background: "#f7941d", color: "white", margin:"0 auto" }} shape="round" size="large ">
                Đang tiến hành
            </Button>
            ) 
          }
          if(record.status === 4) {
            return (
            <Button key={record.id} type="disable" style={{ background: "#28a745", color: "white", margin:"0 auto" }} shape="round" size="large ">
                Hoàn tất
            </Button>
            ) 
          }
    }
      ,
    },
  ];


  return (
    <>
      <div className="title-table">Danh sách hóa đơn</div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
