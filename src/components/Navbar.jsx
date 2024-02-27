'use client';

import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


function NavbarComponent() {
    return (
        <Navbar fluid rounded className='w-full' >
            <div className=" w-full flex xl:justify-end md:order-2 md:justify-around ">
                <Navbar.Toggle />
                <Button className='bg-blue-600'>
                    <Link to={'/agregarproducto'} className='text-white'>
                        Agregar Producto
                    </Link>
                </Button>
            </div>
            <Navbar.Collapse className=" md:hidden" >
                <Link>
                    <Navbar.Link active>
                        Inicio
                    </Navbar.Link>
                </Link>
                
                <Link>
                    <Navbar.Link>Info</Navbar.Link>
                </Link>

                <Link>
                    <Navbar.Link>Servicios</Navbar.Link>
                </Link>

                <Link>
                    <Navbar.Link>Precios</Navbar.Link>
                </Link>

                <Link>
                    <Navbar.Link>Contacto</Navbar.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent