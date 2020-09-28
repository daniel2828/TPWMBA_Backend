class Gateway {
  constructor (id, name, isActive) {
    this.id = id
    this.name = name
    this.isActive = isActive
  }

  pay (userID, price) {
    console.log("Make a payment. Open payment of " + this.name + " provider.")
    //** TODO CONNECT WITH THE PROVIDER */
  }

  reimburse (userID, price) {
    console.log(
      "Make a reimburse. Open reimburse payment of " + this.name + " provider."
    )
    //** TODO CONNECT WITH THE PROVIDER */
  }

  setIsActive (isActive) {
    this.isActive = isActive
  }
}
class GatewayWReverse extends Gateway {
  constructor (id, name, isActive) {
    super(id, name, isActive)
    this.hasPartial = true
  }

  partialReimburse (userID, price) {
    console.log("Make a partial reimburse")
    //** TODO CONNECT WITH THE PROVIDER */
  }
}
module.exports = {
  Gateway,
  GatewayWReverse
}
