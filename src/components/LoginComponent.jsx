import { React, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Alert } from 'flowbite-react';
import { useAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

function LoginComponent() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { signIn, error, isAuthenticated, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        signIn(data)
    })


    useEffect(() => {
        if (isAuthenticated && isLoggedIn) {
            navigate("/perfil");
        }
    }, [isAuthenticated]);





    return (
        <>
            <div className='w-full flex justify-center items-center'>

                <form onSubmit={onSubmit}

                    className="w-4/6 flex justify-center items-center flex-col my-10">


                    <div className='w-6/12 mt-5'>
                        <div className="mb-2 block">
                            <Label value="Email" />
                        </div>
                        <TextInput type="email" {...register('email', { required: true })} placeholder='mejor@precio.com' className=' border-blue-400 rounded-md' />
                    </div>

                    {errors.email && (
                        <Alert color='failure' className='p-1'> Email es requerido </Alert>
                    )}

                    <div className='w-6/12 mt-5'>
                        <div className="mb-2 block">
                            <Label value="Contraseña" />
                        </div>
                        <TextInput type="password" {...register('password', { required: true })} placeholder='a-z, una mayuscula, un número' minLength={8} className=' border-blue-400 rounded-md' />
                    </div>

                    {errors.password && (
                        <Alert color='failure' className='p-1'> La contraseña es requerida </Alert>
                    )}

                    {
                        Array.isArray(error) ? error.map((error, i) => (
                            <Alert color='failure' className='p-1' key={i}>{error}</Alert>
                        )) : <Alert color='failure' className='p-1'>'Error al loguearse'</Alert>
                    }


                    <Button type='submit' className='m-4 bg-blue-600' >
                        Iniciar Sesión
                    </Button>
                    <h4>
                        ¿No tenés una cuenta todavia? Registrate <NavLink to="/register">Acá</NavLink>
                    </h4>
                </form>
            </div>
        </>
    )
}

export default LoginComponent
