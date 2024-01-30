import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Label, TextInput, Alert } from 'flowbite-react';
import { useAuth } from '../context/AuthContext';

function LoginComponent() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { signIn, error } = useAuth();

    const onSubmit = handleSubmit(async data => {
        signIn(data)
    })


    return (
        <>
            <div className='w-full flex justify-center items-center'>

                <form onSubmit={onSubmit} className="w-4/6 flex justify-center items-center flex-col my-10">
                    <div className='w-6/12 mt-5'>
                        <div className="mb-2 block">
                            <Label value="Email" />
                        </div>
                        <TextInput type="email" {...register('email', { required: true })} placeholder='mejor@precio.com' className='bg-blue-800 border-2 border-blue-400 rounded-md' />
                    </div>

                    {errors.email && (
                        <Alert color='failure' className='p-1'> Email es requerido </Alert>
                    )}

                    <div className='w-6/12 mt-5'>
                        <div className="mb-2 block">
                            <Label value="Contraseña" />
                        </div>
                        <TextInput type="password" {...register('password', { required: true })} placeholder='a-z, una mayuscula, un número' minLength={8} className='bg-blue-800 border-2 border-blue-400 rounded-md' />
                    </div>

                    {errors.password && (
                        <Alert color='failure' className='p-1'> La contraseña es requerida </Alert>
                    )}

                    {error && <Alert>{error}</Alert>}


                    <Button type='submit' className='m-4 bg-blue-600' >
                        Iniciar Sesión
                    </Button>
                </form>
            </div>
        </>
    )
}

export default LoginComponent
