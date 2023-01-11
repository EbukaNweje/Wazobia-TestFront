import React, { useState } from 'react'
import style from 'styled-components'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Login = () => {
  // const navigate = useNavigate()
    const [wrongEmail, setWrongEmail] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const [passwordShow, setPasswordShow] = useState(false)

        const showPassword = ()=>{
            setPasswordShow(!passwordShow)
        }

  return (
    <Maincontainer>
    <CardBodyWrapper>
      <CardBody>
          <Header>
            <HeaderText>Log in</HeaderText>
            <HeaderLink>If you have no account, <span> <Link to="/signup"
            style={{textDecoration: "none", color:"rgba(0, 76, 189, 1)"}}
            >Sign up</Link> </span></HeaderLink>
          </Header>
            <FromData>
                <EmailInput>
                  <Laber>Email Address</Laber>
                  <Input type="email" placeholder="Type Here" />
                  {
                    wrongEmail? <span>Wrong email format!</span> : ""
                  }
                </EmailInput>
                <PasswordInput>
                  <Laber>Password</Laber>
                  <PasswordIcon>
                  <Input2 type={passwordShow? "text" : "password"} placeholder="Type Here" />
                    <AiOutlineEye 
                    style={{fontSize:"20px", cursor:"pointer", marginLeft:"10px"}}
                    onClick={showPassword}
                    />
                  </PasswordIcon>
                  {
                    wrongPassword ? <PasswordInfo>
                        <span>Wrong password!</span>
                  </PasswordInfo> : ""
                  }
                </PasswordInput>
                <Button>Sign Up</Button>
            </FromData> 
      </CardBody>
    </CardBodyWrapper>
  </Maincontainer>
  )
}

export default Login

const Button = style.button`
  width: 102%;
  height: 40px;
  background: #B7BCC3;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: #fff;
  margin: 20px 0px;
`
const PasswordInfo = style.div`
span{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #F41E10;
  
}
`
const PasswordIcon = style.div`
  width: 100%
  height: 30px;
  border:  1px solid lightgray;
  border-radius: 5px;
  background: #fff;
  display: flex;
  align-items: center;
`
const PasswordInput = style.div`
  width: 102%;
`
const EmailInput = style.div`
    margin-top: 3%;
    width: 100%;
    margin-bottom: 3%;

  span{
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #F41E10;

  }
`
const Input2 = style.input`
  width: 90%;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 10px;
`
const Input = style.input`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border:  1px solid lightgray;
  padding-left: 10px;
  margin: 1% 0px;
`
const Laber = style.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1A1A1A;
` 
// const FirstInput = style.div`
//   margin-top: 7%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 3%;
// ` 
// const LastName = style.div`
//   width: 45%
// `
// const FristName = style.div`
//   width: 45%
// `
const FromData = style.div`
  width: 100%
`
const HeaderLink = style.div`
  ont-family: 'Montserrat';
  ont-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #777777;

  span{
    color: rgba(0, 76, 189, 1);
    cursor: pointer;
  }
`
const HeaderText = style.div`
  margin-top: 3%;
  width: 230px;
  height: 29px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  text-align: center;
`
const Header = style.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Maincontainer = style.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FAFAFA;
`

const CardBodyWrapper = style.div`
  width: 50%;
  height: max-content;
  background: #fff;
  box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
-webkit-box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
-moz-box-shadow: 2px 2px 5px -6px rgba(0,0,0,0.69);
display: flex;
justify-content: center;
`

const CardBody = style.div`
  width: 80%;
  height: 90%;
`