import { useState , useEffect} from 'react'
import {Stack, Box, Container, Typography} from '@mui/material'
import { colors } from '../../constants/colors'
import {Catigory, Videos} from '../'
import { ApiService } from '../../service/apiService'

const Main = () => {
  const [selectorCatigory, setSelectorCatigory] = useState('New')
  const [video, setVideo] = useState([])
  const selectorCatigoryHandle = (category) =>   setSelectorCatigory(category)
 
  useEffect(() => {
    const getData = async () => {
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${selectorCatigory}`)
        setVideo(data.items)
      }catch{
        console.log('error');
      }
    }
    getData()
    // ApiService.fetching('search').then(data => setVideo(data))
  }, [selectorCatigory])


  return (
  <Stack >
    <Catigory selectorCatigoryHandle = {selectorCatigoryHandle} selectorCatigory = {selectorCatigory}/>
    <Box p={2} sx = {{height: '90vh'}}>
      <Container maxWidth = {'90%'}>
        <Typography variant={'h4'} fontWeight={'bold'} mb = {2}>
          {selectorCatigory} <span style={{color: colors.secondary}}>videos</span>
        </Typography>
        <Videos video = {video}/>
      </Container>
    </Box>
  </Stack>
  )
}

export default Main