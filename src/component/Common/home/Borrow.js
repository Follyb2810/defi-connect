import React from 'react'
import Template from './../../Shared/Template'
import { BorrowData } from '../../data'

const Borrow = () => {
    const {title,para,img} = BorrowData
    return (
        <Template title={title} para={para}>
          <section>
            <img src={img} alt='' className='img-fluid'/>
          </section>  
        </Template>
    )
}

export default Borrow
