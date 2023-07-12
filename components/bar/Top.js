import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import axios from 'axios'

const Top = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    function Goevento(){
        push('/')
    }

  return (
    <div className='sticky-top d-flex w-100 py-3' class='bg-[#0000FF]'>
        <div className=' w-100 h-100 d-flex justify-content-between p-2'>
            <div className='w-100 h-100 d-flex '>
                <a onClick={() => (Goevento())} class='px-4 text-3xl text-[#00FF00]'>Event</a>
            </div>
        </div>
    </div>
  )
}

export default Top