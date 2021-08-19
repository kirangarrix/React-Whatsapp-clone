import React from 'react'
import { AppBar,Toolbar,makeStyles,Box } from '@material-ui/core';
// Components
import Login from './account/Login';


const useStyle=makeStyles({
    component:{
         background:'#DCDCDC',
         height:'100vh'
    },
      loginHeader:{
         height:200,
         background:'#00bfa5',
         boxShadow:'none'
      }
})


const Messanger = () => {
    const classes=useStyle();
    return (
        <Box className={classes.component}>
        <AppBar className={classes.loginHeader}>
          <Toolbar></Toolbar>
        </AppBar>
        <Login />
        </Box>
    )
}

export const WhatsappMessanger = () => {
    return (
        <div>
            Hello from Whatsapp
        </div>
    )
}

export default Messanger
