import React from 'react'
import { Link } from 'react-router-dom'
// import styles from './Villager.css'

type Props = {
  _id: string;
  name: string;
  imageUrl: string;
}

export const Villager = ({ name, imageUrl, _id }: Props) => {
  console.log(_id)
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name}/>
      <Link to={`/villagers/:${_id}`}>Learn More</Link>
    </div>
  )
}
