import React from "react";
import "./LichLamViec.scss";
import { Table, Space, Button } from "antd";
import { Link } from "react-router-dom";

const columns = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Tên",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/lich-lam-viec/${record.key}`}>  {record.name} </Link>
        </Space>
      ),
    },
    {
      title: "Thời Gian",
      dataIndex: "time",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a href={`/lich-lam-viec/${record.key}/edit`}>
            <Button type="primary" shape="round" size="large ">
              Xoá
            </Button>
          </a>
          <Link to={`/lich-lam-viec/${record.key}/edit`}>
            <Button type="danger" shape="round" size="large ">
              Sửa
            </Button>
          </Link>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: "1",
      name: "John Brown",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "2",
      name: "Jim Green",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "3",
      name: "Joe Black",
      time: "13:30 - 17:30",
      status: "Hoạt động",
    },
    {
      key: "4",
      name: "John Brown",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "5",
      name: "test1",
      time: "13:30 - 17:30",
      status: "Hoạt động",
    },
    {
      key: "6",
      name: "Joe Black",
      time: "13:30 - 17:30",
      status: "Hoạt động",
    },
    {
      key: "7",
      name: "John Brown",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "8",
      name: "Jim Green",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "9",
      name: "Joe Black",
      time: "13:30 - 17:30",
      status: "Hoạt động",
    },
  
    {
      key: "10",
      name: "John Brown",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "11",
      name: "Jim Green",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "12",
      name: "Joe Black",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "13",
      name: "John Brown",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "14",
      name: "Jim Green",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "15",
      name: "Joe Black",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "16",
      name: "John Brown",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "17",
      name: "Jim Green",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
    {
      key: "18",
      name: "test 2",
      time: "7:30 - 11:30",
      status: "Hoạt động",
    },
  ];
  

export const LichLamViec = () => {

  
    return (
      <>
        <div className="title-table">Danh sách lịch làm việc</div>
        <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
        
      </>
    );
  };
  