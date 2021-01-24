import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { fetchPlans } from "../actions";
import { connect } from "react-redux";

import Layout from "./Layout";
import { plansData as plans } from "../data";
const styles = (theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
});



class SubscriptionPlans extends React.Component {
  componentDidMount() {
    console.log("Fetching Plans");
    //this.props.fetchPlans();
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Layout />

        <Container
          maxWidth="sm"
          component="main"
          className={this.props.classes.heroContent}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Please select any plan according to your requirement :
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {plans.map((plan) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={plan.title}
                xs={12}
                sm={plan.title === "Premium" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={plan.title}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    action={plan.title === "Premium" ? <StarIcon /> : null}
                    className={this.props.classes.cardHeader}
                  />
                  <CardContent>
                    <div className={this.props.classes.cardPricing}>
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        ${plan.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                    >
                      Checkout
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
// const mapstateToProps = (state) => {
//   console.log(state);
//   return {
//     plans: state.plans,
//   };
// };
// export default connect(mapstateToProps, { fetchPlans })(
//   withStyles(styles)(SubscriptionPlans)
// );
export default withStyles(styles)(SubscriptionPlans);