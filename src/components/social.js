import React from 'react'

export function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-2 lg:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="flex m-2 sm:justify-center sm:mt-0 align-middle">
                      <a href="https://twitter.com/iraunit" target={'_blank'}
                         className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" rel="noreferrer">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                               viewBox="0 0 20 17">
                              <path
                                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                              />
                          </svg>
                          <span className="sr-only">Twitter</span>
                      </a>
                      <a href="https://github.com/iraunit/Get-Link" target={'_blank'}
                         className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" rel="noreferrer">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                               viewBox="0 0 20 20">
                              <path
                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                              />
                          </svg>
                          <span className="sr-only">GitHub</span>
                      </a>
                      <a href="https://www.linkedin.com/in/iraunit/" target={'_blank'} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" rel="noreferrer">
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 448 512">
                              <path fill="currentColor"
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                          </svg>
                          <span className="sr-only">LinkedIn</span>
                      </a>
                      <a href="https://www.paypal.com/paypalme/shyptsolution" target={'_blank'}
                         className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"
                               viewBox="0 0 384 512">
                              <path fill="currentColor"
                                    d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
                          </svg>
                          <span className="sr-only">Paypal</span>
                      </a>
                  </div>
                  <span className="text-sm ml-2 text-gray-500 sm:text-center dark:text-gray-400">© 2025
            <a href="https://codingkaro.in/" target={'_blank'} className="hover:underline" rel="noreferrer"> Shypt Solution™ </a>. All Rights Reserved.
          </span>
              </div>
          </div>
      </footer>

    )
}