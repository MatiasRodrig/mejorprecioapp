'use client';

import { Button, Navbar } from 'flowbite-react';

function NavbarComponent() {
    return (
        <Navbar fluid rounded className='w-full' >
            <div className="flex md:order-2">
                <Navbar.Toggle />
                <Button>Agregar Producto</Button>
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Inicio
                </Navbar.Link>
                <Navbar.Link href="#">Info</Navbar.Link>
                <Navbar.Link href="#">Servicios</Navbar.Link>
                <Navbar.Link href="#">Precios</Navbar.Link>
                <Navbar.Link href="#">Contacto</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent