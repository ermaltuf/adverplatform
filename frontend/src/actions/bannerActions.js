
import Axios from 'axios';
import {
   
    PRODUCT_MAIN_BANNER_REQUEST,
    PRODUCT_MAIN_BANNER_SUCCESS,
    PRODUCT_MAIN_BANNER_FAIL
     
} from '../constants/bannerConstants';



export const listBannerItems = () => async (dispatch) => {
    dispatch({
      type: PRODUCT_MAIN_BANNER_REQUEST,
    });
    try {
      const { data } = await Axios.get(`/api/banner/topbanner`);
      dispatch({ type: PRODUCT_MAIN_BANNER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_MAIN_BANNER_FAIL, payload: error.message });
    }
  };