import { TypeRepositoryPattern } from './repository-pattern';
import APIFirebase from './service';

const APIGlobal: TypeRepositoryPattern = {
  ...APIFirebase,
};

export default APIGlobal;
