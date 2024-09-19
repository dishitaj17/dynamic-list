import React from 'react'
import { Container,Card,CardBody } from 'react-bootstrap'
import Data from './component/Data'
import './App.css'

export default function App() {
  return (
    <div>
    <Container className=''>
      <nav className='nav navbar bg-primary p-5 navbar-expand-md'>
        <ul className='navbar-links'>
        <li><a href='' className='text-white fs-4'>Designer</a></li>
        <li><a href=''className='text-white fs-4'>Category</a></li>
        <li><a href=''className='text-white fs-4'>Attention</a></li>
        <li className='text-white fs-4'>Total users is :<span className='bi bi-person'></span><span className='badge badge-sm bg-danger'>{Data.length}</span></li>
        </ul>
      </nav>

      <div className='w-75 mx-auto bg-white p-5 mt-4'>
       
        {Data && Data.map((row)=>{
          return(
            <>
          <Card className='app text-white mt-5'>
          <CardBody className='p-4 mt-3'>
            <table className='table'>
              <tr>
                {/* <td>{row.id}</td> */}
                <td className='w-25'><img src={row.photo} alt='img' className='img-fluid w-75 rounded-circle' /></td>
                <td className='fs-4 text-light'>Name:{row.name}</td>
                <td className='fs-5'>Age:{row.age}</td>
                <td className='fs-5'>City:{row.city}</td>
                <td className='fs-5'>Contact:{row.phone}</td>
              </tr>
            </table>
          </CardBody>
        </Card>
     
            </>
          )
        })}   
      
      
      </div>

    </Container>
      
    </div>
  )
}