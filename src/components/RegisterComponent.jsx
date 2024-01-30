'use client';

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Label, TextInput, Alert } from 'flowbite-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function RegisterComponent() {
  ;
  const { register, handleSubmit, formState: {
    errors
  } } = useForm();
  const { signUp, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/perfil')
    }
  }, [isAuthenticated])

  return (
    <>

      <div className='w-full flex justify-center items-center'>


        <form onSubmit={handleSubmit(async (values) => {
          console.log(values)
          signUp(values)
        })} className="w-4/6 flex justify-center items-center flex-col my-5 rounded-md">
          <div className='w-6/12 mt-5'>
            <div className="mb-2 block">
              <Label value="Nombre" />
            </div>
            <TextInput type="text" {...register('nombre', { required: true })} className="px-50 bg-blue-800 border-2 border-blue-400 rounded-md" placeholder='Juan' />
          </div>

          {errors.nombre && (
            <Alert color='failure' className='p-1'> Nombre es requerido </Alert>
          )}

          <div className='w-6/12 mt-5'>
            <div className="mb-2 block">
              <Label value="Apellido" />
            </div>
            <TextInput type="text" {...register('apellido', { required: true })} placeholder='Pérez' className='w-[150] bg-blue-800 border-2 border-blue-400 rounded-md ' />
          </div>

          {errors.apellido && (
            <Alert color='failure' className='p-1'> Apellido es requerido </Alert>
          )}

          <div className='w-6/12 mt-5'>
            <div className="mb-2 block">
              <Label value="Telefono" />
            </div>
            <TextInput type='number' {...register('telefono', { required: true })} placeholder='3755123456' className='bg-blue-800 border-2 border-blue-400 rounded-md' />
          </div>

          {errors.telefono && (
            <Alert color='failure' className='p-1'> Telefono es requerido </Alert>
          )}

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


          <Button type='submit' className='m-4  bg-blue-600' >
            Registrarse
          </Button>
        </form>
      </div>
    </>
  )
}

export default RegisterComponent