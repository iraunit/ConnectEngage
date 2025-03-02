import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../icons/icon128.png'
import { LOGOUT_COMMAND, REFRESH_COMMAND } from '../util/constants'

const Navbar = () => {
  const navigate = useNavigate()

  const Logout = () => {
    const handleResponse = (response) => {
      if (response === true) {
        navigate('/login')
      }
    }
    chrome.runtime.sendMessage({ command: LOGOUT_COMMAND }, handleResponse)
  }

  const Refresh = () => {
    chrome.runtime.sendMessage({ command: REFRESH_COMMAND })
  }

  const GoToHome = () => {
    navigate('/')
  }

  const GoToSetting = () => {
    navigate('/setting')
  }

  const GoToFiles = () => {
    navigate('/files')
  }

  const MessageMe = () => {
    chrome.tabs.create({ url: 'https://twitter.com/iraunit' })
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-row gap-x-1 mx-auto p-2">
        <a
          href="https://codingkaro.in/"
          className="flex items-center space-x-2 rtl:space-x-reverse w-full"
        >
          <img src={logo} className="h-8" alt="Get Link Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Get Link
          </span>
        </a>
        <button
          onClick={GoToHome}
          className="p-2  text-white bg-blue-700 rounded"
        >
          Home
        </button>

        <button
          className="p-2 text-white bg-blue-700 rounded"
          onClick={Refresh}
        >
          Refresh
        </button>

        <button
          onClick={GoToFiles}
          className="p-2  text-white bg-blue-700 rounded"
        >
          Files
        </button>

        <button
          onClick={GoToSetting}
          className="p-2  text-white bg-blue-700 rounded"
        >
          Settings
        </button>

        <button
          onClick={MessageMe}
          className="p-2  text-white bg-blue-700 rounded"
        >
          Help
        </button>

        <button
          onClick={Logout}
          className="p-2  text-white bg-gray-500 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
