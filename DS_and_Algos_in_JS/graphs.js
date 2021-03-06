const { createQueue } = require('./index')

function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChild(node) {
      children.push(node)
    }
  }
}

function createGraph(directed = false) {
  const nodes = []
  const edges = []

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key))
    }, // The addNode() method takes a key (identifier for the node), creates a node data structure and adds it to the graph's nodes. We can use the Array.push() method to insert it into the graph's array of nodes.

    getNode(key) {
      return nodes.find(n => n.key === key)
    }, // The getNode() method allows us to find a node based on its key. We can use the Array.find() method to locate it in the graph's array of nodes.

    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key)
      const node2 = this.getNode(node2Key)

      node1.addChild(node2)

      if (!directed) {
        node2.addChild(node1)
      }

      edges.push(`${node1Key}${node2Key}`)
    }, // The addEdge() method creates a relationship or edge between two nodes. In an undirected graph, we add the relationship both ways to keep our edges symmetrical. In a directed graph, we would need to call the addEdge() method for each direction, if we wanted the edges to be symmetrical.

    print() {
      return nodes
        .map(({ children, key }) => {
          let result = `${key}`

          if (children.length) {
            result += ` => ${children
              .map(node => node.key)
              .join(' ')}`
          }

          return result
        })
        .join('\n')
    },


    // *****BFS****** 
    bfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(
        startingNodeKey
      )
      const visitedHash = nodes.reduce(
        (acc, cur) => {
          acc[cur.key] = false
          return acc
        },
        {}
      )
      const queue = createQueue()
      queue.enqueue(startingNode)

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue()

        if (!visitedHash[currentNode.key]) {
          visitFn(currentNode)
          visitedHash[currentNode.key] = true
        }

        currentNode.children.forEach(node => {
          if (!visitedHash[node.key]) {
            queue.enqueue(node)
          }
        })
      }
    },

      // *****DFS****** 
    dfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(
        startingNodeKey
      )
      const visitedHash = nodes.reduce(
        (acc, cur) => {
          acc[cur.key] = false
          return acc
        },
        {}
      )

      function explore(node) {
        if (visitedHash[node.key]) {
          return
        }

        visitFn(node)
        visitedHash[node.key] = true

        node.children.forEach(child => {
          explore(child) // recursive
        })
      }

      explore(startingNode)
    }
  }
}

const graph = createGraph(true)

graph.addNode('Kyle')
graph.addNode('Anna')
graph.addNode('Krios')
graph.addNode('Tali')


graph.addEdge('Kyle', 'Anna')
graph.addEdge('Anna', 'Kyle')
graph.addEdge('Kyle', 'Krios')
graph.addEdge('Kyle', 'Tali')
graph.addEdge('Anna', 'Krios')
graph.addEdge('Anna', 'Tali')
graph.addEdge('Krios', 'Anna')
graph.addEdge('Tali', 'Kyle')

console.log(graph.print())

exports.createNode = createNode
exports.createGraph = createGraph