import React from 'react';
import { FaTrophy } from "react-icons/fa";
import { dummyUser } from '../assets/assets';

const PlayerCard = ({ player, isManual }) => {
  return (
    isManual ? <div className="max-w-60 mx-auto w-full rounded-2xl overflow-hidden shadow-lg p-4 bg-slate-50 border border-gray-200 text-center">
      <img className="w-32 h-32 mx-auto rounded-full" src={dummyUser} alt={player.name} />
      <h2 className="text-xl font-bold mt-4">{player.name.charAt(0).toUpperCase() + player.name.substring(1).toLowerCase() }</h2>
      <div className="flex items-center justify-center gap-1 text-gray-700">
        <FaTrophy />
      <p className="">{player.score}</p>
      </div>
    </div> : <div className="max-w-60 mx-auto w-full rounded-2xl overflow-hidden shadow-lg p-4 bg-slate-50 border border-gray-200 text-center">
      <img className="w-32 h-32 mx-auto rounded-full" src={player.image_path || player.img} alt={player.fullname || player.name} />
      <h2 className="text-xl font-bold mt-4">{player.fullname || player.name}</h2>
      <p className="text-gray-700">{player?.position?.name}</p>
      <p className="mt-2"><span className="font-semibold">DOB:</span> {player.dateofbirth}</p>
      <p><span className="font-semibold">Batting Style:</span> {player.battingstyle}</p>
      <p><span className="font-semibold">Bowling Style:</span> {player.bowlingstyle}</p>
    </div>
  );
};

export default PlayerCard;
