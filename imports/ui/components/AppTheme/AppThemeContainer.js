import { connect } from 'react-redux';

import AppTheme from './AppTheme.jsx';

const mapStateToProps = state => {
  return ({
    themeName: state.getIn(['theme', 'themeName']),
  });
}

export default connect(mapStateToProps)(AppTheme);