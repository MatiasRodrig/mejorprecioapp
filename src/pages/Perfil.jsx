import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Perfil() {
  return (
    <>
       <div className="flex justify-end">
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <div>
                        <Navbar />
                        
                    </div>
                    <div>
                      <h1>Perfil</h1>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Perfil
