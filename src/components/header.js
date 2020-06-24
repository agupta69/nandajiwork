import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import Login from'./login';
import Tabs from './tabs';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import CardMedia from '@material-ui/core/CardMedia';
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50; //+ rand();
  const left = 50;// + rand();
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

//import akash from 'asserts/logo192.png';
const useStyles = makeStyles(theme => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
}));
export default function CenteredGrid() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};
       const base = {
           backgroundColor:'black',
       // backgroundImage:"url('http://localhost:3000/images2.jpg')",
        backgroundSize:'auto',
        width: '100%',
        height: '140px',
        position: 'fixed',
      };
      const gridCss={
        color:'white',
        textAlign: "center",
        fontFamily: "Arial",
        fontSize:"20px",
        padding:'35px'
       }
  
   return (
    <div style={base}>
       
      <Grid style={gridCss} container>
       <Grid item xs={3}>
       <div style={{marginLeft:'30px'}}>
      <Box width={200} height={40}>
       <Image imageStyle={{height:'50%',width:'100%'}}  src="http://localhost:3000/logo.jpg"
      />
       </Box>
     
    </div>
        </Grid>
        <Grid item  xs={6}>         
        </Grid>
        <Grid item xs={3}>
        <button size="large" style={{backgroundColor:'black',padding:'10px',border:'0px'}} onClick={handleOpen}>
            <div style={{color:'white'}}><AccountCircleIcon/></div>
            <div> <Link style={{color:'white'}} >Login/Sign In </Link> </div>
        </button>
        
        </Grid>                
          
      </Grid>
      <Tabs/>

      <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <Login/>
                </div>
            </Modal>
    </div>
  );
}
