import React from "react";
import { Table, Space, Button } from "antd";

const columns = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Loại dịch vụ",
      dataIndex: "kind",
    },
    {
      title: "Ngày sửa chữa",
      dataIndex: "date",
    },
    {
      title: "Thời gian",
      dataIndex: "time",
    },
    {
      title: "Đánh giá",
      dataIndex: "rate",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      render: (text, record) => (
        <Space size="middle">
              {record.status === 0  ? <div style={{color:"#0E9713"}}>Completed </div>: <div style={{color:"#FD1515"}} >Canceled </div>} 
        </Space>
      ),
    }
    
  ];
  
  const data = [
    {
      key: "1",
      kind: "John Brown",
      date: '16/06/2000',
      time: "9:00 - 11:00",
      rate:"5",
      status: 0,
    },
    {
      key: "2",
      kind: "Jim Green",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 0,
    },
    {
      key: "3",
      kind: "Joe Black",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "4",
      kind: "John Brown",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "5",
      kind: "test1",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "6",
      kind: "Joe Black",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "7",
      kind: "John Brown",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "8",
      kind: "Jim Green",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "9",
      kind: "Joe Black",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
  
    {
      key: "10",
      kind: "John Brown",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "11",
      kind: "Jim Green",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "12",
      kind: "Joe Black",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "13",
      kind: "John Brown",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "14",
      kind: "Jim Green",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "15",
      kind: "Joe Black",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "16",
      kind: "John Brown",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "17",
      kind: "Jim Green",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
    {
      key: "18",
      kind: "test 2",
      date: '03/12/2022',
      time: "9:00 - 11:00",
      rate:"5",
      status: 1,
    },
  ];
export const LichHenLichSu = () => {
    return (
      <>
           <div className="title-table">Lịch sử lịch hẹn</div>
            <div className="table">
                <Table columns={columns} dataSource={data} />
            </div>
      </>
    );
  };

