import { useForm } from "react-hook-form"
import Button from "../components/Button"
import Cardwrapper from "../components/Cardwrapper"
import { Input } from "../components/Input"
import TextRedirect from "../components/TextRedirect"

interface ILoginProps{
  email:string;
  password:string;
}
function Login() {
  const {register,handleSubmit,/*  watch, */formState: {errors}} = useForm<ILoginProps>();
  const onSubmit = (data: any) => console.log(data);
  /* console.log('normal');
  console.log(watch("email") */
  console.log("Após register")
  return (
    <>
    <div className="bg-blue h-screen flex items-center justify-center">
       <Cardwrapper title="Faça Login">
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder={"Email"} {...register('email')}/>
        <Input placeholder={"Senha"} {...register('password')}/>
        {errors.email && (<span>Campo de email é obrigatório</span>)}
        {errors.password && (<span>Campo de senha é obrigatório</span>)}
        <Button/>
        </form>
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

