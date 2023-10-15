import React from 'react'
import {BuscarInpuContainer, 
       HeaderContainer, 
       Menu, 
       MenuRight, 
       Row, 
       Input, 
       Wrapper, 
       UserPicture} from './styles'
import Button from '../Button'
import logoDio from '../../assets/logo-dio.png';
import { useNavigate } from 'react-router-dom';

export default function Header({autenticado}) {
    
    const navigate = useNavigate();
    
    const handleNavHome = () => {
        navigate('/')
        return
    }

    const handleNavLogin = () => {
        navigate('/login')
        return
    }

    const handleNavCadastro = () => {
        navigate('/cadastro')
        return
    }

  return (
   <Wrapper>
    <HeaderContainer>
    <Row>
           <img src={logoDio} onClick={handleNavHome} alt="Logo da DIO" />
           {autenticado ? (<>
                <BuscarInpuContainer>
                    <Input placeholder='Buscar ...'/>
                </BuscarInpuContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
           </>) : null}
            
        </Row>
        <Row>
            {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/58570300?v=4" />
             ) : (<> 
                <MenuRight onClick={handleNavHome}>Home</MenuRight>
                <Button title="Entrar" onClick={handleNavLogin}/>
                <Button title="Cadastrar" onClick={handleNavCadastro}/>
                </>) }
           
        </Row>
    </HeaderContainer>
   </Wrapper>
  )
}
