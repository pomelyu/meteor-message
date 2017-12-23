import React from 'react';
import PropTypes from 'prop-types';

import Messager from '../Messager';

const MessagerPage = ({ className }) => (
  <div className={`app-grid-item-page ${className}`}>
    <Messager />
  </div>
);

MessagerPage.propTypes = {
  className: PropTypes.string,
}

MessagerPage.defaultProps = {
  className: '',
}

export default MessagerPage
