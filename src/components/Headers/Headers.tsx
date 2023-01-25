import React from 'react'
import './Headers.scss'
import {NavLink} from 'react-router-dom'

function Headers() {
  function ToGithub(){
    window.open('https://github.com/donnie3237','_blank')
  }
  return (
    <div className="Headers">
        <div className="logo flex">
            <div className="text flex"><NavLink className='flex' to='/'>DOSE</NavLink></div>
        </div>
        <div className="nav flex">
            <NavLink to='/products' className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
            </svg>
            <h2>
              Product
            </h2>
            </NavLink>
            <NavLink to='/javascript' className='flex'>
              <img src={require('./img/js.png')} alt="" />
              <h2>JS&TS</h2>
              </NavLink>
            <NavLink to='/rust' className='flex'>
            <svg fill="#ffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.763 12.291c0.099-0.098 0.235-0.159 0.385-0.159 0.301 0 0.545 0.244 0.545 0.545s-0.244 0.545-0.545 0.545c-0.301 0-0.545-0.244-0.545-0.545 0-0.15 0.061-0.286 0.159-0.385v0zM15.342 3.906c0.163-0.171 0.392-0.278 0.647-0.278 0.493 0 0.892 0.399 0.892 0.892s-0.399 0.892-0.892 0.892c-0.413 0-0.76-0.28-0.862-0.661l-0.001-0.006c-0.018-0.068-0.029-0.145-0.029-0.225 0-0.238 0.093-0.454 0.245-0.614l-0 0zM26.965 15.901c0 0.273-0.010 0.545-0.030 0.814h-1.125c-0.112 0-0.158 0.073-0.158 0.185v0.516c0 1.216-0.686 1.48-1.287 1.547-0.572 0.065-1.206-0.239-1.284-0.589-0.089-1.265-0.773-2.353-1.772-2.994l-0.015-0.009c1.206-0.593 2.062-1.736 2.246-3.093l0.002-0.021c-0.049-1.229-0.72-2.29-1.705-2.884l-0.016-0.009c-0.667-0.438-1.472-0.719-2.339-0.773l-0.014-0.001h-11.63c1.569-1.749 3.678-2.987 6.063-3.45l0.069-0.011 1.371 1.438c0.148 0.155 0.356 0.252 0.587 0.252 0.218 0 0.415-0.086 0.561-0.226l-0 0 1.533-1.467c3.233 0.622 5.913 2.593 7.475 5.291l0.028 0.053-1.050 2.372c-0.044 0.097-0.069 0.21-0.069 0.329 0 0.329 0.195 0.613 0.477 0.742l0.005 0.002 2.022 0.898c0.035 0.359 0.053 0.721 0.053 1.089zM13.522 14.044v-2.063h3.699c0.191 0 1.349 0.221 1.349 1.087 0 0.719-0.888 0.977-1.618 0.977zM5.106 14.723l1.918-0.853c0.287-0.13 0.483-0.413 0.483-0.742 0-0.12-0.026-0.233-0.072-0.335l0.002 0.005-0.395-0.893h1.554v7.001h-3.134c-0.266-0.899-0.418-1.931-0.418-3 0-0.417 0.023-0.829 0.069-1.234l-0.005 0.050zM6.15 12.247c-0-0.295-0.239-0.534-0.534-0.534s-0.534 0.239-0.534 0.534c0 0.295 0.239 0.534 0.534 0.534s0.534-0.239 0.534-0.534v0zM9.548 26.027c-0.061 0.015-0.13 0.023-0.202 0.023-0.493 0-0.892-0.399-0.892-0.892s0.399-0.892 0.892-0.892c0.493 0 0.892 0.399 0.892 0.892 0 0.096-0.015 0.189-0.043 0.276l0.002-0.006c-0.097 0.3-0.34 0.526-0.643 0.599l-0.006 0.001zM21.937 23.178c-0.051-0.012-0.11-0.018-0.171-0.018-0.388 0-0.713 0.273-0.792 0.638l-0.001 0.005-0.447 2.085c-1.329 0.615-2.884 0.974-4.523 0.974-1.675 0-3.263-0.375-4.684-1.046l0.067 0.028-0.447-2.085c-0.080-0.369-0.404-0.642-0.792-0.642-0.061 0-0.12 0.007-0.177 0.019l0.005-0.001-1.841 0.395c-0.332-0.341-0.644-0.707-0.931-1.093l-0.021-0.029h8.957c0.101 0 0.169-0.018 0.169-0.11v-3.169c0-0.092-0.067-0.11-0.169-0.11h-2.62v-2.009h2.834c0.881 0.009 1.607 0.656 1.741 1.5l0.001 0.010c0.113 0.441 0.359 1.88 0.529 2.34 0.168 0.516 0.854 1.547 1.585 1.547h4.463c0.058-0.001 0.114-0.007 0.168-0.017l-0.006 0.001c-0.326 0.44-0.658 0.828-1.016 1.192l0.001-0.001zM22.365 26.070c1.13-0 2.046-0.917 2.046-2.047s-0.916-2.047-2.047-2.047-2.047 0.916-2.047 2.047c0 1.13 0.916 2.046 2.046 2.047h0zM30.789 15.629l-1.259-0.779q-0.016-0.184-0.035-0.367l1.082-1.008c0.084-0.079 0.136-0.192 0.136-0.316 0-0.184-0.115-0.342-0.277-0.406l-0.003-0.001-1.383-0.517q-0.051-0.179-0.109-0.357l0.863-1.198c0.051-0.070 0.082-0.158 0.082-0.253 0-0.215-0.156-0.393-0.361-0.427l-0.003-0-1.458-0.237q-0.085-0.165-0.176-0.328l0.612-1.345c0.025-0.053 0.039-0.114 0.039-0.18 0-0.090-0.027-0.173-0.075-0.242l0.001 0.001c-0.079-0.117-0.212-0.193-0.362-0.193-0.005 0-0.010 0-0.015 0l0.001-0-1.48 0.052q-0.114-0.144-0.234-0.283l0.34-1.441c0.007-0.030 0.011-0.064 0.011-0.099 0-0.24-0.194-0.434-0.434-0.434-0.035 0-0.069 0.004-0.102 0.012l0.003-0.001-1.441 0.34q-0.141-0.119-0.285-0.234l0.052-1.48c0-0.006 0-0.013 0-0.021 0-0.238-0.193-0.43-0.43-0.43-0.066 0-0.129 0.015-0.185 0.042l0.003-0.001-1.345 0.614c-0.109-0.059-0.218-0.119-0.328-0.176l-0.238-1.459c-0.036-0.207-0.215-0.362-0.429-0.362-0.094 0-0.182 0.030-0.253 0.081l0.001-0.001-1.199 0.863q-0.177-0.057-0.357-0.107l-0.517-1.383c-0.064-0.165-0.222-0.28-0.407-0.28-0.124 0-0.236 0.052-0.316 0.136l-0 0-1.008 1.083q-0.183-0.021-0.367-0.035l-0.779-1.259c-0.078-0.124-0.213-0.205-0.368-0.205s-0.291 0.081-0.367 0.204l-0.001 0.002-0.779 1.259q-0.184 0.016-0.367 0.035l-1.010-1.083c-0.079-0.085-0.192-0.138-0.317-0.138-0.185 0-0.343 0.116-0.405 0.279l-0.001 0.003-0.517 1.383c-0.12 0.034-0.238 0.071-0.357 0.107l-1.198-0.863c-0.070-0.050-0.157-0.080-0.252-0.080-0.215 0-0.393 0.155-0.429 0.36l-0 0.003-0.238 1.459q-0.165 0.085-0.328 0.176l-1.345-0.614c-0.053-0.025-0.115-0.039-0.18-0.039-0.239 0-0.433 0.194-0.433 0.433 0 0.006 0 0.012 0 0.017l-0-0.001 0.052 1.48q-0.144 0.114-0.285 0.234l-1.441-0.341c-0.030-0.007-0.064-0.011-0.099-0.011-0.24 0-0.434 0.194-0.434 0.434 0 0.035 0.004 0.069 0.012 0.102l-0.001-0.003 0.339 1.441c-0.078 0.094-0.157 0.189-0.233 0.283l-1.48-0.052c-0.005-0-0.011-0-0.017-0-0.239 0-0.433 0.194-0.433 0.433 0 0.065 0.014 0.127 0.040 0.183l-0.001-0.003 0.614 1.345q-0.091 0.162-0.176 0.328l-1.457 0.237c-0.207 0.036-0.362 0.214-0.362 0.429 0 0.094 0.030 0.182 0.081 0.253l-0.001-0.001 0.863 1.198q-0.056 0.178-0.109 0.357l-1.383 0.517c-0.165 0.064-0.28 0.222-0.28 0.407 0 0.124 0.052 0.236 0.135 0.316l0 0 1.082 1.008q-0.021 0.183-0.035 0.367l-1.259 0.779c-0.125 0.077-0.208 0.213-0.208 0.368s0.082 0.292 0.206 0.367l0.002 0.001 1.259 0.779c0.010 0.123 0.023 0.245 0.035 0.367l-1.082 1.010c-0.085 0.079-0.138 0.192-0.138 0.317 0 0.185 0.116 0.343 0.279 0.405l0.003 0.001 1.383 0.517c0.034 0.12 0.071 0.239 0.109 0.357l-0.863 1.198c-0.052 0.070-0.083 0.159-0.083 0.254 0 0.215 0.158 0.394 0.364 0.426l0.002 0 1.457 0.237c0.057 0.11 0.115 0.219 0.176 0.328l-0.614 1.345c-0.025 0.053-0.039 0.115-0.039 0.18 0 0.239 0.194 0.433 0.433 0.433 0.006 0 0.012-0 0.017-0l-0.001 0 1.479-0.052c0.077 0.096 0.154 0.191 0.234 0.285l-0.339 1.442c-0.007 0.030-0.011 0.064-0.011 0.099 0 0.239 0.194 0.433 0.433 0.433 0.036 0 0.070-0.004 0.103-0.012l-0.003 0.001 1.441-0.339c0.094 0.080 0.189 0.157 0.285 0.233l-0.052 1.48c-0 0.006-0 0.012-0 0.019 0 0.238 0.193 0.43 0.43 0.43 0.066 0 0.129-0.015 0.185-0.042l-0.003 0.001 1.345-0.612c0.109 0.061 0.218 0.119 0.328 0.176l0.238 1.457c0.036 0.207 0.214 0.363 0.429 0.363 0.094 0 0.181-0.030 0.253-0.081l-0.001 0.001 1.198-0.863q0.178 0.057 0.357 0.109l0.517 1.383c0.062 0.167 0.22 0.283 0.405 0.283 0.125 0 0.238-0.053 0.317-0.139l0-0 1.010-1.082c0.121 0.014 0.244 0.025 0.367 0.037l0.779 1.259c0.078 0.123 0.214 0.204 0.368 0.204s0.29-0.081 0.367-0.203l0.001-0.002 0.779-1.259c0.123-0.011 0.245-0.023 0.367-0.037l1.008 1.082c0.079 0.084 0.192 0.136 0.316 0.136 0.184 0 0.342-0.115 0.406-0.277l0.001-0.003 0.517-1.383q0.179-0.051 0.357-0.109l1.198 0.863c0.070 0.052 0.159 0.083 0.254 0.083 0.215 0 0.394-0.158 0.426-0.364l0-0.002 0.238-1.457c0.11-0.057 0.219-0.116 0.328-0.176l1.345 0.612c0.052 0.024 0.114 0.038 0.179 0.038 0.24 0 0.434-0.194 0.434-0.434 0-0.005-0-0.009-0-0.014l0 0.001-0.052-1.48q0.144-0.113 0.283-0.233l1.441 0.339c0.030 0.007 0.064 0.011 0.098 0.011 0.24 0 0.434-0.194 0.434-0.434 0-0.035-0.004-0.068-0.012-0.1l0.001 0.003-0.339-1.442c0.078-0.094 0.157-0.188 0.233-0.285l1.48 0.052c0.006 0 0.013 0 0.020 0 0.238 0 0.43-0.193 0.43-0.43 0-0.066-0.015-0.129-0.042-0.185l0.001 0.003-0.612-1.345c0.059-0.109 0.119-0.218 0.176-0.328l1.457-0.237c0.207-0.036 0.362-0.215 0.362-0.429 0-0.094-0.030-0.182-0.081-0.253l0.001 0.001-0.863-1.198 0.109-0.357 1.383-0.517c0.166-0.063 0.282-0.221 0.282-0.406 0-0.125-0.053-0.238-0.138-0.317l-0-0-1.082-1.010c0.013-0.121 0.025-0.244 0.035-0.367l1.259-0.779c0.125-0.077 0.208-0.213 0.208-0.368s-0.082-0.291-0.206-0.367l-0.002-0.001z"></path>
            </svg>
              <h2>
                Rust
              </h2>
              </NavLink>
            <NavLink to='/matlab' className='flex'>
              <img src={require('./img/Matlab_Logo.png')} alt="" />
              <h2>Matlab</h2>
              
              </NavLink>
        </div>
        <div className="git flex" onClick={ToGithub}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </div>
    </div>
  )
}

export default Headers