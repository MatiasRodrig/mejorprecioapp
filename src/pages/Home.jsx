import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


function Home() {
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
                    <h1>Bienvenido a MejorPrecioApp</h1>
                    <p className='mt-10'>Desde MejorPrecio creemos que el precio de todos los productos en la economia lo definen los consumidores. Por eso, para ejercer ese poder, hemos decidido crear un sistema en el cual los consumidores publican los precios que se encuentran en los distintos comercios de San Vicente. Así toda la comunidad va a poder elegir cual es mejor y así ahorrar cada centavo que vea necesario. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
