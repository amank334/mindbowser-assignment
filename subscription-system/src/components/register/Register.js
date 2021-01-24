import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { withStyles } from "@material-ui/core/styles";
import RegisterService from "../../services/RegisterService";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Aman Kumar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      company: "",
      dob: new Date(),
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleCompanyChange(event) {
    this.setState({
      company: event.target.value,
    });
  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }
  handleAddressChange(event) {
    this.setState({
      address: event.target.value,
    });
  }

  handleDOBChange(date) {
    this.setState({
      dob: date,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const manager = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      company: this.state.company,
      dob: this.state.dob,
    };
    RegisterService.registerManager(manager);
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.props.classes.paper}>
          <Avatar className={this.props.classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={this.props.classes.form}
            onSubmit={this.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  //value={this.state.password}
                  onChange={this.handlePasswordChange}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                  //autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="company"
                  label="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.handleCompanyChange}
                  autoComplete="company"
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    clearable
                    margin="normal"
                    id="dob"
                    label="Date of Birth"
                    format="dd/MM/yyyy"
                    value={this.state.dob}
                    onChange={this.handleDOBChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
export default withStyles(styles)(Register);
