import { connect } from 'react-redux';

import { setLightTheme, setDarkTheme } from '../../actions/themeActions.js';

import ThemeSwitcher from './ThemeSwitcher.jsx';

const mapStateToProps = state => {
  return ({
    themeName: state.getIn(['theme', 'themeName']),
  });
}

const mapDispatchToProps = disptach => ({
  onThemeSwitch: (event, checked) => {
    if (checked) {
      disptach(setLightTheme());
    } else {
      disptach(setDarkTheme());
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
