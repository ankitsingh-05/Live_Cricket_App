import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { getMatch } from '../api/Api';

export default function BasicCard() {
  const [matches, setMatches] = React.useState([])
  
  useEffect(() => {
    getMatches()
  }, [])


  function getMatches(){
    axios
    .get("https://api.cricapi.com/v1/matches?apikey=67a93570-9d2c-4417-8f28-852c07ff767f&offset=0")
    .then((res) =>{
        setMatches(res.data.data)
        console.log("Data: ", res.data.data)
    })
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <Typography variant='h4' style={{marginTop:20}}>Check Live Cricket Scores</Typography>
          {
            matches.map((a) => {
              return(
                <>
                  <Grid container>
                    <Grid sm="2"></Grid>
                    <Grid sm="8">
                      <Card style={{marginTop:20}} key={a.id}>
                        <CardContent>
                          <Grid container justifyContent="center" alignItems="center" spacing={3}>
                            <Grid item><Typography><h2>{a.teams[0]}</h2></Typography></Grid>
                            <Grid item><Typography><img src={require("../images/vs.jpg")} alt='' style={{width:85}}></img></Typography></Grid>
                            <Grid item><h2>{a.teams[1]}</h2></Grid>
                          </Grid>
                        </CardContent>
                        <Grid container justifyContent="center" alignItems="center" style={{marginLeft:40}}>
                          <Grid item>
                            <CardActions>
                              <Button variant='contained'>More Details</Button>
                              <Button variant='contained'>Starting Time: {new Date(a.dateTimeGMT).toLocaleString()}</Button>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}