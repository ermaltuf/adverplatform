
import Axios from 'axios';
import {
   
    PRODUCT_MAIN_BANNER_REQUEST,
    PRODUCT_MAIN_BANNER_SUCCESS,
    PRODUCT_MAIN_BANNER_FAIL,
     
} from '../constants/bannerConstants';



export const bannerListReducer = (
    state = { loading: true,  items: [] },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_MAIN_BANNER_REQUEST:
        return { loading: true };
      case PRODUCT_MAIN_BANNER_SUCCESS:
        return {
          loading: false,
          items: action.payload.topBanner,
        };
      case PRODUCT_MAIN_BANNER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };