import Button from "@mui/material/Button";

const SignInRegisterButton = () => {
  return (
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
  );
};
export default SignInRegisterButton;
