import SignInForm from "../Forms/SignInForm";
import RegisterForm from "../Forms/RegisterForm";

const FormPage = () => {
  return (
    <div className="flex justify-around items-center h-screen">
      <SignInForm />
      <div className=" border-zinc-400 border-opacity-40 rounded-md border-2 h-4/6"></div>
      <RegisterForm />
    </div>
  );
};

export default FormPage;
