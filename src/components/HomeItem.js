import React from "react";
import {
    Col,Card,Button
} from 'antd';
const HomeItem = ({data,deleteItem})=>(
    <Col span={8}>
        <Card
            style={{margin:5}}
            title={data.title}
            extra={
                <Button onClick={deleteItem}>Delete</Button>
            }
        >
            <p>
                {data.desc}                       
            </p>
        </Card>
    </Col>
)

export default HomeItem