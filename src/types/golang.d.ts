export {};

declare global {
  type TypeGolangResponse = { res: any; error: Error | null };

  type TypeAPIData = {
    data: any;
  } & Record<string, any>;

  type TypeAPIDataGolangResponse<T> = {
    res: T | null;
    error: Error | null;
  };
}
