import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SearchBox from '../../../components/SearchBox/index';
import { Table } from 'reactstrap';
import { getStepContent, getSteps, getTakenText } from './helpers';
import { lookupDomain } from '../../../actions/domainLookup';
import FadeIn from 'react-fade-in';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});


class VerticalLinearStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      domainRequested: '',
      mockDomains: [],
      fetchResults: false,
      fetchedResultTaken: false,
      foundSearch: false,
    };

  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };
  resetState = () => {
    this.setState({
      mockDomains: [],
    })
  }
  setDomain = (e) => {
    this.setState({
      domainRequested: e.target.value
    })
  }
  fetchDomain = (domain, status) => {
    if (status === 'success') {
      this.setState({
        mockDomains: [],
      }, function () {
        this.setState({
          mockDomains: this.state.mockDomains.concat(domain),
          foundSearch: true,
        })
      })
    }
    else {
      const domain1 = `www.org.${domain}`;
      const domain2 = `www.mgx-${domain}`;
      this.setState({
        mockDomains: [],
      }, function () {
        this.setState({
          cleanTable: true,
          mockDomains: this.state.mockDomains.concat(domain1, domain2),
          fetchResults: true,
          fetchedResultTaken: true,
        })
      })
    }

  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    console.log('props from redux', this.props.domainLookUp)
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    let fadeInClass = 'fade-in-step1';
    let buttonText = 'Next';
    if (activeStep === 2) {
      fadeInClass = 'fade-in-step3'
      buttonText = 'Purchase'
    }
    return (
      <div className="jr-card domain-container">
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            let fadeStyle = label === 'Get a domain' ? '' : 'fade-in-step-labels';
            return (
              <Step key={label}>
                <StepLabel className={`border-left-none step-header ${fadeStyle}`}>{label}</StepLabel>
                <StepContent>
                  <Typography className="nav-text">{getStepContent(index).text}</Typography>
                  <div className={classes.actionsContainer}>
                    <div className="button-alighment">
                      {
                        getStepContent(index).hasBackButton &&
                        <button
                          onClick={this.handleBack}
                          className={`domains-back-button  ${fadeInClass}`}
                        >
                          Back
                    </button>
                      }
                      {
                        getStepContent(index).hasButton && <Button
                          variant="contained"
                          onClick={this.handleNext}
                          className={`button-link button-domains ${fadeInClass}`}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : buttonText}
                        </Button>
                      }
                      {
                        (activeStep === 1 && !this.state.fetchResults) &&
                        <div className="fade-in-search" >
                          <SearchBox className="padding-search-bar"
                            styleName="d-lg-block margin-bottom"
                            onChange={(e) => this.setDomain(e)}
                            value={this.state.domainRequested}
                            clickEvent={() => this.props.lookupDomain(this.state.domainRequested)}
                          />
                        </div>
                      }
                      {(activeStep === 1 && this.state.fetchResults) && <div className="box-background">
                        <span>{this.state.domainRequested}</span></div>}
                      {(activeStep === 1 && this.props.record && this.props.domainLookUp.status === "taken") &&
                        <Typography className="nav-text">
                          {getTakenText()}
                        </Typography>
                      }
                      {

                        activeStep === 1 && this.state.mockDomains.length > 0 &&
                        <FadeIn delay={2800}>

                          <Table hover>
                            <tbody>
                              {this.state.mockDomains.map((record) => {
                                return (
                                  <tr>
                                    <td className="border-td">
                                      {record}
                                    </td>
                                    <td className="border-td">
                                      <Button
                                        variant="contained"
                                        onClick={this.handleNext}
                                        className={`button-link button-domains`}
                                      >
                                        Select
                                    </Button>
                                    </td>
                                  </tr>
                                );
                              })}

                            </tbody>
                          </Table>

                        </FadeIn>

                      }
                      {(activeStep === 1 && this.state.fetchedResultTaken) &&
                        <Typography className="nav-text typist-align">
                          <FadeIn delay={3100}>
                            <span
                              className="typewritter">You can also, perform a new search below
                          </span>
                          </FadeIn>
                        </Typography>
                      }
                      {
                        (activeStep === 1 && this.state.fetchedResultTaken) &&
                        <FadeIn delay={4900}>
                          <SearchBox className="padding-search-bar"
                            styleName="d-lg-block margin-bottom"
                            onChange={(e) => this.setDomain(e)}
                            value={this.state.domainRequested}
                            clickEvent={() => this.fetchDomain(this.state.domainRequested, 'success')}
                          />
                        </FadeIn>
                      }

                    </div>
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};
const mapDispatchToProps = dispatch => ({
  lookupDomain: (data) => dispatch(lookupDomain(data)),
});
const mapStateToProps = ({ domainLookUp }) => {
  return { domainLookUp }
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VerticalLinearStepper));
