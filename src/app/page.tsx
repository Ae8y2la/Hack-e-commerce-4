'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestProducts from "@/components/LatestProducts";
import Offer from "@/components/ShopexOffer";
import Unique from "@/components/Unique";
import TrendingProducts from "@/components/TrendingProducts";
import DiscountItems from "@/components/Discount";
import TopCategories from "@/components/TopCategories";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blog";
import Footer from "@/components/Footer";

function Homepage(){
  return(
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <Unique />
      <TrendingProducts />
      <DiscountItems />
      <TopCategories />
      <Newsletter />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Homepage;