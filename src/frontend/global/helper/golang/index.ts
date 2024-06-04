export const GolangResponse = (promiseAPI: any): Promise<TypeGolangResponse> => {
  return promiseAPI
    .then((res: any) => {
      return { res: res, error: null };
    })
    .catch((error: any) => {
      return { res: null, error: error };
    });
};

export const GolangToThrowResponse = async (promise: Promise<TypeGolangResponse>) => {
  try {
    const resPromise = await promise;
    return resPromise.res;
  } catch (error) {
    console.log('error :', error);
    throw error;
  }
};
