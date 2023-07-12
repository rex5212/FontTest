import React from 'react'
import { Container } from 'react-bootstrap'
import Bottom from './bar/Bottom'
import Top from './bar/Top'

const BasePage = (props) => {
  return (
    <div>
      <Top />
      <div class='py-3'>
        <Container>
          {props.children}
        </Container>
      </div>
      {/* <div className='fixed-bottom position-sticky-bottom'>
        <Bottom />
      </div> */}
    </div>
  )
}

export default BasePage