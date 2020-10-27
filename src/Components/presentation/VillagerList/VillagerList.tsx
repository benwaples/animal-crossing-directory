import React from 'react'
// import styles from './VillagerList.css'
import { Villager } from '../Villager/Villager'

type Props = {
  villagers: {
    _id: string,
    name: string;
    imageUrl: string;
  }[];
}

export const VillagerList = ({ villagers }: Props) => {
  console.log(villagers)
  const villagerElements = villagers.map(villager => <Villager key={villager.name} { ...villager }/>)

  return (
    <div>
      {villagerElements}
    </div>
  )
}
