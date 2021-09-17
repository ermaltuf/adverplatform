import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Banner from '../models/bannerModel.js';


const bannerRouter = express.Router();


bannerRouter.get(
        '/seed',
        expressAsyncHandler(async (req, res) => {
          // await User.remove({});
          const createdBanner = await Banner.insertMany(data.topbanner);
          res.send({ createdBanner });
        })
      );

bannerRouter.get(
    '/topbanner',
    expressAsyncHandler(async(req ,res) => {
        const banner = await Banner.find();
        if(banner){
            return res.status(200).send({message : "The top banner is ready" , topBanner : banner });
        }else{
            return res.status(401).send({ message : "The banner section is null"})
        }
    })
  );




  
  export default bannerRouter;