import { ReactNode, createContext, useContext } from "react";
import { AudioService } from "../services/AudioService";

interface IServiceContext {
  audioService: AudioService;
}

const defaultServiceValue: IServiceContext = {
  audioService: new AudioService(),
};

const ServiceContext = createContext<IServiceContext>(defaultServiceValue);

export const useServiceProvider = () => useContext(ServiceContext);

interface GlobalServiceProps {
  children: ReactNode;
}

export const ServiceProvider = ({ children }: GlobalServiceProps) => {
  const audioService = new AudioService();
  audioService.initializeSounds();

  const value = {
    audioService,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};
