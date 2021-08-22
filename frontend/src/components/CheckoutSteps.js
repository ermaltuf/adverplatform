import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  iconContainer: { // define styles for icon container
    transform: 'scale(1.5)',
  }
}));
export default function CheckoutSteps(props) {
  const classes = useStyles();
  const stateLabel = ['Sign-In', 'Shipping', 'Payment', 'Place Order'];

  return (

    // <div className="row checkout-steps">
    //   <div className={props.step1 ? 'active' : ''}>Sign-In</div>
    //   <div className={props.step2 ? 'active' : ''}>Shipping</div>
    //   <div className={props.step3 ? 'active' : ''}>Payment</div>
    //   <div className={props.step4 ? 'active' : ''}>Place Order</div>
    // </div>

          <div className={classes.root}>
            <Stepper activeStep={props.step} alternativeLabel>
              {stateLabel.map((label) => (
                <Step key={label}>
                  <StepLabel classes={{// apply this style
                    iconContainer: classes.iconContainer
                  }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
  );
}
