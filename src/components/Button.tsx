import React from 'react';
import PropTypes from 'prop-types';
import { IonButton, IonText } from '@ionic/react';

const Button: React.FC<{
  name: string;
  onButtonClick: (buttonName: string | null) => void;
  classProp?: string;
}> = ({ name, onButtonClick, classProp }) => (
  <>
    <IonButton
      className={classProp}
      onClick={() => {
        onButtonClick(name);
      }}
    >
      <IonText>{name}</IonText>
    </IonButton>
  </>
);

Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { classProp: PropTypes.string };
Button.propTypes = { onButtonClick: PropTypes.func.isRequired };

Button.defaultProps = { classProp: '' };
export default Button;
