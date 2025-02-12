import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { options } from '../axios/axios';
import { playersJSON } from '../assets/assets';
import PlayerCard from '../components/PlayerCard';

function PopularPlayers() {
  const [popularPlayers, setPopularPlayers] = useState(playersJSON);
  const [isLoading,setIsLoading] = useState(true);

  async function getData() {
    console.log("indide getter");
    // const response = await axios.get(BASE_URL, PPHearders);
    try {
      const response = await axios.request(options);
    console.log("Response : ",response.data);
    setPopularPlayers(response.data);
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='py-8 font-bold tracking-tight text-2xl md:text-3xl'>Popular Players</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 pb-16 px-2'>{popularPlayers.data.map(player => (
        <PlayerCard player={player} key={player.id || player.player_id}/>
      ))}</div>
    </div>
  )
}

export default PopularPlayers