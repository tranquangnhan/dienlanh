import { Table, Space, Button } from "antd";
import React, { useEffect,useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../utils/constant";



export const LichHenLichSu = () => {
  const [data,setData] = useState();

  useEffect(()=>{

    axios.get(`https://acsproject.azurewebsites.net/appointment/all`)
      .then(res => {
        if(res.status === 200){
          const item = res.data.data.filter(item=> item.status === 2 || item.status === 4)
          setData(item.sort((a,b)=>b.id-a.id))
        }
      })
      .catch(error => console.log(error));

  },[]);

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
      title: "Ngày sửa chữa",
      render: (text, record) => (
        <>{record?.date.split(" ")[0]}</>
      ),
    },
    {
      title: "Thời gian",
      dataIndex: "time",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      render: (text, record) => (
        <>
        {getStatusName(record.status)}
        </>
      ),
    }
    
  ];
  
  function getStatusName(status) {
    switch (status) {
      case 1:
        return <p style={{color: "#c82333"}}>Đã hủy</p>;
      case 2:
        return <p style={{color: "#28a745"}}>Đã xác nhận</p>;
      case 4:
        return <p style={{color: "#5899BA"}}>Đã hoàn tất</p>;
      default:
        break;
    }
  }

  return (
    <>
      <div className="title-table">
        Danh sách lịch hẹn &nbsp;&nbsp;
        <Button style={{ background: "orange", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/lich-hen`}>Đang chờ</Link></Button>&nbsp;&nbsp;
      <Button style={{ background: "green", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/lich-hen/lich-su`}>Đã xác nhận</Link></Button>&nbsp;&nbsp;
      <Button style={{ background: "red", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/lich-hen/huy`}>Từ chối</Link></Button>&nbsp;&nbsp;
      </div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
  };

