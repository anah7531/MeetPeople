import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import "../styles.css";
import avatar from '../img/avatar.jpg'
import Header from './Header';
import { createTheme } from '@mui/material';

const AccueilMembre = () => {
  
  return (

   
    <Card className='parent-element-class' sx={{ maxWidth: 500, justifyContent: 'center' }}>
    
     <Avatar alt="Virginie LaFrance avatar" src=
               {avatar} sx={{ width: 200, height: 200 }} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Virginie LaFrance
      </Typography>
      <Typography variant="body2" color="text.secondary">
        sexe 'F'
        age '36'
      </Typography>
    </CardContent>
    <CardActions>
    <Stack direction="row" spacing={10}>
    <Button size="small" color="secondary">Prochaine</Button>
    
    </Stack>
      <Button size="large" variant="contained" color="error" onClick={()=> alert('Prochaine personne!')}>J'aime pas</Button>
      <Button size="large" variant="contained" color="success" onClick={()=> alert('Aime envoyer!')}>J'aime</Button>
    </CardActions>
  </Card>

  
  )
}

export default AccueilMembre