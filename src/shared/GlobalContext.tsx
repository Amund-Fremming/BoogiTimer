import { ReactNode, createContext, useContext, useState } from "react";
import { Component } from "./Component";
import { defaultValue, INumericInput } from "./types";

interface IGlobalContext {
  view: Component;
  setView: React.Dispatch<React.SetStateAction<Component>>;
  rounds: number;
  setRounds: React.Dispatch<React.SetStateAction<number>>;
  intervals: number;
  setIntervals: React.Dispatch<React.SetStateAction<number>>;
  intervalLength: INumericInput;
  setIntervalLength: React.Dispatch<React.SetStateAction<INumericInput>>;
  intervalPauseLength: INumericInput;
  setIntervalPauseLength: React.Dispatch<React.SetStateAction<INumericInput>>;
}

const defaultContextValue: IGlobalContext = {
  view: Component.Iteration,
  setView: () => {},
  rounds: 0,
  setRounds: () => {},
  intervals: 0,
  setIntervals: () => {},
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
  const [rounds, setRounds] = useState<number>(0);
  const [intervals, setIntervals] = useState<number>(0);
  const [intervalLength, setIntervalLength] =
    useState<INumericInput>(defaultValue);
  const [intervalPauseLength, setIntervalPauseLength] =
    useState<INumericInput>(defaultValue);

  const value = {
    view,
    setView,
    rounds,
    setRounds,
    intervals,
    setIntervals,
    intervalLength,
    setIntervalLength,
    intervalPauseLength,
    setIntervalPauseLength,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
