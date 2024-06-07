import {
  addDoc,
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  query,
  QuerySnapshot,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';

import { GetFirestore } from '../../../../../core/middleware/firebase/service/firestore';
import { GolangResponse } from '../../../helper/golang';

export const ReadUserProfile = async (payload: {
  docId: string;
}): Promise<TypeAPIDataGolangResponse<User>> => {
  const refCollection = collection(GetFirestore(), 'users');
  const refDoc = doc(refCollection, payload.docId);
  const resUser = await GolangResponse(getDoc(refDoc));

  if (resUser.error) {
    console.log(resUser.error);
    return resUser;
  }

  const res: User = (resUser.res as DocumentSnapshot).data() as User;

  return { res: res, error: null };
};
