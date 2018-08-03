import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import logo from '../../logo.svg';
import { AppState } from '../../store';
import './Header.css';

interface HeaderProps {
    navigateToLogin: () => void
}

class Header extends React.Component<HeaderProps, AppState> {
    constructor(props: HeaderProps) {
        super(props);
    }

    public render() {
        return (
            <div className="headerRoot">
                <img src={logo} className="headerLogo" alt="logo" />
                <h1 className="headerTitle">BookGlobe</h1>
                <button className="headerLoginButton" onClick={this.props.navigateToLogin}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    navigateToLogin: () => dispatch(push('/login'))
  }
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Header);