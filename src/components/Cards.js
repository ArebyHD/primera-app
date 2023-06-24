import React from 'react'
import imagen2 from '../assets/11.png'
import imagen1 from '../assets/22.png'
import imagen3 from '../assets/33.png'
import Card from './Card'
const cards = [
    {
        id:1,
        title: 'Llega a leyenda en CODM',
        image: imagen1,
        instructor: "Adrian Meza"
    },
    {
        id:2,
        title: 'Aprende a tener más seguidores',
        image: imagen2,
        instructor: "Evelyn Pacheco"
    },
    {
        id:3,
        title : 'Nuevo Pase',
        image: imagen3,
        instructor: 'Victor Duran'
    }
]

export default function Cards() {
  console.log(cards)
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
      
        <div className='row'>
          
            {
              
              cards.map(c=>(
                <div className='col-md-4' key={cards.id}>
                  
                  <Card
                  key={c.id}
                  id={c.id}
                  title = {c.title}
                  image= {c.image}
                  instructor = {c.instructor}
                  />
                  </div>
              ))
            }
        </div>
    </div>
  )
}