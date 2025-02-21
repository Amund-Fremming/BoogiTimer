import CountdownScreen from "./Countdown/CountdowScreen";
import IterationScreen from "./Iteration/IterationScreen";
import { Component } from "./shared/constants/Component";
import { useGlobalProvider } from "./shared/providers/GlobalContext";
import TimeScreen from "./Time/TimeScreen";

export default function Router() {
  const { view } = useGlobalProvider();

  switch (view) {
    case Component.Iteration:
      return <IterationScreen />;
    case Component.Time:
      return <TimeScreen />;
    case Component.Countdown:
      return <CountdownScreen />;
  }
}
