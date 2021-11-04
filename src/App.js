
import './App.css';
import {AppBar, Grid,Button,Paper, ButtonGroup, IconButton, Toolbar} from '@mui/material';
import {ArrowForward,ArrowBack} from '@mui/icons-material';
import React, {useState} from 'react';
import E1_1 from './E1_1';
import E1_2 from './E1_2';
import E1_3 from './E1_3';
import E1_4 from './E1_4';

function App() {
  const [tehtava, setTehtava] = useState(1);
  const nrs = [1,2,3,4,5,6,7]
  return(
    <div>
      <AppBar sx={{orientation:"horizontal"}}position="static" color="secondary" orientation="horizontal">
        <Toolbar>
          {nrs.map((x)=> <Button variant="contained" onClick={()=> setTehtava(x)}>{x}</Button>)}
        </Toolbar>
      </AppBar>
      <div>
        {tehtava===1 && <E1_1/>}
        {tehtava===2 && <E1_2/>}
        {tehtava===3 && <E1_3/>}
        {tehtava===4 && <E1_4/>}
      </div>
      
    </div>
  )
}

export default App;


//