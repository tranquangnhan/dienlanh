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

  function getStatusName(status) {
    switch (status) {
      case "1":
        return <Space style={{color: "red"}}>Đã xóa</Space>;
      case "2":
        return <Space style={{color: "red"}}>Dừng hoạt động</Space>;
      case "3":
        return <Space style={{color: "green"}}>Hoạt động</Space>;
      default:
          break;
    }
  }

  console.log(data);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Tên khách hàng",
      render: (text, record) => (
        <Space size="middle">
        <Link to={`/khach-hang/${record.id}`}> {record.fullName} </Link>
      </Space>
        
      ),
    },
    {
      title: "Số điện thoại",
      render: (text, record) => (
         <> {record.phone} </>
        
      ),
    },
    {
      title: "Địa chỉ",
      render: (text, record) => (
         <> {record.address} </>
        
      ),
    },
    {
      title: "Mail",
      render: (text, record) => (
         <> {record.email} </>
        
      ),
    },
    {
      title: "Trạng thái",
      render: (text, record) => (
        <>{getStatusName(record.status)}</>
      )
      ,
    },
    {
      title: "",
      render: (text, record) => {

        if (record.status === "2") {
          return (
            <Button key={record.id} style={{background: "green", color: "white", margin:"0 auto"}} shape="round" size="large " >
              Hoạt Động
            </Button>
          )
        }
        if (record.status === "3") {
          return (
            <Button key={record.id} style={{background: "red", color: "white", margin:"0 auto"}} shape="round" size="large " >
              Dừng hoạt Động
            </Button>
          )
        }

      },
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

