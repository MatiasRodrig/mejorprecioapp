import React from 'react'
import Register from "../components/RegisterComponent"

function RegisterPage() {
  return (
    <>
            <div className="flex justify-end">
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <div className="md:hidden">
                        <Navbar />
                    </div>
                    <Register/>
                </div>
            </div>
        </>
  )
}

export default RegisterPage