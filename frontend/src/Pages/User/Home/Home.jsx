import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import Style from './index.module.css'
import instance from '../../../instance/AxiosInstance'
import Newsletter from '../../../Components/Newsletter/Newsletter'
import HomeProduct from '../../../Components/ProductWrapper/HomeProduct'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import HomeCarousel from '../../../Components/Carousels/HomeCarousel/HomeCarousel'
import LeftCategory from '../../../Components/HomeCategory/LeftCategory'
import RightCategory from '../../../Components/HomeCategory/RightCategory'



const Home = () => {


  const [location, setLocation] = useState([]);
  const [Products, SetProducts] = useState([]);
  const [SortedProducts, SetSortedProducts] = useState([]);
  const [CurrentPage, SetCurrentPage] = useState(0);
  const [SliderImage, SetSliderImage] = useState([]);



  const loadProducts = () => {
    try {
      instance.get(`/api/user/product/get_products?page=${CurrentPage}`).then((response) => {
        //console.log(response.data);
        SetProducts(response.data);
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //LoadCategory functions
  useEffect(() => {
    loadProducts();
  }, [CurrentPage]);


  function ScrollToTopOnMount() {
    window.scrollTo(0, 0);
    return null;
  }

  useEffect(() => {
    ScrollToTopOnMount();
  }, []);


  const handlePreviousPage = () => {
    console.log("hello prev");
    if (CurrentPage > 1) {
      SetCurrentPage(CurrentPage - 12);
    }
  };

  const handleNextPage = () => {
    console.log("hello next");
    SetCurrentPage(CurrentPage + 12);
  };


  //LoadSlider Image functions
  useEffect(() => {
    try {
      instance.get("/api/user/slide/slides_view").then((response) => {
        //console.log(response.data);
        SetSliderImage([...response.data]);
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);



  const findPremiumProducts = () => {
    const sortedProducts = Products.sort((a, b) => {
      if (a.featured && !b.featured) {
        return -1;
      } else if (!a.featured && b.featured) {
        return 1;
      }
      return 0;
    });
    SetSortedProducts(sortedProducts)
    //console.log(SortedProducts.length, "sorted products length");
  }

  useEffect(() => {
    findPremiumProducts();
  }, [Products]);


  return (
    <div className={Style.home_container}>
      <ScrollToTopOnMount />
      <Navbar setLocation={setLocation} location={location} />
      <HomeCarousel items={SliderImage} />
      < div className={Style.Main_container}>
        <div className={Style.Left}>
          <LeftCategory />
        </div>
        <div className={Style.Right}>
          <RightCategory />
          <div className={Style.cardWrapper}>
            <HomeProduct sortedproducts={SortedProducts} />
            {SortedProducts.length !== 0 ?
              <div className={Style.loadbtn}>
                <button onClick={handlePreviousPage} disabled={CurrentPage === 1} >  <HiOutlineArrowNarrowLeft className={Style.icon} /> Prev </button>
                <button onClick={handleNextPage}  > Next <HiOutlineArrowNarrowRight className={Style.icon} /> </button>
              </div>
              : null
            }
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div >
  )
}

export default Home