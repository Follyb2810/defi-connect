import React from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import { statsData } from '../../data'

const Stats = () => {
    return (
        <section>
          <Row>
             {
                statsData.map((stats,index)=>(
                    <Col xs={12} sm={4} key={index} className='justify-content-between align-items-md-center'>
                <Stack direction='horizontal' className='w-100 justify-content-center'>
                  <img src={stats.img} alt='' className='stats'/>
                  <div>
                    <h1 className='fs-3'>{stats.h1}</h1>
                    <p className='h6'>{stats.para}</p>
                  </div>
                  
                </Stack>
             </Col>
                ))
             }
          </Row>
            
        </section>
    )
}

export default Stats
