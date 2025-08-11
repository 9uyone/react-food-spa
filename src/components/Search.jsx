import { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export function Search({ callback = Function.prototype }) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setValue(search);
      callback(search);
    }
  }, []);

  const handleSearch = (str) => {
    if (str) setSearchParams({ search: str });
    else setSearchParams();
    callback();
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch(value);
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "65%", md: "55%" },
        mx: "auto",
        position: "relative",
        top: 0,
      }}
    >
      <TextField
        fullWidth
        id='outlined-basic'
        label='Search'
        variant='outlined'
        type='search'
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </Box>
  );
}
