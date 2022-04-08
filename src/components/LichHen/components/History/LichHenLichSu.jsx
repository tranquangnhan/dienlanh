import { Table, Space, Button } from "antd";
import React, { useEffect,useState } from "react";
import axios from 'axios';

const columns = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Loại dịch vụ",
      dataIndex: "description",
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
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      render: (text, record) => (
        <Space size="middle">
              {record.status === 1  ? <div style={{color:"#0E9713"}}>Cancel </div>: <div style={{color:"#FD1515"}} >Completed </div>} 
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
  const [data,setData] = useState();

  useEffect(()=>{

    axios.get(`https://acsproject.azurewebsites.net/appointment/all`)
      .then(res => {
        if(res.status === 200){
          const item = res.data.data.filter(item=>item.status === 1 || item.status === 4)
          setData(item)
        }
      })
      .catch(error => console.log(error));

  },[]);
    return (
      <>
           <div className="title-table">Lịch sử lịch hẹn</div>
            <div className="table">
                <Table columns={columns} dataSource={data} />
            </div>
      </>
    );
  };

