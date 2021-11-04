import './App.css';
import {Grid,Button,Paper, ButtonGroup, IconButton} from '@mui/material';
import {ArrowForward,ArrowBack} from '@mui/icons-material';
import React, {useState} from 'react';
function E1_2() {
  const [leftList, setLeftList] = useState(["Left1","Left2","Left3","Left4","Left5","Left6"]);
  const [rightList, setRightList] = useState(["Right1","Right2","Right3","Right4"]);
  const [selectedFromLeft, setSelectedFromLeft] = useState(-1)
  const [selectedFromRight, setSelectedFromRight] = useState(-1);
  
  const selectLeft = (i) => {
    setSelectedFromLeft(i);
  }

  const selectRight = (i) => {
    setSelectedFromRight(i);
  }

  const moveToRight = () => {
    if(selectedFromLeft>=0){
      var leftElement = leftList[selectedFromLeft];
      var newRightList = [].concat(rightList);
      newRightList.push(leftElement);
      setRightList(newRightList);
      leftList.splice(selectedFromLeft,1);
      setLeftList([].concat(leftList));
      setSelectedFromLeft(-1);
      setSelectedFromRight(-1);
    }
  }

  const moveToLeft = () => {
    if(selectedFromRight>=0){
      var rightElement = rightList[selectedFromRight];
      var newLeftList = [].concat(leftList);
      newLeftList.push(rightElement);
      setLeftList(newLeftList);
      rightList.splice(selectedFromRight,1);
      setRightList([].concat(rightList));
      setSelectedFromLeft(-1);
      setSelectedFromRight(-1);
    }
  }

  const sortLists = () => {
      var rl = rightList.concat([]);
      var ll = leftList.concat([]);
      setRightList(rl.sort());
      setLeftList(ll.sort());
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Paper>
            <ButtonGroup fullWidth={true} orientation="vertical">
              {leftList.map((x,i)=> <Button fullWidth={true} onClick={()=>selectLeft(i)}>{x}</Button>)}
            </ButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={4} align="center">
          <ButtonGroup variant="contained" orientation="vertical">
            <IconButton onClick={()=>moveToRight()}><ArrowForward></ArrowForward></IconButton>
            <IconButton onClick={()=>moveToLeft()}><ArrowBack></ArrowBack></IconButton>
            <Button fullWidth={true} onClick={()=>sortLists()}>Sort Lists</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={12}>
            <ButtonGroup fullWidth={true} orientation="vertical">
              {rightList.map((x,i)=> <Button fullWidth={true} onClick={()=>selectRight(i)}>{x}</Button>)}
            </ButtonGroup>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default E1_2;
