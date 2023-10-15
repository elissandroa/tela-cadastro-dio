import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock,  MdPerson } from 'react-icons/md'
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Input } from '../../components/Input';


import { useForm } from "react-hook-form";



import { Container, Title, Column, TitleLogin, SubTitleLogin, EsqueciText, Row, Wrapper, CriarText, FooterMessage } from './styles';


const Cadastro = () => {
  
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const handleLogin = () => {
        navigate('/login')
        return
    }


    const onSubmit = (formData) => {
        const name = formData.nome.split(' ');
        alert(`Usuario: ${name[0]} cadastrado com sucesso !`)
        navigate('/login')
        return

    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Começe agora grátis</TitleLogin>
                <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />}  name='nome' control={control}/>
                    {errors.nome && <span>O nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                
                   <FooterMessage>
                        Ao cliclar em "Criar minha conta grátis",
                        declaro que aceito as Políticas de Privacidade e os termos de Uso da DIO.
                   </FooterMessage>
                <Row>
                    <EsqueciText>Já tenho conta.</EsqueciText>
                    <CriarText onClick={handleLogin}>Fazer login</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }