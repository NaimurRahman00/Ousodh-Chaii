import { Helmet } from 'react-helmet-async'
import DiscountProduct from '../../components/Home/DiscountProduct'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Prescription from '../../components/Prescription/Prescription'
import Brands from '../../components/Brands/Brands'
import TrendingProducts from '../../components/Trending Products/TrendingProducts'
import Offer from '../../components/Offer/Offer'
import BabyFoodCollections from '../../components/Baby food/BabyFoodCollections'
import HealthyFood from '../../components/Healthy Food/HealthyFood'
import Review from '../../components/Review/Review'
import Faq from '../../components/FAQ/Faq'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Oushodh Chai | Medicine Store</title>
      </Helmet>
      {/* Banner section */}
      <Slider></Slider>
      {/* Categories section  */}
      <Categories></Categories>
      {/* Rooms section */}
      <DiscountProduct />
      {/* Prescription */}
      <Prescription></Prescription>
      {/* Featurs brands */}
      <Brands></Brands>
      {/* Trending products */}
      <TrendingProducts></TrendingProducts>
      {/* Offer section */}
      <Offer></Offer>
      {/* Baby food Collections */}
      <BabyFoodCollections></BabyFoodCollections>
      {/* Healthy Cereal section */}
      <HealthyFood></HealthyFood>
      {/* Review */}
      <Review></Review>
      {/* FAQ section */}
      <Faq></Faq>
    </div>
  )
}

export default Home
