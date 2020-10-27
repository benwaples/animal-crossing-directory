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

  return fetch(`https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/villagers${id}`, requestParam)
    .then(res => res.json())
    .then(json => json.map((villager: { _id: any; name: any; image: any; }) => ({
      _id: villager._id,
      name: villager.name,
      imageUrl: villager.image
    })));
}