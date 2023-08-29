import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { colors } from "../../constants/colors";
import {useNavigate} from "react-router-dom"
import "../../index.css";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    if (value){
      navigate(`/search/${value}`)
      setValue('')
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        paddingLeft: 2,
        boxShadow: "none",
      }}>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ border: "none", outline: "none", width: "350" }}
      />
      <IconButton type = {'submit'}>
        <Search />
        <i className="fa-solid fa-magnifying-glass"></i>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
