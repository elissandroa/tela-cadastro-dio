import React from 'react'
import Header from '../../components/Header';
import {Container, Title, TextContent, TitleHighLight} from './styles';
import banner from '../../assets/banner.png'
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  }
  return (
    <>
    <Header />
    <Container>
      <div>
        <Title> 
            <TitleHighLight>
                Implemente
                <br/>
            </TitleHighLight>
            o seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empreas mais inovadoras do mundo e encare seu novo
          desafio profissional, evolindo em comunidade com os melhores experts.
        </TextContent>
        <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn}/>
      </div>
       <div>
        <img src={banner} alt="Imagem principal" />
       </div>
    </Container>
    </>
  )
}
