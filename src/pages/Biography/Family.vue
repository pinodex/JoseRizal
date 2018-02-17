<template>
  <section class="page">
    <div class="page-heading">
      <div class="container">
        <h1 class="title">Welcome to José Rizal's Family Tree</h1>
      </div>
    </div>

    <div class="graph">
      <svg id="graph">
        <g></g>
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .page {
    position: relative;

    .page-heading,
    .graph {
      position: absolute;
      top: 104px;
      left: 0;
      right: 0;
    }

    .page-heading {
      padding-top: 1rem;
      z-index: 10;
    }
  }
</style>

<style>
  .node {
    white-space: nowrap;
  }

  .node rect,
  .node circle,
  .node ellipse {
    stroke: #333;
    fill: #fff;
    stroke-width: 1.5px;
  }

  .cluster rect {
    stroke: #333;
    fill: #000;
    fill-opacity: 0.1;
    stroke-width: 1.5px;
  }

  .edgePath path.path {
    stroke: #333;
    stroke-width: 1.5px;
    fill: none;
  }
</style>

<script>
  import d3 from 'd3'
  import dagre from 'dagre'
  import dagreD3 from 'dagre-d3'

  import data from '@/data/family'

  export default {
    components: { },

    mounted () {
      let g = new dagre.graphlib.Graph()

      g.setGraph({})
      g.setDefaultEdgeLabel(() => {
        return {}
      })

      data.persons.forEach(person => {
        g.setNode(person.id, { label: person.name })
      })

      data.connections.forEach(connection => {
        g.setEdge(connection.x, connection.y)
      })

      dagre.layout(g)

      let svg = d3.select('#graph')
        .attr('width', window.innerWidth)
        .attr('height', window.innerHeight - 110)

      let inner = d3.select('#graph g'),
          zoom = d3.behavior.zoom().on('zoom', () => {
            inner.attr('transform',
              `translate(${d3.event.translate}) scale(${d3.event.scale})`
            )
          })

      svg.call(zoom)

      let render = dagreD3.render()

      inner.call(render, g)
    }
  }
</script>
