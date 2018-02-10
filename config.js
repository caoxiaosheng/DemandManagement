var host ="localhost:13588";

var config={
  loginUrl: `http://${host}/api/login`,
  bindUrl: `http://${host}/api/bind`,
  getActiveDemandsUrl: `http://${host}/api/getactivedemands`
}

module.exports = config