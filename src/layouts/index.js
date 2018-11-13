import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import favicon from '../assets/favicon.ico'

import 'normalize.css'
import './index.sass'

const Layout = ({ children, data, location }) => (
  <div className={'app-container'}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sparkle Donkey VIllage' },
        { name: 'keywords', content: 'Sparkle Donkey, ass, donkey, burning man, the burn, burn' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <Header location={location.pathname} />
    <div className={'main-container'}>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`