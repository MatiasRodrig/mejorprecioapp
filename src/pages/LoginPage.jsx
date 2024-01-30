import React from 'react'
import Login from '../components/LoginComponent'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function LoginPage() {
  return (
    <>
      <div className="flex justify-end">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className='w-full'>
          <div >
            <Navbar />
            <div className='w-full flex justify-center'>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage