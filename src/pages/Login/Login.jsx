import CreateRegister from "./CreateRegister"
import LoginForm from "./LoginForm"

const Login = () => {
  
  return (
   <div className="Container flex flex-col md:flex-row items-center justify-between mt-20 gap-10">
    <LoginForm />
    <CreateRegister />
   </div>
  )
}

export default Login