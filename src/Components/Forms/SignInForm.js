import "./SignInForm.css";
import { Button } from "@mui/material";

const SignInForm = () => {
  return (
    <div className="sign-in-form-container">
      <h1>Sign In</h1>
      <form className="sign-in-form">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <br />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="email@address.com"
        />
        <br />
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <br />
        <input className="form-input password" type="pasword" name="password" />
        <br />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00FFB7",
            color: "#666BB5",
            fontSize: "1.2rem",
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
