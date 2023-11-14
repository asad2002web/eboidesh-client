import ButtonPrimary from "../../components/Shared/ButtonPrimary"
const LoginForm = () => {
  return (
    <div className="border-2 border-slate-200 p-10 w-full md:h-[430px] md:w-1/2">
        <h2 className="text-2xl font-semibold px-0 py-2.5">Login</h2>
        <form>
            <label className="login-label">Email</label>
            <input className="login-form" type="email" placeholder="Enter Your Email"/>
            <label className="login-label">Password</label>
            <input className="login-form" type="password" placeholder="Enter Your Password"/>
            <ButtonPrimary >
              Login
            </ButtonPrimary>
            <p>
              <a className="text-red-600 text-lg md:text-xl my-2 block" href="forget">Forget a password ?</a>
            </p>
        </form>
    </div>
  )
}

export default LoginForm