import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Table from '../components/Table'


function Products() {
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
                    <Table />
                </div>
            </div>
    </>
  )
}

export default Products
