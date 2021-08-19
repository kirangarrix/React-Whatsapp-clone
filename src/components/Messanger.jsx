import { useContext } from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import { AccountContext } from "../context/AccountProvider";

// Components
import Login from "./account/Login";
import CheckBox from "./CheckBox";

const useStyle = makeStyles({
  component: {
    background: "#DCDCDC",
    height: "100vh",
  },
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
  header: {
    height: 115,
    background: "#00bfa5",
    boxShadow: "none",
  }

});

const Messanger = () => {
  const classes = useStyle();
  const { account } = useContext(AccountContext);

  return (
    <Box className={classes.component}>
      <AppBar className={account ? classes.header: classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <CheckBox /> : <Login />}
    </Box>
  );
};

export default Messanger;
