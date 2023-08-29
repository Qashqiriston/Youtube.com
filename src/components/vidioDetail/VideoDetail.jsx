import { Box,  /*Chip*/ } from "@mui/material"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {ApiService} from '../../service/apiService'
import ReactPlayer from 'react-player'
import { Videos } from ".."
// import { Tag } from "@mui/icons-material"

const VideoDetail = () => {
  const {id} = useParams()
  const [relateVideo, setRelateVideo] = useState([])

  const [videoDetails, setVideoDetails] = useState(null)

  useEffect(() =>{
    const getData = async () => {
     try{
        const data = await ApiService.fetching(`videos?.part=snippet,statistics&id=${id}`)
        setVideoDetails(data.item[0])
        const relatedData = await ApiService.fetching(`search?.part=snippet&relatedToVideoId=${id}&type=video`)
        console.log(relatedData);
        setRelateVideo(relatedData.items)
      }catch(error){
        console.log(error);
      }
    }
    getData()
  }, [id])
  
  // const {
  //   snippet: {title, channelTitle,channelId, description, tags, thumbnails},
  //   statistics: {viewCount, likeCount, commentCount}
  // } = videoDetails
  return (
    <Box minHeight={'90vh'} mb = {10}>
      <Box display={"flex"} >
        <Box width={'75%'}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className = 'react-player' controls/>
          {/* {VideoDetail.snippet.tags.map((item, ind) => (
            <Chip label = {item} key = {ind} sx = {{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
            deleteIcon= {<Tag/>} onDelete={() => {}} variant = {'outlined'}/> 
          ))} */}
        </Box>
        <Box width={{xs: '100%',md:'25%'}}> {<Videos video={relateVideo && relateVideo} />} </Box>
      </Box>
    </Box>
  )
  

}

export default VideoDetail