exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  //   console.log(resultado.allDatoCmsHabitacion)

  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  // If there are pages, create the files:

  const habitaciones = resultado.data.allDatoCmsHabitacion.edges

  habitaciones.forEach(edge => {
    actions.createPage({
      path: edge.node.slug,
      component: require.resolve("./src/components/HabitacionTemplate.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
