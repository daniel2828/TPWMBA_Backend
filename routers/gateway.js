const express = require("express")
const GatewayController = require("../controllers/gateway")

const api = express.Router()

// Endpoints
api.post("/pay", GatewayController.pay)
api.post("/reimburse", GatewayController.reimburse)

module.exports = api
