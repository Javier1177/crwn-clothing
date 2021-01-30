import ShopTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    try {
      const collectionsSnapshot = await collectionRef.get();
      const collectionsMap = convertCollectionsSnapshotToMap(
        collectionsSnapshot,
      );
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      return dispatch(fetchCollectionsFailure(error.message));
    }
  };
};
