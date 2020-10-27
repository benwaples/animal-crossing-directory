export const getVillagers = () => {
  const requestParam: object = {
    header: { Origin: null}
  }

  return fetch('https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/villagers', requestParam)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      return json
    })
    .then(json => json.map((villager: { _id: any; name: any; image: any; }) => ({
      _id: villager._id,
      name: villager.name,
      imageUrl: villager.image
    })));
}

export const getVillager = (id: string) => {
  const requestParam: object = {
    header: { Origin: null}
  }

  return fetch(`https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/villagers/${id}`, requestParam)
    .then(res => res.json())
    .then(villager => ({
      name: villager.name,
      image: villager.image,
      personality: villager.personality,
      species: villager.species,
      birthday: villager.birthday,
      skill: villager.skill,
      quote: villager.quote
    }))
   
}