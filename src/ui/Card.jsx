import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';




export default function RecipeReviewCard({title,date,description,img}) {
  const [like,setLike]=React.useState(false)
 const firstLetter = title.charAt(0).toUpperCase()
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {firstLetter}
          </Avatar>
        }
        
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="250"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      
      {!like?<FavoriteBorderIcon style={{alignItems:`center`}} onClick={e=>{setLike(true)}}/>: <FavoriteIcon onClick={e=>{setLike(false)}}/>}
    </Card>
  );
}
