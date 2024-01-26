'use client';

import React from 'react'
import { useForm } from 'react-hook-form'
import {registerRequest} from '../api/auth'
import { Button, Label, TextInput } from 'flowbite-react';

function RegisterComponent() {

  const { register, handleSubmit } = useForm()

  return (
    <>
      <form onSubmit={handleSubmit(async (values) => {
        console.log(values)
        const res = await registerRequest(values)
        console.log(res)
      })} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label value="Nombre" />
          </div>
          <TextInput type="text" {...register('nombre', { require: true })} className="mb-2 block" placeholder='Juan' />
        </div>

        <div>
          <div className="mb-2 block">
            <Label value="Apellido" />
          </div>
          <TextInput type="text" {...register('apellido', { required: true })} placeholder='Pérez' />
        </div>

        <div>
          <div className="mb-2 block">
            <Label value="Telefono" />
          </div>
          <TextInput type='number' {...register('telefono', { required: true })} placeholder='3755123456' />
        </div>

        <div>
          <div className="mb-2 block">
            <Label value="Email" />
          </div>
          <TextInput type="email" {...register('email', { required: true })} placeholder='mejor@precio.com' />
        </div>

        <div>
          <div className="mb-2 block">
            <Label value="Your password" />
          </div>
          <TextInput type="password" {...register('password', { required: true })} placeholder='a-z, una mayuscula, un número' minLength={8} />
        </div>


        <Button type='submit'>
          Registrarse
        </Button>
      </form>
    </>
  )
}

export default RegisterComponent