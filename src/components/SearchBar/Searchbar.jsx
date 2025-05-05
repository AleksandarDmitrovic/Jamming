import { Autocomplete, TextField } from "@mui/material";
import React from "react";

function Searchbar() {
  const top5Songs = [
    { label: "Song 1", year: 1994 },
    { label: "Song 2", year: 1995 },
    { label: "Song 3", year: 1996 },
    { label: "Song 4", year: 1997 },
    { label: "Song 5", year: 1998 },
  ];
  return (
    <Autocomplete
      disablePortal
      options={top5Songs}
      sx={{ width: 300, backgroundColor: "white", marginTop: 2 }}
      renderInput={(params) => <TextField {...params} label="Songs" />}
    />
  );
}

export default Searchbar;
