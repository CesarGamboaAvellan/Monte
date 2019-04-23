import React from 'react';
import Typist from 'react-typist';

const options = {
  show: false,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 200,
}
export const getStepContent = (step) => {

  switch (step) {
    case 0:
      return {
        text: <Typist cursor={options} avgTypingDelay={40} stdTypingDelay={10}>
          <span
            className="typewritter">
            You're about to purchase a domain. Follow these steps and we'll set you up!
          </span>
        </Typist>,
        hasButton: true,
        hasBackButton: false,
      }
    case 1:
      return {
        text: <div>
          <Typist cursor={options} avgTypingDelay={40} stdTypingDelay={10}>
            <span
              className="typewritter">Tell me the name of the domain you want to look for?
              </span>
          </Typist>
        </div>,
        hasButton: false,
        hasBackButton: false,
      }
    case 2:
      return {
        text: <div>
          <Typist cursor={options} avgTypingDelay={40} stdTypingDelay={10}>
            <span
              className="typewritter">{
                `You're about to purchase the domain , if you agree, click purchase`
              }
            </span>
          </Typist>
        </div>,
        hasButton: true,
        hasBackButton: true,
      };
    case 3:
      return {
        text: 'Congratulations!!, you just purchased your domain',
        hasButton: false,
        hasBackButton: false,
      };
    default:
      return {
        text: 'unkwnon step',
        hasButton: false,
        hasBackButton: false,
      };;
  }
}


export const getSteps = () => {
  return ['Get a domain', 'Search for a domain', 'Purchase the Domain', 'Finish your order'];
}

export const getTakenText = () => <Typist className="typist-align" cursor={options} avgTypingDelay={40}>
  <span
    className="typewritter">Sorry, that domain is taken, maybe you'll like one of this options?
</span>
</Typist>
