'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiLogin, HiLogout } from 'react-icons/hi';
import Icon from '../assets/icon.svg'
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom'

function SidebarComponent() {

    const { logout } = useAuth()

    return (
        <div>
            <Sidebar aria-label="Sidebar with logo branding example">
                <Sidebar.Logo href="#" img={Icon} imgAlt="Flowbite logo">
                    MejorPrecio
                </Sidebar.Logo>
                <Sidebar.Items>

                    <Sidebar.ItemGroup>

                        <Link to='/'>
                            <Sidebar.Item icon={HiChartPie}>
                                Inicio
                            </Sidebar.Item>
                        </Link>

                        <Link to=''>
                            <Sidebar.Item icon={HiViewBoards}>
                                Precios
                            </Sidebar.Item>
                        </Link>

                        <Link to=''>
                            <Sidebar.Item  icon={HiInbox}>
                                Mercados
                            </Sidebar.Item>
                        </Link>

                        <Link>
                            <Sidebar.Item  icon={HiUser}>
                                Ventas en Colonias
                            </Sidebar.Item>
                        </Link>

                        <Link to=''>
                            <Sidebar.Item icon={HiShoppingBag}>
                                Productos
                            </Sidebar.Item>
                        </Link>

                        <Link to='/register'>
                            <Sidebar.Item icon={HiTable}>
                                Registarse
                            </Sidebar.Item>
                        </Link>

                        <Link to='/login'>
                            <Sidebar.Item icon={HiLogin}>
                                Iniciar Sesión
                            </Sidebar.Item>
                        </Link>

                        <Link to='/'  >
                            <Sidebar.Item onClick={() => logout()} icon={HiLogout}>
                                Cerrar Sesión
                            </Sidebar.Item>
                        </Link>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
}

export default SidebarComponent
