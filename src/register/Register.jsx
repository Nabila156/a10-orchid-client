import { HiArrowNarrowLeft } from "react-icons/hi";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="mx-[10%] my-8">
            <div className="text-2xl font-bold flex items-center gap-2">
                <Link to={'/'}><HiArrowNarrowLeft /></Link>
                <p>Back to home</p>
            </div>
            <div className="mt-10 text-center">
               <RegisterForm></RegisterForm>
            </div>
        </div>
    );
};

export default Register;