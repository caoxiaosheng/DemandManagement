var host ="uwant.top";

var config={
  loginUrl: `https://${host}/api/login`,
  bindUrl: `https://${host}/api/bind`,
  getActiveDemandsUrl: `https://${host}/api/getactivedemands`,
  getEndDemandsUrl: `https://${host}/api/getenddemands`,
  getAllUsersUrl: `https://${host}/api/getallusers`,
  getAllCustomersUrl: `https://${host}/api/getallcustomers`,
  addDemandUrl: `https://${host}/api/adddemand`,
}

module.exports = config