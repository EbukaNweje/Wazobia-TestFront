import React from 'react'
import styled from 'styled-components'
import {GrStatusGood} from 'react-icons/gr'
import {BiRightArrow} from 'react-icons/bi'

const Verify = () => {
  return (
   <Maincontainer>
        <Card>
            <GrStatusGood style={{color: "green", fontSize: "30px"}}/>
            <Text>Your email address has been verified.</Text>
            <Back>Go to Dashboard <BiRightArrow/></Back>
        </Card>
   </Maincontainer>
  )
}

export default Verify
const Text = styled.div``
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 10px;
    min-width: 350px;
    height: 242px;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 8px;
    margin: 3% 0.5%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Maincontainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FAFAFA;
`