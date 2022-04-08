import React, { useEffect,useState } from "react";
import { Table, Space, Button } from "antd";
import "./LichHen.scss";
import { Link } from "react-router-dom";
import axios from 'axios';


export const LichHen = () => {
  const [data,setData] = useState();

  function xet(id,staff_id){
    axios.put(`https://acsproject.azurewebsites.net/appointment/accept/${id}`,staff_id)
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));
   
  }


  useEffect(()=>{

    axios.get(`https://acsproject.azurewebsites.net/appointment/all`)
      .then(res => {
        if(res.status === 200){
          setData(res.data.data)
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
      title: "Action",
      key: "action",
      render: (text, record) => 
    {
          console.log(record)
  
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
                      Xét
                    </Button>
                  </a>
                  <a>
                    <Button type="danger" shape="round" size="large ">
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
      <div className="title-table">Danh sách lịch hẹn</div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
