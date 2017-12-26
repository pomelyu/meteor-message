import { connect } from 'react-redux';

import { closeSideBar } from '../../actions/uiActions.js';
import AppSideBar from './AppSideBar.jsx';

const mapStateToProps = state => ({
  isOpen: state.getIn(['ui', 'showSideBar']),
});

const mapDispatchToProps = dispatch => ({
  onSideBarClose: () => dispatch(closeSideBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSideBar);
