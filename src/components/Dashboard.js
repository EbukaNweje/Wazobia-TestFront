import React, { useState } from 'react'
import styled from 'styled-components'
import {AiFillCaretDown} from 'react-icons/ai'
import {MdAdd} from 'react-icons/md'

const Dashboard = () => {
    const [toggle, setToggle]= useState(false)
    const [addtoggle, setAddToggle]= useState(false)

    const showlogout = () => {
        setToggle(!toggle)
    }

    const showAddBox = () => {
        setAddToggle(!addtoggle)
    }

  return (
    <MainContainer>
        <Verify><span>You have not verified your email address. <LinkMe>Click here</LinkMe> to resend verification link.</span></Verify>
        <Header>
            <DashboardText>Dashboard</DashboardText>
            <DashNameLog>
                <span>Ebuka Nweje</span>
                <AiFillCaretDown style={{cursor:"pointer"}} onClick={()=>showlogout()}/>
            </DashNameLog>
            {
                toggle ? <LogoOut>Log out</LogoOut> : ""
            }
        </Header>

        <MainBody>
            <CardBodyMain>
                <Card>
                    <NamePart>
                        <Title>Name</Title>
                        <span>Web Class</span>
                    </NamePart>

                    <DicPart>
                        <Title>Description</Title>
                            <Dis>
                                <span>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. VelitAmet 
                                </span>                          
                            </Dis>
                    </DicPart>

                <ButtonDiv>
                    <Button>Edit</Button>
                    <Button bg>Delete</Button>
                </ButtonDiv>
                </Card>
            </CardBodyMain>    
        </MainBody>

        <AddDiv onClick={()=>showAddBox()}><MdAdd style={{color:"white", fontSize: "20px"}} onClick={()=>showAddBox()}/></AddDiv>
       {
        addtoggle ? 
        <AddBox>
        <Card width height>
            <TopHeader>Create Item</TopHeader>

            <FromData>
                <FromDataInput>
                <Laber>Name</Laber>
                    <Input type="text" placeholder="Input item name here" />
                </FromDataInput>
                <FromDataInput>
                <Laber>Add Note</Laber>
                    <Textarea type="text" placeholder="Type Here" />
                </FromDataInput>
            </FromData>
            <ButtonDiv2>
                <Button2 onClick={()=>showAddBox()}>Cancel</Button2>
                <Button2 bg>Create Event</Button2>
            </ButtonDiv2>
        </Card>
    </AddBox> : ""
       }
    </MainContainer>
  )
}

export default Dashboard
const Textarea = styled.textarea`
  width: 95%;
  height: 150px;
  border-radius: 4px;
  outline: none;
  border:  1px solid lightgray;
  padding-left: 10px;
  margin: 1% 0px;
`
const Input = styled.input`
  width: 95%;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border:  1px solid lightgray;
  padding-left: 10px;
  margin: 1% 0px;
`
const Laber = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1A1A1A;
` 
const FromDataInput = styled.div`
  width: 100%;
  margin-bottom: 10px;
`
const FromData = styled.form`
    width: 100%;
    height: 75%;
`
const TopHeader = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid lightgray;
    display:flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
`
const AddBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.651);
    z-index: 100;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AddDiv = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: blue;
    position: absolute;
    bottom: 20px;
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Button2 = styled.button`
    width: 100px;
    padding: 3px;
    height: 35px;
    margin: 0px 5px;
    cursor: pointer;
    background: ${({bg})=> bg ? "#999A9B": "#EFEFF0"};
    color: ${({bg})=> bg ? "white": "black"};
    border: ${({bg})=> bg ? "none": "1px solid gray"};
    border-radius: 4px;
`
const ButtonDiv2 = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end
`
const Button = styled.button`
    width: 100px;
    padding: 3px;
    height: 35px;
    margin: 0px 5px;
    cursor: pointer;
    background: ${({bg})=> bg ? "Black": "white"};
    color: ${({bg})=> bg ? "white": "black"};
    border: ${({bg})=> bg ? "none": "1px solid gray"};
    border-radius: 4px;
`
const ButtonDiv = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end
`
const Dis = styled.div`
    width: 350px;
    height: 80%;
    overflow-y: scroll;
`
const DicPart = styled.div`
      width: 100%;
      height: 60%;
`
const Title = styled.div`
    font-size: 15px;
    color: gray;
    margin-bottom: 5px;
`
const NamePart = styled.div`
  width: 100%;
  height: 50px;

  span {
    font-weight: 500px;
    font-family: sans-serif;
    margin-top: 5px;
  }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 10px;
    min-width: ${({width})=> width ? "500px": "350px"};
    height: ${({height})=> height ? "350px": "242px"};
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 8px;
    margin: 3% 0.5%;
`
const CardBodyMain = styled.div`
    width: 90%;
    height: max-content;
    display: flex;
    flex-wrap: wrap
`
const MainBody = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
`
const LogoOut = styled.div`
    width: 100px;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #FEFEFE;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.18);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #F41E10;
    position: absolute;
    right: 85px;
    top: 50px
`
const DashNameLog = styled.div`
    width: 200px;
    display: flex;
    align-items: center;

    span {
        margin-right: 5%;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }
`
const DashboardText = styled.div`
    margin-left: 5%;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
`
const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
const LinkMe = styled.span`
    color: rgba(0, 76, 189, 1);
    cursor: pointer;    
`
const Verify = styled.div`
    width: 100%;
    height: 40px;
    background-color: #FFF0CB;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(250, 250, 250, 1);
    position: relative;
`