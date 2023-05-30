/** @type {import("@teambit/react.apps.react-app-types").ReactAppOptions} */

const { Netlify } = require('@teambit/cloud-providers.deployers.netlify')
const {
  moduleFederationRemoteTransformer,
} = require('./config/module-federation-tranformer')

const netlifyOptions = {
  team: 'leimonio',
  accessToken: process.env.NETLIFY_AUTH_TOKEN,
  productionSiteName: 'mfe-banner',
  stagingSiteName: 'mfe-banner-staging',
}

module.exports.default = {
  name: 'banner',
  portRange: [60000, 60000],
  entry: [require.resolve('./banner.app-root')],
  webpackTransformers: [
    (config) => {
      return moduleFederationRemoteTransformer(config, null, {
        './Banner': require.resolve('./banner'),
        './BannerBasic': require.resolve('./banner.composition'),
      })
    },
  ],
  deploy: Netlify.deploy(netlifyOptions),
}
