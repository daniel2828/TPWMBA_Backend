const { Gateway, GatewayWReverse } = require("./Gateway")
class ListGateway {
  constructor () {
    this.listGateway = []
  }

  setElementGateway (id, Gateway) {
    this.listGateway[id] = Gateway
  }

  getElementGateway (id) {
    return this.listGateway[id]
  }

  setActiveElement (id, isActive) {
    this.listGateway[id].setActive(isActive)
  }
}

// Create list gateway
const listGateway = new ListGateway()
// Create element gateway 1
listGateway.setElementGateway(
  "pgateway1",
  new GatewayWReverse("pgateway1", "Element gateway 1", true)
)
// Create element gateway 2
listGateway.setElementGateway(
  "pgateway2",
  new Gateway("pgateway2", "Element gateway 2", true)
)
// Singleton pattern
function getListGateway () {
  return listGateway
}
module.exports = {
  getListGateway
}
