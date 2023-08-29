import { Box,CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom' 

const ChannelCard = ({video}) => {
  return (
    <Box sx ={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px'}, height: '326px', margin: 'auto'}}>
      <CardContent  sx={{display: 'flex', flexDirection: 'column', }}>
      <Link to = {`{/chanel/${video?.id.channelId ? video?.id.channelId : video?.id}}`}>

        <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt = { video?.snippet?.title}
        sx = {{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}/>
        <Typography variant = {'h6'}>
          {video?.snippet?.title}
          <CheckCircle sx = {{ fontSize: '14px', color: 'grey', ml: '5px'}}/>
        </Typography>
        {video?.statistics?.subscriberCount} && (
          <Typography sx={{fontSize: '15px', fontWeight: 500, color: 'grey'}}>
            {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')}{' '} Subscribers
          </Typography>
        )
      </Link> 

      </CardContent>
    </Box>
  )
}

export default ChannelCard