import React from 'react';
import Grid from '@material-ui/core/Grid';
//import akash from '../asserts/logo192.png';

export default function CenteredGrid() {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      const base = {
          color:'white',
      backgroundColor:"gray",
        padding: "30px",
        fontFamily: "Arial",
        fontSize:"30px",
        backgroundImage:'url(${"http://localhost:3000/logo192.png"})',
        height: 120,   

      };

   return (
    <div >
       
      <Grid container 
  direction="row"
  justify="center"
  alignItems="center"
style={base}>
      </Grid>
    </div>
  );
}
