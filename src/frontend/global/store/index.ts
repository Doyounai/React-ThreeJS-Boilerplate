import { create } from 'zustand';

import { StateMapping } from '../helper/zustand';

type TypeStoreGlobal = {
  name: string;
  isLoading: boolean;
};

const StoreGlobal = create(
  (): TypeStoreGlobal => ({
    name: 'Gnok',
    isLoading: true,
  }),
);

type TypeSetMethodStoreGlobal = {
  setName: (name: string) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const setMethodStoreGlobal: TypeSetMethodStoreGlobal = {
  setName: (name: string) => {
    StoreGlobal.setState({ name: name });
  },
  setIsLoading: (isLoading: boolean) => {
    StoreGlobal.setState({ isLoading: isLoading });
  },
};

export const UseStoreGlobal = (
  stateList: string[],
  isShallow?: boolean,
): TypeStoreGlobal => {
  return StateMapping(stateList, StoreGlobal, isShallow) as TypeStoreGlobal;
};

export const GetSetMethodStoreGlobal = (): TypeSetMethodStoreGlobal => {
  return setMethodStoreGlobal;
};

// Using Example
// const { setName } = SetMethodStoreGlobal();
// const { name } = UseStoreGlobal(['name']);
