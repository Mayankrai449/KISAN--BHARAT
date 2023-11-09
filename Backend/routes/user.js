const express = require('express')
const router = express.Router()
const {farm_data, vendor_data, prod_buy_data, prod_rent_data} = require('../controller/user')

router
  .get('/vendors', vendor_data)
  .get('/prod_buy', prod_buy_data)
  .get('/prod_rent', prod_rent_data)
  .get('/farmers', farm_data);

exports.user_router = router;