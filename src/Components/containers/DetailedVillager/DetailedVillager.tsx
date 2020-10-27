import React, { useEffect, useState } from 'react'
import { getVillager } from '../../../services/villager-api'

type Props = {
  match: { params: { _id: string}}
}

export const DetailedVillager: React.FC<Props> = ({match}) => {
  const [villager, setVillager] = useState({})
  const id: string = match.params._id

  useEffect(() => {
    getVillager(id.substr(1))
      .then(villager => setVillager(villager))
  }, [])

  return (
    <div>
      
    </div>
  )
}
