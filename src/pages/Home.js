import React,{useState} from "react";
import {
    Card,Row,Col,Carousel, Button
} from 'antd';
import SL from './../components/SideList';
import HI from './../components/HomeItem'
const data1 = [
    {
        title:"Item 1",
        desc:"Deskripsi Item 1"
    },
    {
        title:"Item 2",
        desc:"Deskripsi Item 2"
    },
    {
        title:"Item 3",
        desc:"Deskripsi Item 3"
    }
];
const data2 = [
    {
      title: 'Lets n Go',
      desc: 'Ayo maju mobilku melaju cepat'
    },
    {
      title: 'Digimon',
      desc: 'Dimulai cerita yang berputar dengan cepatnya'
    },
    {
      title: 'Apa yang?',
      desc: 'WO WO WOWOWO~~~'
    },
    {
      title: 'Telolat',
      desc: 'Om Telolet om'
    },
    {
      title: 'Hey?',
      desc: 'Hey tayo~ Hey tayo~'
    }
  ];

const NovelItem = {
    width:'30.33%',
    marginRight:5,
    display:'inline-block'
}

const Home = () => {
    const [state,setState] = useState({data1,data2});
    const deleteItem = (index) =>{
        let newState = state;
        newState.data1.splice(index,1);
        setState({...newState})
    }
    return(
        <Row>
            <Col span={24} autoPlay style={{paddingLeft:'5%', paddingRight:'5%',marginBottom:'15px'}}>
                <Carousel>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </Col>
            <Col span={16}>
                <Card style={{margin:'5px'}}
                    title="List Item"
                >
                {
                    state.data1.map((i,index)=>(
                        <HI key={index} data={i} deleteItem={()=>{deleteItem(index)}}/>
                    ))
                }   
                </Card>
            </Col>
            <Col span={8}>
                <Col span={24}>
                    <Card style={{margin:'5px'}}>
                        <label>SideBar</label>
                        <SL data={state.data2}/>
                    </Card>
                </Col>
            </Col>
        </Row>
    )
}
export default Home;