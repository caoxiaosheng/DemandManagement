var host ="localhost:13588";

var config={
  loginUrl: `http://${host}/api/login`,
  bindUrl: `http://${host}/api/bind`,
  getActiveDemandsUrl: `http://${host}/api/getactivedemands`,
  getAllUsersUrl: `http://${host}/api/getallusers`,
  getAllCustomersUrl: `http://${host}/api/getallcustomers`,
  addDemandUrl: `http://${host}/api/adddemand`,
}

module.exports = config