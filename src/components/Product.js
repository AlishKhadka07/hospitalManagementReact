import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ProductItem(props) {
  return (

    <Card sx={{ minWidth: 200 ,pb:1,mb:3}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
 
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bandage
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veniam.
      
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" sx={{width:'100%'}}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}