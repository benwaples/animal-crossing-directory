import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <Link to="/villagers">See All Villagers</Link>
      <h1>Animal Crossing Directory</h1> 
    </div>
  )
}
