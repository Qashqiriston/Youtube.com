import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}>
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "360px", md: "320px" },
            height: "180px",
          }}
        />
      </Link>

      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          positions: "relative",
        }}>
        <>
          <Link to={`/video/${video.id.videoId}`}>
            <Typography my={"5px"} sx={{ opacity: ".4" }}>
              {moment(video?.snippet?.publishAt).fromNow()}
            </Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              {video?.snippet?.title.slice(0, 45)}
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
              {video?.snippet?.description.slice(0, 70)}
            </Typography>
          </Link>
        </>

        <Link to = {`/chanel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}>

            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={"grey"}>
              {video.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>

      </CardContent>
    </Card>
  );
};

export default VideoCard;
