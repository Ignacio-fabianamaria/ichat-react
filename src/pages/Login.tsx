import Button from "../components/Button"
import Cardwrapper from "../components/Cardwrapper"
import Input from "../components/Input"
import TextRedirect from "../components/TextRedirect"

function Login() {
  return (
    <>
    <div className="bg-blue h-screen flex items-center justify-center">
       <Cardwrapper title="Faça Login">
        <Input placeholder="Email"/>
        <Input placeholder="Senha"/>
        <Button/>
        <TextRedirect 
        text="Não tem conta?"
        link="/register"
        textRedirect="Cadastre-se"/>
       </Cardwrapper>
    </div>
    </>
  )
}

export default Login

