import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const SubRedditCard = ({display_name, description, image}) => {
  console.log(display_name);
  return (
    <Card
      sx={{
        width: '80%',
        minWidth: 150,
        boxShadow: "5px 5px 15px rgba(0,0,0,0.7)",
        margin: 'auto'
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          height="20px"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {display_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
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
