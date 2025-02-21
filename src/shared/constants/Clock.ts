export interface IClock {
  leftMinutes: number;
  rightMinutes: number;
  leftSeconds: number;
  rightSeconds: number;
}

export const defaultValue: IClock = {
  leftMinutes: 0,
  rightMinutes: 0,
  leftSeconds: 0,
  rightSeconds: 0,
};
