import React, { useState, useEffect } from 'react';


export default function App() {
  // setRepositories atualia o valor de useState, repositories é oq tem o valor 
  // const [repositories, setRepositories] = useState([])



  // Carregar um informação assim que o componente for montado em tela (did mount)
  // Vai ser montada uma vez nesse caso, ou seja (deixar array vazio, pois será montada 1 vez apenas)
  // useEffect(() => {
  //   async function getRepositories() {
  //     const response = await fetch('https://api.github.com/users/juliomchado/repos')
  //     const data = await response.json()

  //     setRepositories(data)
  //   }
  //   getRepositories()
  // }, [])


  // function handleFavorite(id) {
  //   const newRepositories = repositories.map(repo => {
  //     return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
  //   })

  //   setRepositories(newRepositories)
  // }

  // useEffect(() => {
  //   const filtered = repositories.filter(repo => repo.favorite)

  //   document.title = `Você tem ${filtered.length} favoritos`

  // }, [repositories])


  // quando repositories ou as variáveis que estiverem ali mudar, ele será disparado
  // useEffect(() => {

  // }, [repositories])


  // Ouvir algum evento de algum lugar 
  const [location, setLocation] = useState({})

  useEffect(() => {

    const watchId = navigator.geolocation.watchPosition(handlePositionReceived)
    
    // Codigo executa quando o componente deixa de existir will amount
    return () => navigator.geolocation.clearWatch(watchId)

  }, [])

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords

    setLocation({ latitude, longitude })
  }





  return (
    <>
      Latitude: {location.latitude} <br />
     Longitude: {location.longitude}
    </>

  );
}

