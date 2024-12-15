import { configureStore } from "@reduxjs/toolkit";
import beanSlice from "./bean/beanSlice";
import { useDispatch } from "react-redux";
import beansSlice from "./beans/beansSlice";
import combinationsSlice from "./combinations/combinationsSlice";
import factsSlice from "./facts/factsSlice";
import historySlice from "./history/historySlice";
import recipesSlice from "./recipes/recipesSlice";

export const store = configureStore({
  reducer: {
    bean: beanSlice,
    beans: beansSlice,
    combinations: combinationsSlice,
    facts: factsSlice,
    history: historySlice,
    recipes: recipesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
