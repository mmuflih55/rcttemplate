import React, { useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './../components/Header';
import './../App.css';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.min.js';
import { MyContext } from "../Context";
import {
  Layout
} from 'antd';
const {
  Content,Footer
} = Layout;

const Home = React.lazy(() => import('./Home'));
const Profile = React.lazy(() => import('./Profile'));

const Root = () => {
  const context = useContext(MyContext);
  return (
      <Router>
        <Layout>
          <Header profile={context.state.profile}/>
            <Content style={{ padding: '25px' }}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/" exact component={()=><Home/>} />
                  <Route path="/profile" component={()=><Profile/>} />
                </Switch>
            </Suspense>
          </Content>
          <Footer >
            Copyright ©2018 
          </Footer>
        </Layout>
      </Router>
  );
}

export default Root;