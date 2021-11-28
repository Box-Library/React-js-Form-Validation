import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PasswordIcon from "@mui/icons-material/Password";
import { Button } from "@mui/material";
import swal from "sweetalert";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmpassword) {
      swal(
        "Good job!",
        "Your data has been successfully registered!",
        "success"
      );
    } else {
      swal("Good job!", "Please Check Your Password!", "error");
    }
    console.log(data);
  };

  return (
    <div>
      <div sx={{ minWidth: 275 }} className="container">
        <div className="wrapper">
          <section className="columns">
            <div className="column">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign Up</h1>
                <TextField
                  id="input-with-icon-textfield"
                  label="First Name"
                  type="text"
                  className="input"
                  style={{ marginBottom: "3px" }}
                  {...register("firstname", {
                    required: "First Name is Required",
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <br />
                {errors.firstname && (
                  <span style={{ color: "red" }}>
                    {errors.firstname.message}
                  </span>
                )}
                <TextField
                  id="input-with-icon-textfield"
                  label="Last Name"
                  type="text"
                  className="input"
                  style={{ marginBottom: "3px" }}
                  {...register("lastname", {
                    required: "Last Name is Required",
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <br />
                {errors.lastname && (
                  <span style={{ color: "red" }}>
                    {errors.lastname.message}
                  </span>
                )}
                <TextField
                  id="input-with-icon-textfield"
                  label="User Name"
                  type="text"
                  className="input"
                  {...register("username", {
                    required: "User Name is Required",
                  })}
                  style={{ marginBottom: "3px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <br />
                {errors.username && (
                  <span style={{ color: "red" }}>
                    {errors.username.message}
                  </span>
                )}
                <TextField
                  id="input-with-icon-textfield"
                  label="Email Address"
                  type="email"
                  className="input"
                  {...register("email", {
                    required: "Email Address is Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email Address",
                    },
                  })}
                  style={{ marginBottom: "3px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <br />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
                <TextField
                  id="input-with-icon-textfield"
                  label="Contact Number"
                  type="text"
                  className="input"
                  style={{ marginBottom: "3px" }}
                  {...register("contactNumber", {
                    required: "Contact Number is Required",
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: "Invalid Contact Number",
                    },
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <br />
                {errors.contactNumber && (
                  <span style={{ color: "red" }}>
                    {errors.contactNumber.message}
                  </span>
                )}
                <TextField
                  id="input-with-icon-textfield"
                  label="Password"
                  type="password"
                  className="input"
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 8,
                      message: "Password must have min 9 character",
                    },
                  })}
                  style={{ marginBottom: "3px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <br />
                {errors.password && (
                  <span style={{ color: "red" }}>
                    {errors.password.message}
                  </span>
                )}
                <TextField
                  id="input-with-icon-textfield"
                  label="Confirm Password"
                  type="password"
                  className="input"
                  style={{ marginBottom: "3px" }}
                  {...register("confirmpassword", {
                    required: "Confirm Password is Required",
                    minLength: {
                      value: 8,
                      message: "Password must have min 9 character",
                    },
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <br />
                {errors.confirmpassword && (
                  <span style={{ color: "red" }}>
                    {errors.confirmpassword.message}
                  </span>
                )}
                <div className="form-button">
                  <Button
                    variant="contained"
                    className="form-submit"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>
            <div className="column">
              <center>
                <img src="images/signup-image.jpg" alt="signup" />
                <br />
                <p>
                  Have already an account?
                  <a href="/#" className="signup-image-link">
                    Sign in here
                  </a>
                </p>
              </center>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
