
const { getListGateway } = require("../class/ListGateway")

function pay (req, res) {
  const { id, userID, price } = req.body

  if (!id || !userID || !price) {
    res.status(404).send({ message: "Faltan datos necesarios" })
  } else {
    const listGateway = getListGateway()
    const gateway = listGateway.getElementGateway(id)
    if (gateway.isActive) {
      gateway.pay(userID, price)
      res.status(200).send({ message: "Pago efectuado correctamente" })
    } else {
      res.status(404).send({ message: "Este proveedor no esta activo" })
    }
  }
}

function reimburse (req, res) {
  const { id, userID, price, isPartial } = req.body
  // Check elements
  if (!id || !userID || !price) {
    res.status(404).send({ message: "Faltan datos necesarios" })
  } else {
    // Get list of gateways
    const listGateway = getListGateway()
    // Get element from list
    const gateway = listGateway.getElementGateway(id)
    if (gateway.isActive) {
      if (isPartial) {
        if (gateway.hasPartial) {
          gateway.partialReimburse(userID, price)
          res
            .status(200)
            .send({ message: "Reembolso parcial efectuado correctamente" })
        } else {
          res
            .status(404)
            .send({ message: "Este proveedor no tiene reembolso parcial" })
        }
      } else {
        res.status(200).send({ message: "Reembolso efectuado correctamente" })
      }
    } else {
      res.status(404).send({ message: "Este proveedor no esta activo" })
    }
  }
}

module.exports = {
  pay,
  reimburse
}
