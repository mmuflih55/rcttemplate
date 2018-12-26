import React from "react";
import logo from './../logo.svg';
import './../App.css';
import { Link } from "react-router-dom";
import {
    Layout, Menu, Icon, Input, Select, Dropdown, Avatar
} from 'antd';

const {
    Header
} = Layout;

const Option = Select.Option;
const Search = Input.Search;
const handleChange = ()=>{}
const SearchBy = ()=> (
    <Select defaultValue="by1" onChange={handleChange} style={{marginRight:5}}>
        <Option value="by1">Item 1</Option>
        <Option value="by2">Item 2</Option>
        <Option value="by3">Item 3</Option>
    </Select>
  );

const menu = (
    <Menu>
      <Menu.Item style={{textAlign:'center'}}>
          <Avatar style={{width:100,height:100}}></Avatar>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="profile">
            <Link to="/profile"><Icon type="user" /> Profile</Link>
      </Menu.Item>
      <Menu.Item key="notif">
            <Link to="/detail"><Icon type="bell" /> Notification</Link>
        </Menu.Item>
    </Menu>
  );


const HeaderComponent = ({profile}) => (
  <Header className="header" style={{ height: '55px' }}>
        <Menu 
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ height: '55px', lineHeight:'55px' }}    
        >
        <Menu.Item> 
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        </Menu.Item>
        <Menu.Item> 
            <SearchBy/>
            <Search className="Search" placeholder="Search..."/>
        </Menu.Item>
        
        <Menu.Item style={{float:'right'}} key="profile"> 
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                {profile.name} <Icon type="down" />
                </a>
            </Dropdown>
        </Menu.Item>
    </Menu>
  </Header>
)

export default HeaderComponent;