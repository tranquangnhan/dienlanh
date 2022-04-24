import React, { useEffect, useState } from "react";
import { Table, Space, Button, Select } from "antd";
import "./LichLamViec.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../utils/constant";
import axios from "axios";
const { Option } = Select;
const children = [];

export const LichLamViet = () => {
  const [data, setData] = useState();
  const [agency, setAgency] = useState();
  const [agencySelected, setAgencySelected] = useState();
  const [refreshKey, setRefreshKey] = useState(0);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    axios
      .get(`${ROUTE.MAIN_URL}/agency/all`)
      .then((res) => {
        if (res.status === 200) {
          setAgency(res.data.data);
        }
      })
      .catch((error) => console.log(error));
  }, [refreshKey]);

  // useEffect(() => {
  //   axios
  //     .get(`${ROUTE.MAIN_URL}/workSlot/agency?agency_id=${agencySelected}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setData(res.data.data);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, [refreshKey]);

  function isChooseAgengy(dom) {
    if (dom != null) {
     
      axios
        .get(`${ROUTE.MAIN_URL}//workSlot/agency?agency_id=${dom}`)
        .then((res) => {
          setData(res.data.data);
          setReload(1);
        })
        .catch((error) => console.log(error));
    } 
  }

  const columns = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Tên nhân viên",
      render: (text, record) => (
        <>{record?.full_name}</>
      ),
    },
    {
      title: "Thời gian bắt đầu",
      render: (text, record) => (
        <>{record?.slot_start}</>
      ),
    },
    {
      title: "Thời gian kết thúc",
      render: (text, record) => (
        <>{record?.slot_end}</>
      ),
    },
    {
      title: "Ngày đăng ký",
      render: (text, record) => (
        <>{record?.register_date.split(" ")[0]}</>
      ),
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (text, record) => {
        if (record.status === 1) {
          return (
            <Space style={{ color: "orange", margin: "0 auto" }}>
              Đang bận
            </Space>
          );
        }
        if (record.status === 2) {
          return (
            <Space style={{ color: "green", margin: "0 auto" }}>
              Có thể nhận đơn hàng
            </Space>
          );
        }
      },
    },
    
  ];

  console.log(agencySelected);

  return (
    <>
      <div className="title-table">
        Danh sách lich làm việc &nbsp; &nbsp;
        <Select
          placeholder="Chọn chi nhánh"
          value={agency?.id}
          style={{ width: 200 }}
          onChange={(dom) => isChooseAgengy(dom)}
        >
          {agency?.map((item) => (
            <Option value={item?.id}>{item?.name}</Option>
          ))}
        </Select>
      </div>

      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
