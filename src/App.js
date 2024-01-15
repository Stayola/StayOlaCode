import logo from './logo.svg';
import './App.css';
import { Container, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Welcome from './components/welcome.js';
import Rule from './components/Rule.js';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Fragment, useState } from "react";
import Rulebody from './components/RuleBody.js';


const category = [
  <ToggleButton value="jacuzzi" LinkComponent={Link} to="Jaccuzi" replace><h3>자쿠지</h3></ToggleButton>,
  <ToggleButton value="bbq" LinkComponent={Link} to="BBQ" replace><h3>BBQ 바베큐</h3></ToggleButton>,
  <ToggleButton value="standbyme" LinkComponent={Link} to="StandByMe" replace><h3>스탠바이미(TV)</h3></ToggleButton>
]

function App() {
  const [alignment, setAlignment] = useState('');
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }
  return (
    <Container fixed maxWidth="lg" textAlign={'center'} >
      <Container fixed maxWidth="md">
        <Welcome></Welcome>
      </Container>
      <hr />
      <Grid container spacing={0} justifyContent="flex-start" alignItems="flex-start" direction="row">
        <Grid item xs={2}>
          <ToggleButtonGroup orientation="vertical" size="small" exclusive color="primary" value={alignment} onChange={handleChange} aria-label="Medium sizes">
            {category}
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={10}>
          <Rule></Rule>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
