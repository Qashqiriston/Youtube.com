import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import {Main, Chanel ,Navbar, VideoDetail, Search} from '../'


const App = () => {
  return (
   <Box>
    <Navbar/>
      <Routes>
        <Route path='/' element = {<Main/>} />
        <Route path='/Chanel/:id' element = {<Chanel/>}/>
        <Route path='/Video/:id' element ={<VideoDetail/>}/>
        <Route path='/Search/:id' element ={<Search/>}/>
      </Routes>
   </Box>
  );
}

export default App