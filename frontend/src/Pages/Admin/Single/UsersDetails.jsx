import React, { useState, useEffect } from 'react'
import Style from './Style.module.css'
import Header from '../../../Components/AdminComponents/Header/Header'
import Sidebar from '../../../Components/AdminComponents/Sidebar/Sidebar'
import List from '../../../Components/AdminComponents/Table/List'
import { useParams } from 'react-router-dom'
import adminInstance from '../../../instance/AdminInstance'

const UsersDetails = () => {

  const { userId } = useParams();
  console.log(userId, "userdetail id");

  const [UserData, SetUserData] = useState("");
  const [UserAddress, SetUserAddress] = useState({});
  const [UserImage, SetUserImage] = useState("");
  const [UserProducts, SetUserProducts] = useState([]);

  const loadUsers = () => {
    try {
      adminInstance.get(`/api/super_admin/user_control/get_profile/${userId}`).then((response) => {
        console.log(response.data, "userdetail res");
        SetUserData(response.data);
        SetUserAddress(response.data.address);
        SetUserImage(response.data.profilePicture);
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadUserProducts = () => {
    try {
      adminInstance.get(`/api/super_admin/product_control/get_userproducts/${userId}`).then((response) => {
        console.log(response.data, "user products res");
        SetUserProducts(response.data);
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(UserAddress, "region");

  //LoadCategory functions
  useEffect(() => {
    loadUsers();
    loadUserProducts();
  }, []);






  return (
    <div className={Style.single}>
      <Sidebar />
      <div className={Style.singleContainer}>
        <Header />
        <div className={Style.top}>
          <div className={Style.left}>
            <h1 className={Style.title}>Information</h1>
            <div className={Style.item}>

              <div className={Style.itemImg}>
                <img
                  src={
                    UserImage.url
                      ? UserImage.url
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>

              <div className={Style.details}>
                <h1 className={Style.itemTitle}>{UserData.fullname || ''} {UserData.surname || ''}</h1>
                <div className={Style.detailItem}>
                  <span className={Style.itemKey}>Email:</span>
                  <span className={Style.itemValue}> {UserData.email} </span>
                </div>
                <div className={Style.detailItem}>
                  <span className={Style.itemKey}>Phone:</span>
                  <span className={Style.itemValue}>{UserData.phoneNumber}</span>
                </div>
                <div className={Style.detailItem}>
                  <span className={Style.itemKey}>Address:</span>
                  <span className={Style.itemValue}>
                    {UserAddress.locality || ''} {UserAddress.district || ''} {UserAddress.state || ''}
                  </span>
                </div>
                <div className={Style.detailItem}>
                  <span className={Style.itemKey}>Country:</span>
                  <span className={Style.itemValue}>{UserAddress.region}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.bottom}>
          <h1 className={Style.title}>Last Transactions</h1>
          <List rows={UserProducts} />
        </div>

      </div>
    </div>
  );
};

export default UsersDetails