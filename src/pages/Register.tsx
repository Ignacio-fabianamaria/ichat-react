import { useForm } from "react-hook-form";
import Button from "../components/Button"
import Cardwrapper from "../components/Cardwrapper"
import { Input } from "../components/Input"
import TextRedirect from "../components/TextRedirect"

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterProps>();
  const submitForm = (data: IRegisterProps) => { console.log("🚀 ~ file: Login.tsx:15 ~ Login ~ data:", data) }
  return (
    <>
      <div className="bg-blue h-screen flex items-center justify-center">
        <Cardwrapper title="Faça Cadastro">
          <form onSubmit={handleSubmit(submitForm)}>
            <Input placeholder={"Name"} {...register('name')} />
            <Input placeholder={"Email"} {...register('email')} />
            <Input placeholder={"Senha"}{...register('password')} />
            {errors.email && (<span>Campo de email é obrigatório</span>)}
            {errors.password && (<span>Campo de senha é obrigatório</span>)}
            <Button />
          </form>
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

