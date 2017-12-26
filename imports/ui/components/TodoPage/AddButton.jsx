import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withTheme } from 'material-ui/styles';

const AddButton = ({ className, onClick, theme }) => (
  <div className={`todo-input ${className}`} style={{ backgroundColor: theme.palette.primary[500] }}>
    <Button onClick={onClick} color="contrast">
      <AddIcon />
    </Button>
  </div>
)

AddButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

AddButton.defaultProps = {
  className: '',
  onClick: () => {},
}

export default withTheme()(AddButton);
