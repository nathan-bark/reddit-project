import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const SubRedditCard = ({ display_name, description, image }) => {
  return (
    <Card
      sx={{
        width: '80%',
        minWidth: 150,
        height: 300,
        boxShadow: "5px 5px 15px rgba(0,0,0,0.7)",
        margin: "auto",
        borderRadius: 4
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="subreddit header image"
          sx={{
            objectFit: "contain",
            height: 100
          }}
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
