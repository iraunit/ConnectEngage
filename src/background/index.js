import { CHECK_AUTH_STATUS_COMMAND, EXPIRY, TOKEN, UUID } from '../util/constants'

function DeleteAuthData(callback) {
  chrome.storage.local.remove([TOKEN, EXPIRY], function () {
    if (chrome.runtime.lastError) {
      console.error('Error removing data:', chrome.runtime.lastError)
      callback(false)
    } else {
      callback(true)
    }
  })
}

function checkAuthenticationStatus(callback) {
  chrome.storage.local.get([UUID, TOKEN, EXPIRY], function (result) {
    if (result[UUID] && result[TOKEN] && result[EXPIRY]) {
      const targetDateTime = new Date(result[EXPIRY])
      const currentDateTime = new Date()
      if (currentDateTime < targetDateTime) {
        callback(true)
      } else {
        DeleteAuthData()
        callback(false)
      }
    } else callback(false)
  })
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command === CHECK_AUTH_STATUS_COMMAND) {
    checkAuthenticationStatus(function (isAuthenticated) {
      sendResponse(isAuthenticated)
    })
    return true
  }
})
