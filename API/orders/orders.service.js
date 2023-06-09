const bcrypt = require("bcryptjs");
const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.Orders.findAll();
}

async function getById(id) {
  return await getUser(id);
}

async function create(params) {
  // validate
  if (await db.Orders.findOne({ where: { orderNumber: params.orderNumber } })) {
    throw 'Order "' + params.orderNumber + '" is already registered';
  }

  const order = new db.Orders(params);

  // save order
  await order.save();
}

async function update(id, params) {
  const orders = await getUser(id);

  // copy params to orders and save
  Object.assign(orders, params);
  await orders.save();

  return orders.get();
}

async function _delete(id) {
  const orders = await getUser(id);
  await orders.destroy();
}

// helper functions

async function getUser(id) {
  const orders = await db.Orders.findByPk(id);
  if (!orders) throw "Orders not found";
  return orders;
}

