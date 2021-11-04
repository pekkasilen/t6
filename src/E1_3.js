import './App.css';
import {TextField, Grid,Button,Paper, ButtonGroup, IconButton, Typography} from '@mui/material';
import {ArrowForward,ArrowBack} from '@mui/icons-material';
import React, {useState} from 'react';

function E1_3() {
  const [itemList, setItemList] = useState(["Aarnio", "Aapeli","Bertta",
                                            "Aapo","Bergamo","Cecilia",
                                            "Celsius","Faarao", "Fagotti"]);
  const [filterPhrase, setfilterPhrase] = useState("");

  const changeFilter = (e) => {
    setfilterPhrase(e.target.value);
  }


  return (
    <div>
        <TextField onChange={(e)=> {changeFilter(e)}}></TextField>
        <Grid container>
            <Grid item xs={4}>
                {itemList.filter((x)=>x.startsWith(filterPhrase))
                         .map((y)=> <Typography variant="h6"> {y} </Typography>)}
            </Grid>  
        </Grid>
    </div>
  );
}

export default E1_3;