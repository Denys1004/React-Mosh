import React from 'react'
import styled from 'styled-components';
import Location from './Location';
import { useState } from 'react';

const Page = () => {
    const [gold, setGold] = useState(0);
    const [activities, setActivities] = useState([]);
    return (
        <div>
            <PageHeader2><label >Your Gold</label><Output>{gold}</Output></PageHeader2>
            
            <PageHeader>
                <Location location="Farm" low={10} high={20} setGold={setGold} gold={gold} activities={activities}  setActivities={setActivities}/>
                <Location location="Cave" low={5} high={10} setGold={setGold} gold={gold} activities={activities}  setActivities={setActivities}/>
                <Location location="House" low={2} high={5} setGold={setGold} gold={gold} activities={activities}  setActivities={setActivities}/>
                <Location location="Casino" low={-50} high={50} setGold={setGold} gold={gold} activities={activities}  setActivities={setActivities}/>
            </PageHeader>
            <ActivitiesBox>
            {activities.map((item, i) => (
                <p className={item[1]} key={i}>{item[0]}</p>
            ))}




            </ActivitiesBox>
        </div>

    )
}
const PageHeader = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 50px auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const PageHeader2 = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 50px auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;
const ActivitiesBox = styled.div`
    width: 100%;
    max-width: 960px;
    margin: 20px auto;
    padding: 0 20px;
    height: 200px;
    overflow-y: scroll;
    border: 1px solid black;
    .green{
        color: green;
    }
    .red{
        color: red;
    }
    .black{
        color: black;
    }
`;
const Output = styled.div`
    margin-left:10px;
    width: 220px;
    height: 40px;
    border: 1px solid black;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`;
export default Page
