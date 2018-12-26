import React from "react";
import {
    List,Avatar
} from 'antd';

const SL = ({data})=>(
    <List  style={{maxHeight:'250px',overflowY:'scroll'}}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="#">{item.title}</a>}
          description={item.desc}
        />
      </List.Item>
    )}
    />
);

export default SL;