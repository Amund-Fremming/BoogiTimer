import { ReactNode, createContext, useContext, useState } from "react";
import { Component } from "../constants/Component";
import { IClock, defaultValue } from "../constants/Clock";

interface IGlobalContext {
  view: Component;
  setView: React.Dispatch<React.SetStateAction<Component>>;
  rounds: number;
  setRounds: React.Dispatch<React.SetStateAction<number>>;
  intervals: number;
  setIntervals: React.Dispatch<React.SetStateAction<number>>;
  roundPauseLength: IClock;
  setRoundPauseLength: React.Dispatch<React.SetStateAction<IClock>>;
  intervalLength: IClock;
  setIntervalLength: React.Dispatch<React.SetStateAction<IClock>>;
  intervalPauseLength: IClock;
  setIntervalPauseLength: React.Dispatch<React.SetStateAction<IClock>>;
}

const defaultContextValue: IGlobalContext = {
  view: Component.Iteration,
  setView: () => {},
  rounds: 0,
  setRounds: () => {},
  intervals: 0,
  setIntervals: () => {},
  roundPauseLength: defaultValue,
  setRoundPauseLength: () => {},
  intervalLength: defaultValue,
  setIntervalLength: () => {},
  intervalPauseLength: defaultValue,
  setIntervalPauseLength: () => {},
};

const GlobalContext = createContext<IGlobalContext>(defaultContextValue);

export const useGlobalProvider = () => useContext(GlobalContext);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [view, setView] = useState<Component>(Component.Iteration);
  const [rounds, setRounds] = useState<number>(3);
  const [intervals, setIntervals] = useState<number>(4);
  const [roundPauseLength, setRoundPauseLength] =
    useState<IClock>(defaultValue);
  const [intervalLength, setIntervalLength] = useState<IClock>(defaultValue);
  const [intervalPauseLength, setIntervalPauseLength] =
    useState<IClock>(defaultValue);

  const value = {
    view,
    setView,
    rounds,
    setRounds,
    intervals,
    setIntervals,
    roundPauseLength,
    setRoundPauseLength,
    intervalLength,
    setIntervalLength,
    intervalPauseLength,
    setIntervalPauseLength,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
