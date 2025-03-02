import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CHECK_AUTH_STATUS_COMMAND } from '../util/constants'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleResponse = (response) => {
      if (response === false) {
        navigate('/login')
      }
    }
    chrome.runtime.sendMessage(
      { command: CHECK_AUTH_STATUS_COMMAND },
      handleResponse,
    )
  }, [navigate])

  return <div>Home</div>
}

export default Home
