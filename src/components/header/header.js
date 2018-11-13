import React from 'react'
import Link from 'gatsby-link'

import logo from '../../assets/logo.png'

class Header extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div className={'header-container'} >
        <div className={'header-fullwidth'}>
          <div className={'header-content'}>
            {(() => {
              if (location === '/') {
                return (
                  <div
                    className={'logo-container'}
                  >
                    <img className={'logo-img'} src={logo}/>
                    <h1 className={'logo-text'}>Sparkle Donkey Village</h1>
                  </div>
                )
              }
              return (
                <Link to={'/'} className={'logo-container'}>
                  <img className={'logo-img'} src={logo}/>
                  <h1 className={'logo-text'}>Sparkle Donkey VIllage</h1>
                </Link>
              )
            })()}
            <div className={'header-menu-desktop'}>
              <Link
                className={'header-nav-contact'}
                to={'/contact/'}
              >
                <h3>Book Us</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;