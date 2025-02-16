import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPlayer } from "../redux/Slices/scoresSlice";

function Home() {
  const [errors, setErrors] = useState({ nameError:  "Name should not be empty!", scoreError:  "Score should not be empty!", nameLengthError: "Name length should be more than 1" });
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
    }else if (formValues.name.length === 1) {
      toast.error(errors.nameLengthError);
    }else{
      dispatch(addPlayer(formValues));
      Swal.fire({
        title: "Score added successfully!",
        icon: "success"
      });
    } 
  }
  return (
    <section className=" py-8 w-full text-white flex flex-col justify-center">
      <h1 className="mx-auto mt-4 md:text-3xl lg:text-5xl mb-6 lg:mb-12 text-2xl py-8  font-extrabold tracking-wider">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
          <label className="text-lg md:text-xl lg:text-3xl " htmlFor="player-name">
            Enter Player Name :
          </label>
          <input
            id="player-name"
            type="text"
            className="py-1 px-3 border-2 border-gray-300/50 rounded-md md:text-lg lg:text-2xl" 
            placeholder="Eg. John Smith"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <label className="text-lg md:text-xl lg:text-3xl" htmlFor="score">
            Enter Score :
          </label>
          <input
            id="score"
            type="number"
            className="py-1 px-3 border-2 border-gray-300/50  rounded-md [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none md:text-lg lg:text-2xl"
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
            className="md:text-lg lg:text-xl md:mt-4 lg:mt-6 py-1 px-3 mt-2 border-2 border-gray-300/50 hover:bg-slate-600 ease-linear transition-all duration-150  rounded-md cursor-pointer "
          />

          {/* </input> */}
          <Link
            to={"/scoreboard"}
            className="md:text-lg lg:text-xl md:mt-4 lg:mt-6 py-1 px-3 mt-2 border-2 border-gray-300/50 hover:bg-slate-600 ease-linear transition-all duration-150  outline-none focus:outline-none rounded-md cursor-pointer "
          >
            View Scores
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Home;
