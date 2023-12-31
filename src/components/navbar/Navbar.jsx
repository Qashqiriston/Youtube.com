import {Stack, Box} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from "../../constants"
import {colors} from "../../constants/colors"
import {SearchBar} from '../'
 
const Navbar = () => {
  return (
    
      <Stack direction={'row'} alignItems = {'center'} justifyContent = {'space-between'} p = {3} sx = {{position: 'sticky' , top: '0', zIndex: '999', backgroundColor: colors.primary}}>
        <Link to = {'/'}>
        <img src={logo} alt="logo" height={40} style= {{borderRadius: '10px'}} />
        </Link>
        <SearchBar/>
        <Box/>
      </Stack>
    
  )
}

export default Navbar