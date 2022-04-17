import React, { useEffect,useState } from "react";
import { Table, Space, Button } from "antd";
import "./KhachHang.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../utils/constant";
import axios from 'axios';

export const KhachHang = () => {
  const [data,setData] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  

  useEffect(()=>{

    axios.get(`${ROUTE.MAIN_URL}/customer/all`)
      .then(res => {
        if(res.status === 200){
          setData(res.data.data)
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
      title: "Tên khách hàng",
      render: (text, record) => (
         <p> {record.fullName} </p>
        
      ),
    },
    {
      title: "Số điện thoại",
      render: (text, record) => (
         <p> {record.phone} </p>
        
      ),
    },
    {
      title: "Địa chỉ",
      render: (text, record) => (
         <p> {record.address} </p>
        
      ),
    },
    {
      title: "Trạng thái",
      render: (text, record) => 
    (
      <Space style={{color: "green"}}>Hoạt động</Space>
    )
      ,
    },
    {
      title: "Chi tiết",
      render: (text, record) => (
        <Space size="middle">
          <Button type="disable" style={{ background: "#5899BA", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/loai-dich-vu/${record.id}`}>  Chi tiết </Link></Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="title-table">Danh sách loại dịch vụ</div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

