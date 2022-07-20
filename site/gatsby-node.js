exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/custom',
    component: require.resolve('./src/templates/custom.js'),
    context: {
      title: 'A Custom Page',
      meta: {
        description: 'This is a custom page.',
      }
    }
  })
}