'use client';

import React from 'react'
import { useForm } from 'react-hook-form'

import { Button, Label, TextInput } from 'flowbite-react';

function RegisterPage() {

  const { register, handleSubmit } = useForm()

  return (
    <>
      <form onSubmit={handleSubmit((values) => {
        console.log(values)
      })} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name2" value="Nombre" />
          </div>
          <TextInput type="text" {...register('name', { require: true })} className="mb-2 block" placeholder='Juan' />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastname2" value="Apellido" />
          </div>
          <TextInput type="text" {...register('lastname', { required: true })} placeholder='Pérez' />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone2" value="Telefono" />
          </div>
          <TextInput type='number' {...register('phone', { required: true })} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Email" />
          </div>
          <TextInput type="email" {...register('email', { required: true })} placeholder='mejor@precio.com' />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput type="password" {...register('password', { required: true })} placeholder='******' minLength={8} />
        </div>


        <Button type='submit'>
          Registrarse
        </Button>
      </form>
    </>
  )
}

export default RegisterPage