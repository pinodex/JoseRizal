<template>
  <section class="page">
    <div class="page-heading">
      <div class="container">
        <h1 class="title">Welcome to José Rizal's Family Tree</h1>
      </div>
    </div>

    <div id="graph" ref="graph"></div>
  </section>
</template>

<style lang="scss" scoped>
  .page {
    position: relative;

    .page-heading,
    #graph {
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
  .person rect {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 1px;
  }

  .person {
    font: 14px sans-serif;
    cursor: pointer;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 1.5px;
  }
</style>

<script>
  import d3 from 'd3'
  import family from '@/data/family'

  export default {
    components: { },

    mounted () {
      // https://github.com/justincy/d3-pedigree-examples

      let ancestorRoot, descendantRoot,
          boxWidth = 150,
          boxHeight = 40,
          duration = 750

      let zoom = d3.behavior.zoom()
        .scaleExtent([.1, 1])
        .on('zoom', () => {
          svg.attr('transform',
            `translate(${d3.event.translate}) scale(${d3.event.scale})`
          )
        })
        .translate([400, 200])

      let svg = d3.select('#graph')
        .append('svg')
        .attr('width', window.innerWidth)
        .attr('height', window.innerHeight - 110)
        .call(zoom)
        .append('g')
        .attr('transform', 'translate(400, 200)')

      let ancestorsTree = d3.layout.tree()
        .nodeSize([100, 200])
        .separation(() => .5)
        .children(person => {
          if (person.collapsed)
            return

          return person._parents
        })

      let descendantsTree = d3.layout.tree()
        .nodeSize([100, 200])
        .separation(() => .5)
        .children(person => {
          if (person.collapsed)
            return

          return person._children
        })

      /*
       * Functions
       */

      let rootProxy = root => {
        return {...root,
          x0: 0,
          y0: 0,
          collapsed: false
        }
      }

      let elbow = (d, direction) => {
        let sourceX = d.source.x,
            sourceY = d.source.y + (boxWidth / 2),
            targetX = d.target.x,
            targetY = d.target.y - (boxWidth / 2)

        let m = direction * sourceY,
            h = direction * (sourceY + (targetY - sourceY) / 2),
            h2 = direction * targetY,
            v = targetX

            return `M${m},${sourceX}H${h}V${v}H${h2}`
      }

      let transitionElbow = d => {
        return `M${d.source.y},${d.source.x}H${d.source.y}V${d.source.x}H${d.source.y}`
      }

      let collapse = person => {
        person.collapsed = true

        if (person._parents) {
          person._parents.forEach(collapse)
        }

        if (person._children) {
          person._children.forEach(collapse)
        }
      }

      let togglePerson = person => {
        if (person === ancestorRoot || person === descendantRoot) {
          (function () {
            if (ancestorRoot.collapsed) {
              ancestorRoot.collapsed = false
              descendantRoot.collapsed = false

              return
            }

            collapse(ancestorRoot)
            collapse(descendantRoot)
          }())

          drawDescendants(descendantRoot)
          drawAncestors(ancestorRoot)

          return
        }

        (function () {
          if (person.collapsed) {
            person.collapsed = false

            return
          }

          collapse(person)
        }())

        if (person._children) {
          drawDescendants(person)
        }

        if (person._parents) {
          drawAncestors(person)
        }
      }

      let draw = (source, tree, root, displayClass, direction) => {
        let nodes = tree.nodes(root),
            links = tree.links(nodes)

        let link = svg.selectAll(`path.link.${displayClass}`)
          .data(links, d => d.target.id)

        link.enter().append('path')
          .attr('class', `link ${displayClass}`)
          .attr('d', d => {
            let o = {
              x: source.x0,
              y: direction * (source.y0 + boxWidth /2)
            }

            return transitionElbow({ source: o, target: o })
          })

        link.transition()
          .duration(duration)
          .attr('d', d => elbow(d, direction))

        link.exit()
          .transition()
          .duration(duration)
          .attr('d', d => {
            let o = {
              x: source.x,
              y: direction * (source.y + boxWidth / 2)
            }

            return transitionElbow({ source: o, target: o })
          })
          .remove()

        let node = svg.selectAll(`g.person.${displayClass}`)
          .data(nodes, person => person.id)

        let nodeEnter = node.enter().append('g')
          .attr('class', `person ${displayClass}`)
          .attr('transform', person => {
            let x = direction * (source.y0 + boxWidth / 2)

            return `translate(${x}, ${source.x0})`
          })
          .on('click', togglePerson)

        nodeEnter.append('rect')
          .attr({ x: 0, y: 0, width: 0, height: 0 })

        nodeEnter.append('text')
          .attr({ dx: 0, dy: 5 })
          .attr('text-anchor', 'start')
          .attr('class', 'name')
          .text(d => d.name)
          .style('fill-opacity', 0)

        let nodeUpdate = node.transition()
          .duration(duration)
          .attr('transform', d => {
            let y = direction * d.y

            return `translate(${y}, ${d.x})`
          })

          nodeUpdate.select('rect')
            .attr({
              x: -(boxWidth / 2),
              y: -(boxHeight / 2),
              width: boxWidth,
              height: boxHeight
            })

          nodeUpdate.select('text')
            .attr('dx', -(boxWidth / 2) + 10)
            .style('fill-opacity', 1)

          let nodeExit = node.exit()
            .transition()
            .duration(duration)
            .attr('transform', d => {
              let y = direction * (source.y + boxWidth / 2)

              return `translate(${y}, ${source.x})`
            })
            .remove()

          nodeExit.select('rect')
            .attr({ x: 0, y: 0, width: 0, height: 0 })

          nodeExit.select('text')
            .style('fill-opacity', 0)
            .attr('dx', 0)

          nodes.forEach(person => {
            person.x0 = person.x
            person.y0 = person.y
          })
      }

      let drawAncestors = source => {
        draw(source, ancestorsTree, ancestorRoot, 'ancestor', 1)
      }

      let drawDescendants = source => {
        draw(source, descendantsTree, descendantRoot, 'descendant', -1)
      }

      ancestorRoot = rootProxy(family)
      descendantRoot = rootProxy(family)

      /*
      ancestorRoot._parents.forEach(parents => {
        if (!parents._parents) {
          return true
        }

        parents._parents.forEach(collapse)
      })

      descendantRoot._children.forEach(collapse)
      */

      drawAncestors(ancestorRoot)
      drawDescendants(descendantRoot)
    }
  }
</script>
