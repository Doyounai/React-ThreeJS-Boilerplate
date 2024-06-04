// import { HelperType } from '../../../core/universal-helper';

export type TypeRepositoryPattern = {
  ReadUserProfile: (payload: { docId: string }) => Promise<TypeAPIDataGolangResponse>;
};
