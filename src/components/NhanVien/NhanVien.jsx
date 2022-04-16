import React, { useEffect,useState } from "react";
import { Table, Space, Button } from "antd";
import "./NhanVien.scss";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ROUTE } from "../../utils/constant";



export const NhanVien = () => {
  const [data,setData] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  // hàm lấy tất cả cơ sở
  useEffect(()=>{

    axios.get(`${ROUTE.MAIN_URL}/staff/all`)
      .then(res => {
        if(res.status === 200){
          setData(res.data.data)
        }
      })
      .catch(error => console.log(error));

  },[refreshKey]);

  function getRoleName(roleId) {
    switch (roleId) {
      case 1:
        return "Quản trị viên";
      case 2:
        return "Quản lý";
      case 3:
        return "Nhân viên kỹ thuật";
      case 4:
        return "Thu ngân";
      case 5:
        return "Khách hàng";  
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
      title: "Tên Nhân Viên",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/nhan-vien/${record.key}`}>  {record.fullName} </Link>
        </Space>
      ),
    },
    {
      title: "Chức Vụ",
      render: (text, record) => (
        <>{getRoleName(record.roleId)}</>
      ),
    },
    {
      title: "Chi Nhánh",
      dataIndex: "agencyName",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle" key={record.id}>
          <a href={record.key}>
            <Button type="primary" shape="round" size="large ">
              Xoá
            </Button>
          </a>
          <a>
            <Button type="danger" shape="round" size="large ">
              Sửa
            </Button>
          </a>
        </Space>
      ),
    },
  ];

  


  // hàm lấy cở sở By id
  // function getAgencyById(ids){

  //   return new Promise(function(resolve){
  //     const result = dataAgency?.filter(user=>{
  //       return ids.includes(user.id);
  //     });
  //     resolve(result)
  //   });
  

            

  // hàm lấy ra nhân viên
  // useEffect(()=>{

  //   axios.get(`${ROUTE.MAIN_URL}/staff/all`)
  //     .then(res => {
  //       if(res.status === 200){
  //         // lấy agencyIds
  //         const agencyIds = res.data.data.map(item=>item.agencyId);

  //         getAgencyById(agencyIds)
  //           .then(staff=>{
  //             const final = res.data.data?.map(item=>{
  //               let agency = staff?.find(u=>u.id === item.agencyId);
  //               var nameAgency = agency?.name;
  //               console.log(staff)

  //               return {nameAgency,...item};
  //             })

  //             setData(final);
  //           });

  //       }
  //     })
    
  //     .catch(error => console.log(error));

  // },[]);


  


  return (
    <>
      <div className="title-table">Danh sách nhân viên</div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
