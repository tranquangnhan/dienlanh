import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout } from './common/Layout/Layout';
import { LichHen,LichHenEdit,LichHenLichSu } from './components';
import { ROUTE } from './utils/constant';

function App() {
  return (
    <Layout>
         <Switch>
            <Route exact path={ROUTE.LICH_HEN} component={LichHen} />
            <Route exact path={ROUTE.LICH_HEN_LICH_SU} component={LichHenLichSu} />
            <Route exact path={ROUTE.LICH_HEN_EDIT} component={LichHenEdit} />
          </Switch>
    </Layout>
  );
}

export default App;
