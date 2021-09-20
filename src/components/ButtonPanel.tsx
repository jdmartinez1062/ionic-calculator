import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel: React.FC<{ onButtonName: (value: string | null) => void }> = ({
  onButtonName,
}) => (
  <>
    <div className="button-row">
      <Button name="AC" onButtonClick={onButtonName} />
      <Button name="+/-" onButtonClick={onButtonName} />
      <Button name="%" onButtonClick={onButtonName} />
      <Button name="&#247;" onButtonClick={onButtonName} classProp="orange" />
    </div>
    <div className="button-row">
      <Button name="7" onButtonClick={onButtonName} />
      <Button name="8" onButtonClick={onButtonName} />
      <Button name="9" onButtonClick={onButtonName} />
      <Button name="X" onButtonClick={onButtonName} classProp="orange" />
    </div>
    <div className="button-row">
      <Button name="4" onButtonClick={onButtonName} />
      <Button name="5" onButtonClick={onButtonName} />
      <Button name="6" onButtonClick={onButtonName} />
      <Button name="-" onButtonClick={onButtonName} classProp="orange" />
    </div>
    <div className="button-row">
      <Button name="1" onButtonClick={onButtonName} />
      <Button name="2" onButtonClick={onButtonName} />
      <Button name="3" onButtonClick={onButtonName} />
      <Button name="+" onButtonClick={onButtonName} classProp="orange" />
    </div>
    <div className="button-row">
      <Button name="0" onButtonClick={onButtonName} classProp="zero" />
      <Button name="." onButtonClick={onButtonName} />
      <Button name="=" onButtonClick={onButtonName} classProp="orange" />
    </div>
  </>
);

ButtonPanel.propTypes = { onButtonName: PropTypes.func.isRequired };

export default ButtonPanel;
