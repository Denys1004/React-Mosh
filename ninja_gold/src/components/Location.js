import React from 'react'
import styled from 'styled-components';

const Location = ({location, low, high, setGold, gold, activities, setActivities}) => {

    function getGold(){
        let temp = [];
        let rand = random_num(low, high);
        if(rand > 0){
            temp.push(`You've earned ${rand} Gold from the ${location}!`)
            temp.push("green")
        }else if(rand < 0){
            temp.push(`You've lost ${Math.abs(rand)} Gold from the ${location}!`)
            temp.push("red")
        }else{
            temp.push(`${rand} Gold from the ${location}!`)
            temp.push("black")
        }
        setActivities([...activities, temp])
        setGold(gold+rand);
    }
    function random_num(min, max) {
        let rand = min + Math.random() * (max +1 - min)
        return Math.floor(rand)
    }
    return (
        <LocationBox>
            <h1>{location}</h1>
            {location === "Casino"? <p>( earns/takes 0 - {high} golds)</p> : <p>( earns {low} - {high} golds)</p>}
            <button onClick={getGold}>Find Gold</button>
        </LocationBox>
    )
}
const LocationBox = styled.div`
    width: 220px;
    height: 220px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(230, 230, 230);
    margin: 10px;
`;

export default Location