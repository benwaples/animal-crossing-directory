import React, { useState, useEffect } from 'react'
import { getVillagers } from '../../../services/villager-api'
import { VillagerList } from '../../presentation/VillagerList/VillagerList'

export const VillagerDirectory: React.FC = () => {
  const [villagers, setVillagers ] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getVillagers()
      .then(villagers => setVillagers(villagers))
      .finally(() => setLoading(false))
  }, [])
  
  if(loading) return <h1>Loading...</h1>
  return (
    <>
    <VillagerList villagers={villagers}/>
    </>
  )
}