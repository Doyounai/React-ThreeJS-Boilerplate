export {};

declare global {
  type User =
    | {
        name: string;
        age: string;
      }
    | undefined;
}
