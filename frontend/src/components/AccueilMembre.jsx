import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import avatar from '../img/avatar.jpg'

const AccueilMembre = () => {
  return (
    <Card sx={{ maxWidth: 500 }}>
    
     <Avatar alt="Remy Sharp" src=
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
      <Button size="small" onClick={()=> alert('Prochaine personne!')}>J'aime pas</Button>
      <Button size="small" onClick={()=> alert('Aime envoyer!')}>J'aime</Button>
    </CardActions>
  </Card>
  )
}

export default AccueilMembre