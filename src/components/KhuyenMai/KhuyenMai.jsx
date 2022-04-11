import React from "react";
import { Table, Space, Button } from "antd";
import "./KhuyenMai.scss";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Dịch vụ",
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/khuyen-mai/${record.key}`}>  {record.name} </Link>
      </Space>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/khuyen-mai/${record.key}`}>
          <Button type="primary" shape="round" size="large ">
            Chi Tiết
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
    status: "Hoạt động",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    status:  "Hoạt động",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    status:  "Hoạt động",
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "John Brown",
    status:  "Hoạt động",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "5",
    name: "test1",
    status:  "Hoạt động",
    address: "London No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Joe Black",
    status:  "Hoạt động",
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "7",
    name: "John Brown",
    status:  "Hoạt động",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "8",
    name: "Jim Green",
    status: "Hoạt động",
    address: "London No. 1 Lake Park",
  },
  {
    key: "9",
    name: "Joe Black",
    status:  "Hoạt động",
    address: "Sidney No. 1 Lake Park",
  },

  {
    key: "10",
    name: "John Brown",
    status: "Hoạt động",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "11",
    name: "Jim Green",
    status:  "Hoạt động",
    address: "London No. 1 Lake Park",
  },
  {
    key: "12",
    name: "Joe Black",
    status:  "Hoạt động",
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "13",
    name: "John Brown",
    status:  "Hoạt động",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "14",
    name: "Jim Green",
    status:  "Hoạt động",
    address: "London No. 1 Lake Park",
  },
  {
    key: "15",
    name: "Joe Black",
    status:  "Hoạt động",
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "16",
    name: "John Brown",
    status:  "Hoạt động",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "17",
    name: "Jim Green",
    status: "Hoạt động",
    address: "London No. 1 Lake Park",
  },
  {
    key: "18",
    name: "test 2",
    status:  "Hoạt động",
    address: "Sidney No. 1 Lake Park",
  },
];

export const KhuyenMai = () => {
  return (
    <>
      <div className="title-table">Danh sách khuyến mãi</div>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
