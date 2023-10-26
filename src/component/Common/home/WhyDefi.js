import React from 'react'
import Template from './../../Shared/Template'
import { whyDefiContent, whyDefiData } from '../../data'
import { Card, Col, Row, Stack } from 'react-bootstrap'

const WhyDefi = () => {
    const {title,para,img,img1,img2} = whyDefiData
    return (
        <Template title={title} para={para} className='whyDefi'>
          <Card className='shadow-lg'>
           <Row className='align-items-center'>
             <Col sm={12} md={4} className=' '>
               <section className='d-flex flex-row justify-content-center flex-md-column '>
                <img src={img1} className='whyDefiImage' alt=''/>
                <img src={img2} className='whyDefiImage' alt=''/>
               </section>
              
             </Col>
             <Col sm={12} md={8}>
                <Stack>
                   {
                    whyDefiContent.map((content,index)=>(
                      <Stack direction='horizontal' className='text-start  border-bottom border-5 p-2' key={index}>
                         <div className='w-50 text-wrap fs-5 p-2'>{content.itemFirst}</div>
                         <div className='w-25 text-center p-2 fs-4' style={{color:'green'}}> {content.itemSecond}</div>
                         <div className='w-25 text-center p-2 fs-4'>{content.itemSecond}</div>
                      </Stack>
                    ))
                   }
                </Stack>
             </Col>
           </Row>
          </Card>  
        </Template>
    )
}

export default WhyDefi
