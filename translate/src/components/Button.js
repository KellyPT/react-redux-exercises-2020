import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value.language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(colorValue) {
    return (
      <button className={`ui button ${colorValue}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(colorValue) => this.renderButton(colorValue)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
