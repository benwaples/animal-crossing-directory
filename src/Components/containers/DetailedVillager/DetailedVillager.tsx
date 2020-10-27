import React, { useEffect, useState } from 'react'
import { getVillager } from '../../../services/villager-api'

type Props = {
  match: { params: { _id: string}},
  name: string,
}


export const DetailedVillager: React.FC<Props> = ({match}) => {

  const [villager, setVillager] = useState({name: '',image: '',personality: '',species: '',birthday: '',skill: '',quote: ''})

  const [loading, setLoading ] = useState(true)

  const id: string = match.params._id

  useEffect(() => {
    getVillager(id)
      .then(villager => setVillager(villager))
      .finally(() => setLoading(false))
  }, [id])

  if(loading) return <h1>Loading...</h1>
  return (
    <div data-testid="detailedVillager">
      <h1>{villager.name}</h1>
      <img src={villager.image} alt={villager.name}/>
      <p><b>Personality:</b> {villager.personality}</p>
      <p><b>Species:</b> {villager.species}</p>
      <p><b>Birthday:</b> {villager.birthday}</p>
      <p><b>Skill:</b> {villager.skill}</p>
      <p><b>Quote:</b> {villager.quote}</p>
    </div>
  )
}
