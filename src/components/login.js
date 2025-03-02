import React, { useEffect, useState } from 'react'
import logo from '../icons/shypt-solution-logo.png'
import {
  APP_NAME,
  CHECK_AUTH_STATUS_COMMAND,
  LOGIN_URL,
  SAVE_CREDENTIALS_COMMAND,
  SIGNUP_URL,
} from '../util/constants'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const openLink = () => {
    window.open(SIGNUP_URL, '_blank')
  }

  useEffect(() => {
    const handleResponse = (response) => {
      if (response === true) {
        navigate('/')
      }
    }
    chrome.runtime.sendMessage(
      { command: CHECK_AUTH_STATUS_COMMAND },
      handleResponse,
    )
  }, [navigate])

  const signIn = async (e) => {
    e.preventDefault()

    if (email && password) {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          appname: APP_NAME,
        }),
      })

      const data = await response.json()
      if (response.status === 200) {
        const handleResponse = (response) => {
          if (response === true) {
            navigate('/')
          }
        }

        chrome.runtime.sendMessage(
          {
            command: SAVE_CREDENTIALS_COMMAND,
            data: {
              uuid: data.result.uuid,
              token: data.result.token,
              expiry: data.result.expires,
              email: email,
            },
          },
          handleResponse,
        )
      } else if (response.status === 401) {
        alert('Wrong email/password')
      } else if (response.status === 403) {
        alert('Email not verified. Please visit codingkaro.in and login once.')
      } else {
        alert(data.message)
      }
    } else {
      alert('Please enter email and password')
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={signIn} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <span
              onClick={openLink}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Sign Up Now
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
