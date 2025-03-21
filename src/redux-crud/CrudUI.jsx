import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { setInputValue, deleteData, updateData } from "./CrudSlice";
import { Formik, Field, Form } from "formik";

function CrudUI() {
  const inputData = useSelector((state) => state.create.inputValue);
  const list = useSelector((state) => state.create.list);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(setInputValue(values));
    resetForm();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          margin: "50px",
          alignItems: "top",
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
          <Formik
            enableReinitialize
            initialValues={inputData}
            onSubmit={handleSubmit}
          >
            <Form
              style={{ display: "flex", flexFlow: "column", rowGap: "20px" }}
            >
              <Typography variant="h5">Redux-CRUD</Typography>

              <Field
                as={TextField}
                variant="outlined"
                label="FirstName"
                name="firstname"
                sx={{ width: "100%" }}
              />

              <Field
                as={TextField}
                variant="outlined"
                label="LastName"
                name="lastname"
                sx={{ width: "100%" }}
              />

              <Field
                as={TextField}
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                sx={{ width: "100%" }}
              />

              <Field
                as={TextField}
                variant="outlined"
                label="Age"
                name="age"
                type="number"
                sx={{ width: "100%" }}
              />
              <Field as={Button} type="submit" variant="contained">
                Submit
              </Field>
            </Form>
          </Formik>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>FirstName</TableCell>
                  <TableCell>LastName</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>DELETE</TableCell>
                  <TableCell>UPDATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((el, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell>{el.firstname}</TableCell>
                    <TableCell>{el.lastname}</TableCell>
                    <TableCell>{el.email}</TableCell>
                    <TableCell>{el.age}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => dispatch(deleteData(i))}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(updateData({ el: el, i: i }))}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default CrudUI;
