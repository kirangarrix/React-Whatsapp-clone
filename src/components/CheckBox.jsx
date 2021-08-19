

import { Dialog,withStyles,Box,makeStyles } from '@material-ui/core'

// Components
import Menu from './menu/Menu';


const useStyles=makeStyles({
    component:{
      display:'flex'
    },
    leftComponent:{
      minWidth:380
    },
    rightComponent:{
       borderLeft:'1px solid rgba(0,0,0,0.14)'
    }
})

const style = {
    dialogPaper: {
      height: "95%",
      width: "91%",
      boxShadow: "none",
      borderRadius: "0",
      maxHeight: "100%",
      maxWidth: "100%",
      overflow:'hidden'
    },
  };

const CheckBox = ({classes}) => {
       
    const classname=useStyles()

    return (
        <Dialog
        open={true}
        classes={{ paper:classes.dialogPaper }}
        BackdropProps={{ style:{backgroundColor:'unset'} }}
        >
           <Box className={classname.component}>
               <Box className={classname.leftComponent}>
                   <Menu/>
               </Box>
               <Box className={classname.rightComponent}>
                    Right
               </Box>
           </Box>
        </Dialog>
    )
}

export default withStyles(style)(CheckBox)
