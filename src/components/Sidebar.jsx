'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Icon from '../assets/icon.svg'

function SidebarComponent() {
    return (
        <div>
            <Sidebar aria-label="Sidebar with logo branding example">
                <Sidebar.Logo href="#" img={Icon} imgAlt="Flowbite logo">
                    
                    MejorPrecio
                </Sidebar.Logo>
                <Sidebar.Items>
                    <Sidebar.ItemGroup> 
                        <Sidebar.Item href="/" icon={HiChartPie}>
                            Inicio
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Precios
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox}>
                            Mercado
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                           Ventas en Colonias
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Productos
                        </Sidebar.Item>
                        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                            Iniciar Sesión
                        </Sidebar.Item>
                        <Sidebar.Item href="/register" icon={HiTable}>
                            Registarse
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
}

export default SidebarComponent
