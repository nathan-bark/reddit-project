import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const SubRedditCard = () => {
  return (
    <Card sx={{ 
        maxWidth: 345,
        boxShadow: '5px 5px 15px rgba(0,0,0,0.7)',
        width: '22%',
        marginRight: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.mos.cms.futurecdn.net/6AxBGxrtbSAkmhLmtdvGLX.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            r/Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          See Posts
        </Button>
      </CardActions>
    </Card>
  );
};

export default SubRedditCard;
