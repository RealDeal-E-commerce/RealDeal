// // actions/allnftActions.js
// import axios from 'axios';
// import { FETCH_ALLNFT_SUCCESS } from './types';
// import { setAllNFT } from '../reducers/allnftReducer';

// export const fetchAllNFT = (status, genre) => async (dispatch) => {
//   try {
//     const response = await axios.get("http://localhost:3000/api/allnft/", {
//       params: { status, genre },
//     });
//     dispatch(setAllNFT(response.data));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
