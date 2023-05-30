const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

module.exports = function override(config, env) {
  // console.log('deps', deps)
  config.plugins.push(
    new ModuleFederationPlugin({
      /* the remote apps to be loaded by this host app */
      remotes: {
        /* the name to be used for this remote app */
        mfe_video_plus_banner:
          /* the-remote-app-name@the-remote-app-url */
          'mfe_video_plus_banner@https://mfe-banner.netlify.app/remoteEntry.js',
      },
      /**
       * a list of peer dependencies (to load by this host app, and not by any other remote app).
       * */
      shared: [
        {
          react: {
            singleton: true,
            requiredVersion: deps['react'],
            eager: true,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
            eager: true,
          },
          '@chakra-ui/react': {
            singleton: true,
            requiredVersion: '^2.2.1',
            eager: true,
          },
          '@emotion/react': {
            singleton: true,
            requiredVersion: deps['@emotion/react'],
            eager: true,
          },
          '@emotion/styled': {
            singleton: true,
            requiredVersion: deps['@emotion/styled'],
            eager: true,
          },
          'framer-motion': {
            singleton: true,
            requiredVersion: deps['framer-motion'],
            eager: true,
          },
          'react-icons': {
            singleton: true,
            requiredVersion: deps['react-icons'],
            eager: true,
          },
          'react-slick': {
            singleton: true,
            requiredVersion: deps['react-slick'],
            eager: true,
          },
        },
      ],
    })
  )
  return config
}
