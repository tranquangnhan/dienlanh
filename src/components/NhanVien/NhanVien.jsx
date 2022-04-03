import React from "react";
import { Table, Space, Button } from "antd";
import "./NhanVien.scss";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Tên Nhân Viên",
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/nhan-vien/${record.key}`}>  {record.name} </Link>
      </Space>
    ),
  },
  {
    title: "Chức Vụ",
    dataIndex: "position",
  },
  {
    title: "Chi Nhánh",
    dataIndex: "branch",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
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

const data = [
  {
    key: "1",
    name: "John Brown",
    position: "Chăm sóc khách hàng",
    branch: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    position: "Chăm sóc khách hàng",
    branch: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    position: "Nhân viên kỹ thuật",
    branch: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "John Brown",
    position: "Chăm sóc khách hàng",
    branch: "New York No. 1 Lake Park",
  },
  {
    key: "5",
    name: "test1",
    position: "Nhân viên kỹ thuật",
    branch: "London No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Joe Black",
    position: "Nhân viên kỹ thuật",
    branch: "Sidney No. 1 Lake Park",
  },
  {
    key: "7",
    name: "John Brown",
    position: "Chăm sóc khách hàng",
    branch: "New York No. 1 Lake Park",
  },
  {
    key: "8",
    name: "Jim Green",
    position: "Chăm sóc khách hàng",
    branch: "London No. 1 Lake Park",
  },
  {
    key: "9",
    name: "Joe Black",
    position: "Nhân viên kỹ thuật",
    branch: "Sidney No. 1 Lake Park",
  },

  {
    key: "10",
    name: "John Brown",
    position: "Chăm sóc khách hàng",
    branch: "New York No. 1 Lake Park",
  },
  {
    key: "11",
    name: "Jim Green",
    position: "Chăm sóc khách hàng",
    branch: "London No. 1 Lake Park",
  },
  {
    key: "12",
    name: "Joe Black",
    position: "Chăm sóc khách hàng",
    branch: "Sidney No. 1 Lake Park",
  },
  {
    key: "13",
    name: "John Brown",
    position: "Chăm sóc khách hàng",
    branch: "New York No. 1 Lake Park",
  },
  {
    key: "14",
    name: "Jim Green",
    position: "Chăm sóc khách hàng",
    branch: "London No. 1 Lake Park",
  },
  {
    key: "15",
    name: "Joe Black",
    position: "Chăm sóc khách hàng",
    branch: "Sidney No. 1 Lake Park",
  },
  {
    key: "16",
    name: "John Brown",
    position: "Chăm sóc khách hàng",
    branch: "New York No. 1 Lake Park",
  },
  {
    key: "17",
    name: "Jim Green",
    position: "Chăm sóc khách hàng",
    branch: "London No. 1 Lake Park",
  },
  {
    key: "18",
    name: "test 2",
    position: "Chăm sóc khách hàng",
    branch: "Sidney No. 1 Lake Park",
  },
];

export const NhanVien = () => {
  return (
    <>
      <div className="title-table">Danh sách lịch hẹn</div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
