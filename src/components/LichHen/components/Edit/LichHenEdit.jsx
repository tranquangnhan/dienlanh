import React, { useState } from "react";
import "./LichHenEdit.scss";
import { LichHenItem } from "./LichHenItem/LichHenItem";
import { Modal, Button } from 'antd';
import { Select, Radio } from 'antd';
const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const LichHenEdit = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };


    const [size, setSize] = React.useState('default');

    const handleSizeChange = e => {
        setSize(e.target.value);
    };

    return (
      <>
        <div className="title-table">Sửa Lịch Hẹn Khách Hàng</div>
        <div className="table">
           <table>
                <tbody>
                    <LichHenItem name="Tên khách hàng" value="Nguyễn Minh Ngọc"/>
                    <LichHenItem name="Điện thoại" value="0123456789"/>
                    <LichHenItem name="Địa chỉ" value="Số 123 đường abc, phường 11, Quận 12, TP. Hồ Chí Minh"/>
                    <LichHenItem name="Ngày dự kiến" value="25/02/2022"/>
                    <LichHenItem name="Mô tả" value="Máy bị rò rỉ nước"/>
                    <LichHenItem name="Số lượng (máy)" value="2"/>
                    <tr>
                        <td width="100%" colSpan={2}> <hr /></td>
                    </tr>
                    <LichHenItem name="Nội dung" value="Nhân viên"/>
                    <LichHenItem name="Kiểm tra máy" value="Empty"/>
               </tbody>
           </table>
            <div className="btn-addtho">
                <Button type="primary" onClick={showModal}>
                    Thêm Thợ Máy
                </Button>
            </div>

            <div className="btn-xacnhan">
                <Button type="primary">
                   Chấp Nhận
                </Button>
                <Button type="primary">
                  Đóng
                </Button>
            </div>
         
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Select
                mode="multiple"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {children}
            </Select>
        </Modal>
      </>
    );
  };
  