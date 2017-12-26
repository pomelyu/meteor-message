import { connect } from 'react-redux';

import { openSideBar } from '../../actions/uiActions.js';
import AppHeader from './AppHeader.jsx';

const mapStateToProps = state => ({
  title: 'Todos', // TODO:
});

const mapDispatchToProps = dispatch => ({
  onSideBarClick: () => dispatch(openSideBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);