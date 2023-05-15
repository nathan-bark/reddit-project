import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const PostCard = ({ title, author, content }) => {
  const maxCharTitle = 50;
  const maxCharContent = 100;
  let truncTitle = "";
  let truncContent = '';

  if (title.length > maxCharTitle) {
    truncTitle = title.substring(0, maxCharTitle) + "...";
  } else {
    truncTitle = title;
  }

  if(content.length > maxCharContent){
    truncContent = content.substring(0, maxCharContent) + '...'
  } else{
    truncContent = content
  }

  return (
    <div className="posts">
      <List
        sx={{
          width: 360,
          maxWidth: 360,
          bgcolor: "background.paper",
          borderRadius: 3,
          height:155,
          overflow:'hidden',
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography
              sx={{
                fontSize: "1.7rem", 
                fontWeight: "400",
              }}
            >
              {truncTitle}
            </Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ 
                    display: "inline",
                    fontSize: '1.2rem',
                    fontWeight: '600'
                   }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {author}
                </Typography>
                {'  -  '}
                <Typography
                sx={{
                  fontSize: "1.3rem",
                }}
              >
                {truncContent}
              </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default PostCard;
