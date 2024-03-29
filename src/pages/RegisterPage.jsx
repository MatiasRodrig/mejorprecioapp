import React from 'react'
import Register from '../components/RegisterComponent'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function RegisterPage() {
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
                    <Register/>
                      </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default RegisterPage