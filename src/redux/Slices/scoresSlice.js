import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  players: [],
};
export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      const player = {
        id: nanoid(),
        name: action.payload.name,
        score: action.payload.score,
      };
      state.players.push(player);
    },
    removePlayer: (state, action) => {
      // console.log(action.payload);
      state.players = state.players.filter((player) => player.id !== action.payload);
    },
  },
});

export const { addPlayer,removePlayer } = playersSlice.actions;
export default playersSlice.reducer;
