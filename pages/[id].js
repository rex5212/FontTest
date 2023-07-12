import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { mask, unmask } from 'remask'
import BasePage from '../components/BasePage'
import eventosValidator from '../validators/evento'

const id = () => {
    
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {

        if (query.id) {
            axios.get("/api/" + query.id).then(resultado => {
                const objectData = resultado.data
                console.log(objectData)

                for (let atributo in objectData) {
                    setValue(atributo, objectData[atributo])
                }
            })

        }
    }, [query.id])

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        let Mascara = event.target.getAttribute('mask')
        if (Mascara == 'data'){
            Mascara = ['99/99/99', '99/99/9999']
            setValue(name, mask(unmask(value), Mascara))
        }
    }

    function modificar(dados) {
        axios.put("/api/" + dados.id, dados)
        push("/")
    }
  return (
    <BasePage>
            <Form>
                <Form.Group className="mb-3" controlId="evento">
                    <Form.Label>Evento</Form.Label>
                    <Form.Control type="text" isInvalid={errors.evento} mask='evento' placeholder="evento" {...register('evento', eventosValidator.Evento)} onChange={handleChange}/>
                    {errors.evento && <small className='text-danger'>{errors.evento.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="descricao" isInvalid={errors.descricao} mask='descricao' {...register('descricao', eventosValidator.Descricao)} onChange={handleChange}/>
                    {errors.descricao && <small className='text-danger'>{errors.descricao.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data</Form.Label>
                    <Form.Control type="text" placeholder="data" isInvalid={errors.data} mask='data' {...register('data', eventosValidator.Data)} onChange={handleChange}/>
                    {errors.data && <small className='text-danger'>{errors.data.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="localidade">
                    <Form.Label>Localidade</Form.Label>
                    <Form.Control type="text" placeholder="localidade" isInvalid={errors.localidade} mask='localidade' {...register('localidade', eventosValidator.Localidade)} onChange={handleChange}/>
                    {errors.localidade && <small className='text-danger'>{errors.localidade.message}</small>}
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit(modificar)}>
                    Alterar
                </Button>
            </Form>
        </BasePage>
  )
}

export default id