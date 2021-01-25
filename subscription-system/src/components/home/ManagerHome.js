import React from "react";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
//import { withStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import moment from "moment";
import endpoint from "../../endpoints/endpoint";
import DialogBox from "../utility/DialogBox";
import DataTable from "../utility/DataTable";
import Layout from "./Layout";

const styles = (theme) => ({
  messageBtn: {
    color: "white",
    backgroundColor: "blue",
    top: "50%",
    float: "right",
  },
});
class ManagerHome extends React.Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
      showMessage: false,
      message: "",
      maxWidth: "xs",
      selectOpen: false,
      employees: [],
      employeeId: 0,
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      mobile: "",
      dob: new Date(),
    };

    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("Fetching employee list");
    endpoint
      .get("/employees")
      .then((response) => {
        console.log(response);
        this.setState({ employees: response.data });
      });
  }
 
  columns = [
    { title: "Employee Id", field: "employeeId", type: "numeric" },
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Address", field: "address" },
    {
      title: "Date of Birth",
      field: "dob",
      type: "datetime",
      render: (rowData) => moment(rowData.dob).format("DD/MM/YYYY"),
    },
    { title: "Mobile", field: "mobile" },
    { title: "City", field: "city" },
  ];

  actions = [
    {
      icon: AddIcon,
      tooltip: "Add",
      isFreeAction: true,
      onClick: (event) => {
        console.log("showing dialog");
        this.setState({ showDialog: true, message: "Added" });
        console.log(this.state);
      },
    },
    {
      icon: EditIcon,
      tooltip: "Edit",
      onClick: (event, rowData) => {
        console.log("rowData", rowData);
        this.setState({
          showDialog: true,
          message: "Updated",
          employeeId: rowData.employeeId,
          firstName: rowData.firstName,
          lastName: rowData.lastName,
          address: rowData.address,
          city: rowData.city,
          mobile: rowData.mobile,
          dob: rowData.dob,
        });
      },
    },
    {
      icon: DeleteIcon,
      tooltip: "Delete",
      onClick: (event, rowData) => {
        console.log("rowData", rowData);
        this.setState({
          showMessage: true,
          message: "Deleted",
          employeeId: rowData.employeeId,
        });
        this.handleDeleteEmployee(rowData.employeeId);
      },
    },
  ];

  handleDialogClose() {
    this.setState({
      showDialog: false,
      showMessage: false,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      showDialog: false,
      showMessage: true,
      maxWidth: "xs",
    });
    if (this.state.message === "Added") this.handleAddEmployee();
    else this.handleEditEmployee();
  }

  handleAddEmployee() {
    console.log("Adding new employee");
    const tempEmployee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      mobile: this.state.mobile,
      dob: this.state.dob,
    };
    this.clearEmployeeDettails();
    endpoint.post("/employee", tempEmployee).then((response) => {
      this.setState(
        {
          employees: [...this.state.employees, response.data],
        },
        () => {
          console.log(this.state, "state");
        }
      );
    });
  }
  handleEditEmployee() {
    console.log("Editing employee");
    const tempEmployee = {
      employeeId: this.state.employeeId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      mobile: this.state.mobile,
      dob: this.state.dob,
    };
    this.clearEmployeeDettails();
    console.log(tempEmployee);
    endpoint.put("/employee", tempEmployee).then((response) => {
      this.setState(
        {
          employees: this.state.employees.map((employee) => {
            console.log(employee);
            if (employee.employeeId === tempEmployee.employeeId)
              return tempEmployee;
            else return employee;
          }),
        },
        () => {
          console.log(this.state, "state");
        }
      );
    });
  }
  handleDeleteEmployee(employeeId) {
    console.log("Deleting employee");
    endpoint.delete(`/employee/${employeeId}`).then((response) => {
      this.setState(
        {
          employees: this.state.employees.filter(
            (employee) => employee.employeeId !== employeeId
          ),
        },
        () => {
          console.log(this.state, "state");
        }
      );
    });
  }
  clearEmployeeDettails() {
    this.setState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      mobile: "",
      dob: new Date(),
    });
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
  handleAddressChange(event) {
    this.setState({
      address: event.target.value,
    });
  }
  handleCityChange(event) {
    this.setState({
      city: event.target.value,
    });
  }
  handleMobileChange(event) {
    this.setState({
      mobile: event.target.value,
    });
  }
  handleDOBChange(date) {
    this.setState({
      dob: date,
    });
  }
  renderDialogContent() {
    if (this.state.showDialog) {
      return (
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="firstName"
                label="First Name "
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
                variant="outlined"
                size="small"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="lsstName"
                label="Last Name "
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
                variant="outlined"
                size="small"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="address"
                label="Address "
                value={this.state.address}
                onChange={this.handleAddressChange}
                variant="outlined"
                size="small"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="city"
                label="City "
                value={this.state.city}
                onChange={this.handleCityChange}
                variant="outlined"
                size="small"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  clearable
                  margin="normal"
                  id="dob"
                  label="Date of Birth"
                  format="dd/MM/yyyy"
                  value={this.state.dob}
                  onChange={this.handleDOBChange}
                  required
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="mobile"
                label="Mobile"
                value={this.state.mobile}
                onChange={this.handleMobileChange}
                variant="outlined"
                size="small"
                required
              />
            </Grid>
          </Grid>
        </React.Fragment>
      );
    } else if (this.state.showMessage) {
      return (
        <React.Fragment>
          <Typography component="p" align="center">
            Employee {this.state.message} Successfully.
          </Typography>
        </React.Fragment>
      );
    }
  }

  renderDialogAction() {
    if (this.state.showDialog) {
      return (
        <React.Fragment>
          <Button
            type="button"
            color="secondary"
            onClick={this.handleDialogClose}
          >
            Cancel
          </Button>
          <Button type="submit" color="secondary">
            Submit
          </Button>
        </React.Fragment>
      );
    } else if (this.state.showMessage) {
      return (
        <React.Fragment>
          <Button
            color="secondary"
            className={this.props.messageBtn}
            onClick={this.handleDialogClose}
          >
            Close
          </Button>
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <Layout />
        <br />
        <br />
        <br />
        <main>
          <DataTable
            columns={this.columns}
            data={this.state.employees}
            actions={this.actions}
          />
        </main>
        <DialogBox
          showDialog={this.state.showDialog || this.state.showMessage}
          title={this.state.showDialog ? "Add/Update Employee" : ""}
          maxWidth={this.state.maxWidth}
          onClose={this.handleDialogClose}
        >
          <form onSubmit={this.handleSubmit}>
            {this.renderDialogContent()}
            {this.renderDialogAction()}
          </form>
        </DialogBox>
      </React.Fragment>
    );
  }
}
//export default withStyles(styles)(ManagerHome);
export default ManagerHome;
