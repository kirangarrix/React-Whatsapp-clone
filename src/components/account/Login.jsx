import React from 'react'
import { Dialog,withStyles,Box,Typography,makeStyles,List,ListItem } from '@material-ui/core'

const useStyle=makeStyles({
    component:{
       display:'flex'
    },
    leftComponent:{
        padding:'56px 0 56px 56px'
    },
    qrCode:{
        height:264,
        width:264,
        padding:'50px 0 0 50px'
    },
    title:{
        fontSize:26,
        marginBottom:25,
        color:'#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:300
    },
    list:{
        '&>*':{
            fontSize:18,
            padding:0,
            marginTop:15,
            lineHeight:'28px',
            color:'#4a4a4a'
        }
    }

})

const style={
    dialogPaper:{
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:'0',
        maxHeight:'100%',
        maxWidth:'100%' 
    }
}




const Login = ({classes}) => {
    
    const classname=useStyle();
    const qrurl='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg'
    return (
        <Dialog
        open={true}
        classes={{ paper:classes.dialogPaper }}
        BackdropProps={{ style:{backgroundColor:'unset'} }}
        >
        <Box className={classname.component}>
            <Box className={classname.leftComponent}>
            <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
            <List className={classname.list}>
                <ListItem>1. Open Whatsapp on your phone</ListItem>
                <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                <ListItem>3. Point your phone to this screen to capture the code</ListItem>
            </List>
            </Box>
            <Box>
                 <img src={qrurl} alt="qr" className={classname.qrCode} />
            </Box>
        </Box>
        </Dialog>
    )
}

export default withStyles(style)(Login);
