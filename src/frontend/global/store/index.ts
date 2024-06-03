import { create } from 'zustand';

import { StateMapping } from '../helper/zustand';

type TypeStoreGlobal = {
  name: string;
};

const StoreGlobal = create(
  (): TypeStoreGlobal => ({
    name: 'Gnok',
  }),
);

type TypeSetMethodStoreGlobal = {
  setName: (name: string) => void;
};

const setMethodStoreGlobal: TypeSetMethodStoreGlobal = {
  setName: (name: string) => {
    StoreGlobal.setState({ name: name });
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
