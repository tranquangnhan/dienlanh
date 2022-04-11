import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout } from './common/Layout/Layout';
import { LichHen,LichHenEdit,LichHenLichSu,NhanVien,NhanVienEdit,NhanVienAdd, LichLamViec, LichLamViecAdd,LichLamViecEdit,LichLamViecChiTiet,DichVu, DichVuChiTiet,DichVuAdd,  } from './components';
import { KhuyenMaiAdd } from './components/KhuyenMai/Add/KhuyenMaiAdd';
import { KhuyenMai } from './components/KhuyenMai/KhuyenMai';
import { KhuyenMaiChiTiet } from './components/KhuyenMai/KhuyenMaiChiTiet/KhuyenMaiChiTiet';
import { LoaiDichVuAdd } from './components/LoaiDichVu/components/Add/LoaiDichVuAdd';
import { LoaiDichVu } from './components/LoaiDichVu/LoaiDichVu';
import { LoaiDichVuChiTiet } from './components/LoaiDichVu/LoaiDichVuChiTiet/LoaiDichVuChiTiet';
import { ROUTE } from './utils/constant';

function App() {
  return (
    <Layout>
         <Switch>
            <Route exact path={ROUTE.LICH_HEN} component={LichHen} />
            <Route exact path={ROUTE.LICH_HEN_LICH_SU} component={LichHenLichSu} />
            <Route exact path={ROUTE.LICH_HEN_EDIT} component={LichHenEdit} />
            <Route exact path={ROUTE.NHAN_VIEN} component={NhanVien} />
            <Route exact path={ROUTE.NHAN_VIEN_ADD} component={NhanVienAdd} />
            <Route exact path={ROUTE.NHAN_VIEN_EDIT} component={NhanVienEdit} />
            <Route exact path={ROUTE.LICH_LAM_VIEC} component={LichLamViec} />
            <Route exact path={ROUTE.LICH_LAM_VIEC_ADD} component={LichLamViecAdd} />
            <Route exact path={ROUTE.LICH_LAM_VIEC_EDIT} component={LichLamViecEdit} />
            <Route exact path={ROUTE.LICH_LAM_VIEC_DETAIL} component={LichLamViecChiTiet} />
            <Route exact path={ROUTE.LOAI_DICH_VU} component={LoaiDichVu} />
            <Route exact path={ROUTE.LOAI_DICH_VU_ADD} component={LoaiDichVuAdd} />
            <Route exact path={ROUTE.LOAI_DICH_VU_DETAIL} component={LoaiDichVuChiTiet} />
            <Route exact path={ROUTE.DICH_VU} component={DichVu} />
            <Route exact path={ROUTE.DICH_VU_ADD} component={DichVuAdd} />
            <Route exact path={ROUTE.DICH_VU_DETAIL} component={DichVuChiTiet} />
            <Route exact path={ROUTE.KHUYEN_MAI} component={KhuyenMai} />
            <Route exact path={ROUTE.KHUYEN_MAI_ADD} component={KhuyenMaiAdd} />
            <Route exact path={ROUTE.KHUYEN_MAI_DETAIL} component={KhuyenMaiChiTiet} />
          </Switch>
    </Layout>
  );
}

export default App;
