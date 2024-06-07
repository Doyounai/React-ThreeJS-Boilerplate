export {};

declare global {
  interface IPreloadProps<T> {
    onLoadComplete: (T) => void;
  }
}
