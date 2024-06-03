import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { StateMapping } from '../helper/zustand';

type TypeStoreGlobalPersist = {
  name: string;
};

const StoreGlobalPersist = create(
  persist((): TypeStoreGlobalPersist => ({ name: 'gnok' }), {
    name: 'storage',
  }),
);

type TypeSetMethodStoreGlobalPersist = {
  setName: (name: string) => void;
};

const SetMethodStoreGlobalPersist: TypeSetMethodStoreGlobalPersist = {
  setName: (name: string) => {
    StoreGlobalPersist.setState({ name: name });
  },
};

export const UseStoreGlobalPersist = (
  stateList: string[],
  isShallow?: boolean,
): TypeStoreGlobalPersist => {
  return StateMapping(stateList, StoreGlobalPersist, isShallow) as TypeStoreGlobalPersist;
};

export const GetSetMethodStoreGlobalPersist = (): TypeSetMethodStoreGlobalPersist => {
  return SetMethodStoreGlobalPersist;
};
