import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'



function ParentComponent() {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()*2));

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    },[age])
    
    const incrementSalary = useCallback(() => {
        setSalary(salary+1000);
    },[salary])

    const newRandomNumber = useCallback(() => {
        setRandomNumber(Math.floor(Math.random()*2));
    },[])
    

    return (
        <>
            <Title></Title>
            <Count text='Age' count={age}></Count>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary}></Count>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
            <Count text='Random Number' count={randomNumber}></Count>
            <Button handleClick={newRandomNumber}>Random Number</Button>            
        </>
    )
}

export default ParentComponent