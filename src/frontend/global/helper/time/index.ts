export const WaitForMilliSecond = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};
