const $config = require('../config')
const Logger = function () {
  const logStatus = $config.logStatus
  const openView = {
    log(){},
    info(){},
    warn(){},
    error(){}
  }
  switch (logStatus) {
    case 'openLog':
      return console
    default:
      return openView
  }
}
window.$logger = new Logger()