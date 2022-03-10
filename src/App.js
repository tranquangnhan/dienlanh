import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout } from './common/Layout/Layout';
import { Home } from './components';
import { ROUTE } from './utils/constant';

function App() {
  return (
    <Layout>
         <Switch>
            <Route exact path={ROUTE.HOME} component={Home} />
            {/* <Route exact path={ROUTE.LICH_HEN} component={LichHen} /> */}
            
          </Switch>
    </Layout>
  );
}

export default App;
