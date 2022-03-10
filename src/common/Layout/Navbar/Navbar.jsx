
import React from 'react';
import { Logo } from '../../Logo/Logo';
import { Menu } from 'antd';
import { HomeOutlined, MailOutlined, UserOutlined, HistoryOutlined, UsergroupAddOutlined,
    InsertRowAboveOutlined,DollarCircleOutlined,PercentageOutlined

} from '@ant-design/icons';

const { SubMenu } = Menu;

export const Navbar = ({})=> {

    const handleClick = e => {
        console.log('click ', e);
    };

    return (<>
        <div>
            <Logo/>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                 <Menu.Item key="1" icon={<HomeOutlined />}>
                   Trang Chủ
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                   Khách Hàng
                </Menu.Item>
                <SubMenu key="sub1" icon={<HistoryOutlined />} title="Lịch Hẹn">
                    <Menu.Item key="3">Danh sách lịch hẹn</Menu.Item>
                    <Menu.Item key="4">Lịch sử</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UsergroupAddOutlined />} title="Nhân Viên">
                    <Menu.Item key="5">Danh sách nhân viên</Menu.Item>
                    <Menu.Item key="6">Thêm nhân viên</Menu.Item>
                    <Menu.Item key="7">Lịch làm việc</Menu.Item>
                    <Menu.Item key="8">Danh sách lịch làm việc</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<InsertRowAboveOutlined />} title="Chi Nhánh">
                    <Menu.Item key="9">Danh sách chi nhánh</Menu.Item>
                    <Menu.Item key="10">Thêm chi nhánh</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<DollarCircleOutlined />} title="Dịch Vụ">
                    <Menu.Item key="11">Danh sách loại dịch vụ</Menu.Item>
                    <Menu.Item key="12">Thêm loại dịch vụ</Menu.Item>
                    <Menu.Item key="13">Danh sách dịch vụ</Menu.Item>
                    <Menu.Item key="14">Thêm dịch vụ</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<PercentageOutlined />} title="Khuyến mãi">
                    <Menu.Item key="15">Danh sách khuyến mãi</Menu.Item>
                    <Menu.Item key="16">Thêm khuyến mãi</Menu.Item>
                </SubMenu>
            </Menu>


            <ul>
                {/* <li><a href="">cc</a></li>
                <li><a href="">ccc</a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li> */}
            </ul>
        </div>
    </>)
};

