import { Grid } from "@mui/material";
import React from "react";
import projectimg from "../../assest/project.gif";
import Form from "../../component/form/Form";

export default function AddProject() {
  return (
    <>
      <Grid
        container
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Grid item md={6} sm={12} xs={12}>
          <img src={projectimg} alt="" />
        </Grid>
        <Grid item md={6} sm={12} xs={12} mt={2}>
          <Form />
        </Grid>
      </Grid>
    </>
  );
}
