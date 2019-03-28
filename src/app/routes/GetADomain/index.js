import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typist from 'react-typist';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DomainSearch from '../Domains/domains';
import SearchBox from '../../../components/SearchBox/index';
import { Table } from 'reactstrap';
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

function getSteps() {
  return ['Get a domain', 'Search for a domain', 'Purchase the Domain', 'Finish your order'];
}


class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    domainRequested: '',
    mockDomains: [],
    fetchResults: false,
    fetchedResultTaken: false,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };
  setDomain = (e) => {
    this.setState({
      domainRequested: e.target.value
    })
  }
  fetchDomain = (domain) => {
    console.log(domain)
    const domain1 = `www.${domain}.co.cr`;
    const domain2 = `www.${domain}.org`;
    this.setState({
      mockDomains: this.state.mockDomains
        .concat(domain1)
        .concat(domain2),
      fetchResults: true,
      fetchedResultTaken: true,
    })
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
  getStepContent = (step) => {
    const options = {
      show: true,
      blink: true,
      element: '|',
      hideWhenDone: true,
      hideWhenDoneDelay: 200,
    }
    switch (step) {
      case 0:
        return {
          text: <Typist cursor={options}>
            <span className="typewritter">You're about to purchase a domain. Follow these steps and we'll set you up!</span>
          </Typist>,
          hasButton: true,
        }
      case 1:
        return {
          text: <div>
            <Typist cursor={options}>
              <span className="typewritter">Tell me the name of the domain you want to look for?</span>
            </Typist>
          </div>,
          hasButton: false,
        }
      case 2:
        return {
          text: 'This step is to enter credit card',
          hasButton: false,
        };
      case 3:
        return {
          text: 'hi',
          hasButton: false,
        };
      default:
        return {
          text: 'unkwnon step',
          hasButton: false,
        };;
    }
  }
  render() {
    const options = {
      show: true,
      blink: true,
      element: '|',
      hideWhenDone: true,
      hideWhenDoneDelay: 200,
    }
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className="jr-card domain-container">
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel className="border-left-none step-header">{label}</StepLabel>
              <StepContent>
                <Typography className="nav-text">{this.getStepContent(index).text}</Typography>
                <div className={classes.actionsContainer}>
                  <div className="button-alighment">
                    {
                      this.getStepContent(index).hasButton && <Button
                        variant="contained"
                        onClick={this.handleNext}
                        className={`button-link button-domains fade-in`}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    }
                    {
                      (activeStep === 1 && !this.state.fetchResults) &&
                      <div className="fade-in-search" >
                        <SearchBox className="padding-search-bar"
                          styleName="d-lg-block margin-bottom"
                          onChange={(e) => this.setDomain(e)}
                          value={this.state.domainRequested}
                          clickEvent={() => this.fetchDomain(this.state.domainRequested)}
                        />
                      </div>
                    }
                    {(activeStep === 1 && this.state.fetchResults) && <div className="box-background">
                      <span>{this.state.domainRequested}</span></div>}
                    {(activeStep === 1 && this.state.fetchedResultTaken) &&
                      <Typography className="nav-text"><Typist className="typist-align" cursor={options}>
                        <span
                          className="typewritter">Sorry, that domain is taken, maybe you'll like one of this options?
                    </span>
                      </Typist></Typography>
                    }
                    {

                      activeStep === 1 && this.state.mockDomains.length > 0 &&
                      <FadeIn delay={4700}>
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
                      <Typography className="nav-text"><Typist className="typist-align" cursor={options}>
                        <Typist.Delay ms={5850} cursor={options} />
                        <span
                          className="typewritter">You can also perform a new search below
                    </span>
                      </Typist></Typography>
                    }
                    {
                      (activeStep === 1 && this.state.fetchedResultTaken) &&
                      <FadeIn delay={9000}>
                        <SearchBox className="padding-search-bar"
                          styleName="d-lg-block margin-bottom"
                          onChange={(e) => this.setDomain(e)}
                          value={this.state.domainRequested}
                          clickEvent={() => this.fetchDomain(this.state.domainRequested)}
                        />
                      </FadeIn>
                    }

                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
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

export default withStyles(styles)(VerticalLinearStepper);
