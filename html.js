import React from 'react'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'


export default class extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    favicon: React.PropTypes.string,
    body: React.PropTypes.string,
  }

  render () {
    const head = Helmet.rewind()

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en" className="is-loading">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <meta name="theme-color" content="#f3df49" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          <link rel="shortcut icon" href={this.props.favicon} />

          {cssLink}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')} />
          <script src="//www.google-analytics.com/analytics.js" />
        </body>
      </html>
    )
  }
}
