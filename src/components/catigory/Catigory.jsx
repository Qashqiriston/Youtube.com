import { Stack } from "@mui/material"
import {catigory} from "../../constants"
import {colors} from "../../constants/colors"
import "../../index.css"
 
const Catigory = ({ selectorCatigoryHandle, selectorCatigory }) => {
  return (
    <Stack direction={'row'} sx = {{overflowX: 'scroll'}}>
      {catigory.map(item => (
        <button key={item.name} className ="catigory-btn" style={{ borderRadius: '0', background: item.name === selectorCatigory && colors.secondary, color: item.name === selectorCatigory && "white"  }} 
        onClick = {() => selectorCatigoryHandle(item.name)} >
          <span style={{color:  item.icon === selectorCatigory && "white", marginRight: '12px'}}>{item.icon}</span>
          <span style={{opocite: '1'}}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Catigory