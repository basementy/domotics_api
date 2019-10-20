const fs = require('fs')
const ledStatusPath = 'src/database/status.json'

var loadLedStatus = () => {
  var data = fs.readFileSync(ledStatusPath, 'utf8')
  var status = JSON.parse(data)

  return status
}

var getStatus = () => {
  var ledStatus = loadLedStatus()
  return ledStatus
}

var saveStatus = () => {
  var currentlyStatus = getStatus()
  var newStatus = currentlyStatus ? true : false
  var updatedStatus = { status: newStatus }

  fs.writeFileSync(ledStatusPath, updatedStatus, 'utf8')
}

module.exports = {
  getStatus : getStatus,
  saveStatus : saveStatus
}