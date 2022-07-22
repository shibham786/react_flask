import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Form() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          m: 2,
        }}
      >
        <Typography variant="h4" m={1}>
          Add Project
        </Typography>
        <TextField id="Name" label="Name" variant="outlined" />
        <br />
        <TextField id="Description" label="Description" variant="outlined" />
        <br />
        <Button size="medium"> Add Project </Button>
      </Box>
    </div>
  );
}
