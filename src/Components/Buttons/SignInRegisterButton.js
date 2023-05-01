import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignInRegisterButton = () => {
  return (
    <Link to='signin-register'>
    <Button
      variant="contained"
      size="small"
      sx={{ 
        backgroundColor: "#00FFB7", 
        color: "#666BB5", 
        fontSize: "1.4rem" 
      }}
    >
      Sign In / Register
    </Button>
    </Link>
  );
};
export default SignInRegisterButton;
