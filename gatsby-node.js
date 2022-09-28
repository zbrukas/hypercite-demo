const webpack = require("webpack")
const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

/**
 *
 * @param {import("gatsby").CreateWebpackConfigArgs} params
 */
exports.onCreateWebpackConfig = (
  { stage, loaders, actions, plugins },
  pluginOptions
) => {
  if (stage === "build-html" || stage === "develop-html") {
    const aliases = {}

    if (pluginOptions) {
      for (let key in pluginOptions.alias) {
        const value = pluginOptions.alias[key]

        aliases[key] = path.isAbsolute(value) ? value : path.resolve(value)
      }
    }

    aliases.canvas = false
    aliases.encoding = false

    actions.setWebpackConfig({
      resolve: {
        alias: aliases,
      },
      externals: ["canvas"],
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
