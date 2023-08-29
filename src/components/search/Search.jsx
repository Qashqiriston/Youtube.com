import { Box, Container, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom" 
import {colors} from '../../constants/colors'
import {Videos} from '../'
import {ApiService} from '../../service/apiService'

const Search = () => {
  const [videos, setVedios] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const getData = async() => {
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVedios(data.items)
      }catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])

  return (
   <Box p={2} sx = {{height: '90vh'}}>
     <Container maxWidth = {'90%'}>
        <Typography variant={'h4'} fontWeight = {'bold'} mb = {2}>
          Search results for <span style={{color: colors.secondary}}>{id}</span> videos
        </Typography>
        <Videos video = {videos}/>
     </Container>
   </Box>
  )
}

export default Search