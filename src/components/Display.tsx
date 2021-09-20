import React from 'react';
import PropTypes from 'prop-types';

const Display: React.FC<{
  total?: string | null;
  next?: string | null;
  operation?: string | null;
}> = ({ total, next, operation }) => (
  <>
    <div className="display">
      <p>{total}</p>
      <p>{operation}</p>
      <p>{next}</p>
    </div>
  </>
);

Display.propTypes = { total: PropTypes.string };
Display.propTypes = { next: PropTypes.string };
Display.propTypes = { operation: PropTypes.string };

Display.defaultProps = { total: '0' };
Display.defaultProps = { next: '' };
Display.defaultProps = { operation: '' };

export default Display;
