export {};

declare global {
  type TypeGolangResponse = { res: any; error: Error | null };

  type TypeAPIData = {
    data: any;
  } & Record<string, any>;

  type TypeAPIDataGolangResponse = {
    res: TypeAPIData | null;
    error: Error | null;
  };
}
