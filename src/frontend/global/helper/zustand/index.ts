import { StoreApi } from 'zustand';
import { shallow } from 'zustand/shallow';
import { UseBoundStoreWithEqualityFn } from 'zustand/traditional';

export const StateMapping = (
  stateList: string[],
  store: UseBoundStoreWithEqualityFn<StoreApi<unknown>>,
  isShallow?: boolean,
) => {
  if (isShallow == undefined) {
    isShallow = true;
  }

  if (stateList.length == 0) {
    return;
  }
  // One Element Not Use Shallow
  if (stateList.length == 1) {
    const obj = store((state: any) => {
      if (stateList[0] in state) {
        return state[stateList[0]];
      } else {
        return;
      }
    });
    return { [stateList[0]]: obj };
  }

  return store(
    (state: any) => {
      const obj = {};
      for (const index in stateList) {
        if (stateList[index] in state) {
          const objMapping = { [stateList[index]]: state[stateList[index]] };
          Object.assign(obj, objMapping);
        }
      }
      return obj;
    },
    isShallow ? shallow : (undefined as any),
  );
};
