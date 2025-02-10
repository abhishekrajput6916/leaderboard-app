import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../axios/axios";

function PopularPlayer() {
  const [popularPlayers, setPopularPlayers] = useState([]);
  async function getData(params) {
    const response = axios.get(BASE_URL,)
  }

  useEffect(() => {
    getData();
  }, []);
  return <div>PopularPlayer</div>;
}

export default PopularPlayer;
