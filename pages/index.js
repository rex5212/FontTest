import Head from 'next/head';
import BasePage from '../components/BasePage';
import BaseDiv from '../components/BaseDiv';
import BaseTable from '../components/BaseTable';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
import { MdOutlineChangeCircle } from 'react-icons/Md';
import { AiOutlineClose } from 'react-icons/Ai';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modify from '../components/options/Modify';
import Exclude from '../components/options/Exclude';


export default function Home() {

  const [evento, setEvento] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/').then(resultado => {
      setEvento(resultado.data)
    })
  }

  function excluir(id) {
    if (confirm("Deseja Mesmo excluir essa informação")) {
        axios.delete("/api/" + id)
        getAll()
    }

}


  return (
    <BasePage>
      <Row>
        <p className='text-white text-center px-4 pt-4'>Esse Site é uma Agenda de Eventos que vai ocorre</p>
      </Row>
      <Row>
        <BaseDiv>
          <Link href="/eventoCreate" className='btn btn-success'>Novo Evento</Link>
          <BaseTable>
            <thead >
              <tr>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Evento
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Descrição
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Data
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Localidade
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Modificar
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Excluir
                </th>
              </tr>
            </thead>
            <tbody class="divide-y opacity-100 border-[#00FF00]">
              {evento.map(item => (
                <tr>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white opacity-100	">
                    {item.evento}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white opacity-100	">
                    {item.descricao}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white opacity-100	">
                    {item.data}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white opacity-100	">
                    {item.localidade}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white opacity-100	">
                    <Link href={`/${item.id}`}>
                      <Modify />
                    </Link>
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white  opacity-100	">
                    <div onClick={() => excluir(item.id)}>
                      <Exclude />
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </BaseTable>
        </BaseDiv>
      </Row>
    </BasePage>
  )
}
