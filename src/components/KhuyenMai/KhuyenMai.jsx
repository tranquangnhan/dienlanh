import React, { useEffect,useState } from "react";
import { Table, Space, Button } from "antd";
import "./KhuyenMai.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../utils/constant";
import axios from 'axios';

export const KhuyenMai = () => {
  const [data,setData] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  

  useEffect(()=>{

    axios.get(`${ROUTE.MAIN_URL}/promotion/all`)
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
      title: "Tiêu đề",
      render: (text, record) => (
         <p> {record.title} </p>
        
      ),
    },
    {
      title: "Giảm giá (%)",
      render: (text, record) => (
         <p> {record.discount} </p>
        
      ),
    },
    {
      title: "Ngày tạo",
      render: (text, record) => (
         <p> {record.start_date} </p>
        
      ),
    },
    {
      title: "Ngày hết hạn",
      render: (text, record) => (
         <p> {record.end_date} </p>
        
      ),
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (text, record) => 
    {  
          if(record.status === 1) {
            return (
            <p key={record.id} style={{color: "red", margin:"0 auto" }}>
                Dừng hoạt động
            </p>
            ) 
          }
          if(record.status === 2) {
            return (
            <p key={record.id} style={{color: "green", margin:"0 auto" }}>
                Hoạt động
            </p>
            ) 
          }
          
    }
      ,
    },
    {
      title: "Chi tiết",
      render: (text, record) => (
        <Space size="middle">
          <Button type="disable" style={{ background: "#5899BA", color: "white", margin:"0 auto" }} shape="round" size="large "><Link to={`/khuyen-mai/${record.id}`}>  Chi tiết </Link></Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="title-table">Danh sách khuyến mãi</div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

