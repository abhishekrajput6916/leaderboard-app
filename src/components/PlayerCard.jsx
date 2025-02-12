import React from 'react';

const PlayerCard = ({player}) => {
  return (
    <div className="max-w-72 mx-auto w-full rounded-2xl overflow-hidden shadow-lg p-4 bg-white text-center">
      <img className="w-32 h-32 mx-auto rounded-full" src={player.image_path  || player.img} alt={player.fullname || player.name } />
      <h2 className="text-xl font-bold mt-4">{player.fullname || player.name}</h2>
      <p className="text-gray-600">{player?.position?.name}</p>
      <p className="mt-2"><span className="font-semibold">DOB:</span> {player.dateofbirth}</p>
      <p><span className="font-semibold">Batting Style:</span> {player.battingstyle}</p>
      <p><span className="font-semibold">Bowling Style:</span> {player.bowlingstyle}</p>
    </div>
  );
};

export default PlayerCard;
