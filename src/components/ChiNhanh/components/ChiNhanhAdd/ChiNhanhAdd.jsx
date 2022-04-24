import { Button, Input, Select } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../utils/constant";
import "./ChiNhanhAdd.scss";
import { useHistory } from "react-router-dom";
const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

export const ChiNhanhAdd = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [status, setStatus] = useState();
  const [wardName, setWardName] = useState();
  const [wardNameSelected, setWardNameSelected] = useState();
  const history = useHistory();

  function save() {
    axios
      .post(
        `${ROUTE.MAIN_URL}/agency/createAgency?address=${address}&manager_id=0&name=${name}&phone=${phone}&status=${status}&updated_by=1&ward_id=${wardNameSelected}`
      )
      .then((res) => {
        console.log(res?.data?.success);
        if (res?.status === 200 && res?.data?.success === true) {
          history.push("/chi-nhanh");
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    axios
      .get(`${ROUTE.MAIN_URL}/ward/all`)
      .then((res) => {
        if (res.status === 200) {
          setWardName(res.data.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="title-table">Thêm chi nhánh</div>
      <div className="boxEdit">
        <div className="table">
          <table>
            <tbody>
              <tr>
                <td width="20%">Tên chi nhánh</td>
                <td>
                  <Input
                    onChange={(dom) => setName(dom.target.value)}
                    placeholder="Nhập tên chi nhánh"
                  />
                </td>
              </tr>

              <tr>
                <td width="20%">Địa chỉ</td>
                <td>
                  <Input
                    onChange={(dom) => setAddress(dom.target.value)}
                    placeholder="Nhập địa chỉ"
                  />
                </td>
              </tr>

              <tr>
                <td width="20%">Số điện thoại</td>
                <td>
                  <Input
                    onChange={(dom) => setPhone(dom.target.value)}
                    placeholder="Nhập số điện thoại"
                  />
                </td>
              </tr>

              <tr>
                <td width="20%">Khu vực</td>
                <td>
                  <Select
                    defaultValue="Quận 1"
                    style={{ width: 200 }}
                    onChange={(dom) => setWardNameSelected(dom)}
                  >
                    {wardName?.map((item) => (
                      <Option value={item?.id}>{item?.name}</Option>
                    ))}
                  </Select>
                </td>
              </tr>

              <tr>
                <td width="20%">Trạng thái</td>
                <td>
                  <Select
                    defaultValue="1"
                    style={{ width: 160 }}
                    onChange={(dom) => setStatus(dom)}
                  >
                    <Option value="1">Dừng hoạt động</Option>
                    <Option value="2">Hoạt động </Option>
                  </Select>
                </td>
              </tr>
            </tbody>
            <div className="btn-xacnhan">
            <Button type="danger"><Link to={`/chi-nhanh`}>
                Đóng
              </Link></Button>

              <Button type="primary" onClick={() => save()}>
                Lưu
              </Button>
            </div>
          </table>
        </div>
      </div>
    </>
  );
};
