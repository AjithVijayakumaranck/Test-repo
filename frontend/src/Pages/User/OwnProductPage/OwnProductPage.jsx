import React, { useState, useEffect, useContext } from 'react'
import Style from "./index.module.css"
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../../../Components/Breadcrumb/Breadcrumb';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import OwnCard from '../../../Components/Cards/OwnProductCard/OwnCard';
import authInstance from '../../../instance/AuthInstance';
import { UserContext } from '../../../Contexts/UserContext';


const OwnProductPage = () => {

    const location = useLocation();
    const pathSegment = location.pathname.split('/').filter((segment) => segment);

    const LoggedInUser = useContext(UserContext);
    const { User } = LoggedInUser

    const [UserProducts, SetUserProducts] = useState([]);
    const [Reload, SetReload] = useState(false)

    const loadUserProducts = () => {
        try {
            authInstance.get(`/api/super_admin/product_control/get_userproducts/${User._id}`).then((response) => {
                SetUserProducts(response.data);
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    //LoadCategory functions
    useEffect(() => {
        loadUserProducts();
    }, [Reload, User]);

    function ScrollToTopOnMount() {
        window.scrollTo(0, 0);
        return null;
    }

    useEffect(() => {
        ScrollToTopOnMount();
    }, []);

    return (
        <div className={Style.page_wrapper}>
            <ScrollToTopOnMount />
            <Navbar />
            <div className={Style.main}>
                <Breadcrumb pathSegments={pathSegment} />
                <div className={Style.productwrapper}>
                    <div className={Style.container}>
                        <div className={Style.heading}>
                            <div className={Style.left}>
                                <h2>Own Ads</h2>
                            </div>
                            <div className={Style.right}>
                                <span></span>
                            </div>
                        </div>
                        <div className={Style.cardWrapper}>
                            <OwnCard products={UserProducts} reload={SetReload} userId={User._id} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default OwnProductPage