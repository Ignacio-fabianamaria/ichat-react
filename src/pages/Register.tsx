import Button from "../components/Button"
import Cardwrapper from "../components/Cardwrapper"
import Input from "../components/Input"
import TextRedirect from "../components/TextRedirect"

function Register() {
  return (
    <>
      <div className="bg-blue h-screen flex items-center justify-center">
        <Cardwrapper title="Faça Cadastro">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button />
          <TextRedirect
            text="Já tem conta?"
            link="/"
            textRedirect="Login" />
        </Cardwrapper>
      </div>
    </>
  )
}

export default Register

