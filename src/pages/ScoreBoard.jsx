import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePlayer } from "../redux/Slices/scoresSlice";
import { IoMdSearch } from "react-icons/io";
import { dummyUser } from "../assets/assets";
import { IoTrophyOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiUserAdd } from "react-icons/ti";

function ScoreBoard() {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  function handleSearch(e) {
    // console.log(e.target.value);
    setFilteredPlayers(
      players.filter((player) =>
        player.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }
  function handleDelete(id) {
    dispatch(removePlayer(id))
    setFilteredPlayers(players);
  }
  return (
    <>
      <div className="bg-zinc-100 py-2 px-4 flex w-full justify-between items-center">
        <div className="bg-amber-50 w-fit flex items-center py-1.5 px-4 gap-2 border=2 rounded-full border-slate-500">
          <IoMdSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Enter player name"
            className="focus:outline-none lg:text-xl"
            onChange={handleSearch}
          />
        </div>
        <Link to={'/home'} ><TiUserAdd className="text-xl lg:text-3xl lg:mx-4" /></Link>
      </div>
      {players.length ? (
        <div>
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="flex py-4 px-2 items-center justify-between bg-amber-50 border-b-2 border-slate-200 my-1 "
            >
              <div className="flex">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-12 h-12"
                    src={dummyUser}
                  />
                </a>
                <div className="flex flex-col">
                  <a className="inline-block text-lg font-bold" href="#">
                    <strong>Name :</strong>{" "}
                    {player.name.charAt(0).toUpperCase() +
                      player.name.substring(1).toLowerCase()}
                  </a>
                  <div className="text-slate-500 flex items-center gap-1">
                    <IoTrophyOutline /> {player.score}{" "}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDelete(player.id)}
                className="text-red-600 text-2xl mx-4 cursor-pointer"
              >
                <MdDeleteForever />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-4 flex items-center flex-col gap-4 justify-center">
          <p className="lg:text-2xl">No players found add some players first</p>
          <Link to={"/home"} className="cursor-pointer">
            <button
              name="submit"
              className="py-1 px-3 mt-2 border-2 lg:text-2xl border-gray-300/50 hover:bg-slate-600 ease-linear transition-all duration-150  rounded-md cursor-pointer "
            >Add Players</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ScoreBoard
