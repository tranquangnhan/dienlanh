import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout } from './common/Layout/Layout';
import { LichHen,LichHenEdit,LichHenLichSu,NhanVien,NhanVienEdit,NhanVienAdd, LichLamViec, LichLamViecAdd,LichLamViecEdit,LichLamViecChiTiet } from './components';
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
          </Switch>
    </Layout>
  );
}

export default App;
