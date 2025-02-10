import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPlayer } from "../redux/Slices/scoresSlice";

function Home() {
  const [errors, setErrors] = useState({ nameError:  "Name should not be empty!", scoreError:  "Score should not be empty!" });
  const [formValues, setFormValues] = useState({});
  const dispatch = useDispatch();

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormValues((old) => {
      return { ...old, [name]: value };
    });
    console.log(formValues);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!formValues.name) {
      toast.error(errors.nameError);
    }else if(!formValues.score){
      toast.error(errors.scoreError);
    }else{
      dispatch(addPlayer(formValues));
      toast.success("Score added successfully!!!");
    } 
  }
  return (
    <section className=" py-8 w-screen text-white flex flex-col justify-center">
      <h1 className="mx-auto mt-4 md:text-3xl text-2xl py-8  font-extrabold tracking-wider">
        The Leaderboard App
      </h1>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 absolute inset-0 -z-10">
        {/* <img src={} alt="" /> */}
      </div>
      <form
        className="flex flex-col justify-center items-center gap-4 px-8"
        action="#"
        onSubmit={handleFormSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
          <label className="text-lg " htmlFor="player-name">
            Enter Player Name :
          </label>
          <input
            id="player-name"
            type="text"
            className="py-1 px-3 border-2 border-gray-300/50 rounded-md"
            placeholder="Eg. John Smith"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <label className="text-lg" htmlFor="score">
            Enter Score :
          </label>
          <input
            id="score"
            type="number"
            className="py-1 px-3 border-2 border-gray-300/50  rounded-md [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none "
            placeholder="Ex. 200"
            name="score"
            value={formValues.score}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-4">
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="py-1 px-3 mt-2 border-2 border-gray-300/50 hover:bg-slate-600 ease-linear transition-all duration-150  rounded-md cursor-pointer "
          />

          {/* </input> */}
          <Link
            to={"/scores"}
            className="py-1 px-3 mt-2 border-2 border-gray-300/50 hover:bg-slate-600 ease-linear transition-all duration-150  outline-none focus:outline-none rounded-md cursor-pointer "
          >
            View Scores
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Home;
