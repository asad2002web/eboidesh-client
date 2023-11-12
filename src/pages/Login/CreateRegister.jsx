import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../components/Shared/ButtonPrimary"

const CreateRegister = () => {

  const navigate= useNavigate();

  return (
    <div className="border-2 border-slate-200 p-10 w-full md:w-1/2 md:h-[430px]">
        <h2 className="text-2xl font-semibold px-0 py-2.5">New Customer</h2>
        <p>Create a account to get started</p>
        <p className="py-4">Sign Up For A Free Account At Our Store. Registration Is Quick And Easy. It Allows You To Be Able To Order From Our Shop. To Start Shopping Click Register.</p>
        <ButtonPrimary handler={() => navigate("/register")}>
           Register
        </ButtonPrimary>
    </div>
  )
}

export default CreateRegister