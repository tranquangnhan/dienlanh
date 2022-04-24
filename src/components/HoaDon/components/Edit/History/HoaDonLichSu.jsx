import { Table, Space, Button } from "antd";
import React, { useEffect,useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../../utils/constant";



export const HoaDonLichSu = () => {
  const [data,setData] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(()=>{

    axios.get(`${ROUTE.MAIN_URL}/order/all`)
      .then(res => {
        if(res.status === 200){
          const item = res.data.data.filter(item=>item.status === 1 || item.status === 4)
          setData(item.sort((a,b)=>b.id-a.id))
        }
      })
      .catch(error => console.log(error));

  },[refreshKey]);

  function getStatusName(status) {
    switch (status) {
      case 1:
        return <p style={{color: "#c82333"}}>Đã hủy</p>;
      case 4:
        return <p style={{color: "#28a745"}}>Đã hoàn thành</p>;
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
          <Link to={`/hoa-don/${record.id}`}>  {record.customer_name} </Link>
        </Space>
      ),
    },
    {
      title: "Ngày tạo",
      render: (text, record) => (
        <p>{record?.created_date.split(" ")[0]}</p>
      ),
    },
   
    {
      title: "Trạng thái",
      key: "action",
      render: (text, record) => (
        <>
        {getStatusName(record.status)}
        </>
        
      ),
    },
  ];
  
  

  return (
    <>
      <div className="title-table">
        Danh sách hóa đơn &nbsp;&nbsp;
      <Button style={{ background: "orange", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/hoa-don`}>Đang tiến hành</Link></Button>&nbsp;&nbsp;
      <Button style={{ background: "green", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/hoa-don/lich-su`}>Đã hoàn thành</Link></Button>
      </div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
  };

// function getStatusName(status) {
  //   switch (status) {
  //     case 1:
  //       return <p style={{color: "#c82333"}}>Đã hủy</p>;
  //     case 2:
  //       return <p style={{color: "#28a745"}}>Đã xác nhận</p>;
  //     case 4:
  //       return <p style={{color: "#5899BA"}}>Đã hoàn tất</p>;
  //     default:
  //       break;
  //   }
  // }