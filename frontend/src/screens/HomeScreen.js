import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import BannerExample from '../components/CarouselMaterial';
import { listBannerItems } from '../actions/bannerActions';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const bannerItems = useSelector((state) => state.bannerList);
  const { loading, error, products } = productList;
  const { newload, items } = bannerItems;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(listBannerItems());
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [open, productList]);
  console.log(items);

  return (
    <div>
      <h2>Top Sellers</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          {/* <Carousel showArrows autoPlay showThumbs={false}>
            {sellers.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller.logo} alt={seller.seller.name} />
                  <p className="legend">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel> */}
          {/* {
            items.map((item) => (

              <BannerExample items={item} key={item._id} ></BannerExample>

            ))} */}
              <BannerExample items={items} loading={newload}/>
        </>
      )}

      {/* <BannerExample items={[items]}/>   */}



      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
          <div>

            <Backdrop className={classes.backdrop} open={open}>
              <CircularProgress />
            </Backdrop>
          </div>
        </>
      )}
    </div>
  );
}
