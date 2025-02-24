import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
function CrudUI() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            textAlign: "center",
            width: "30%",
            display: "flex",
            flexFlow: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h5">Redux-CRUD</Typography>

          <TextField
            variant="outlined"
            label="FirstName"
            name="firstname"
            sx={{ width: "100%" }}
          />

          <TextField
            variant="outlined"
            label="LastName"
            name="lastname"
            sx={{ width: "100%" }}
          />

          <TextField
            variant="outlined"
            label="Email"
            name="email"
            sx={{ width: "100%" }}
          />

          <TextField
            variant="outlined"
            label="Age"
            name="age"
            sx={{ width: "100%" }}
          />
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </>
  );
}

export default CrudUI;
