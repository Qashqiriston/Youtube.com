import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {ApiService} from "../../service/apiService"
import {ChannelCard} from '../'

const Chanel = () => {
  const {id} = useParams()
  const [channelDetail, setchannelDetail] = useState()
  const [videos, setVideos] = useState([])

  useEffect(() =>{
    const getData=  async () => {
      try{
        const dataChanelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setchannelDetail(dataChanelDetail.item[0])
        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet`)
        setVideos(dataVideo)
      }catch(error){
        console.log(error);
      }
    }
    getData()
  }, [id])

  return (
   <Box minHeight={'95vh'} mt = {'15vh'}>
    <Box>
      <ChannelCard video = {channelDetail}/>
    </Box>
   </Box>
  )
}

export default Chanel