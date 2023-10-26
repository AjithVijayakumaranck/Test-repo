import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ResetPassword from '../Components/ResetPassword/ResetPassword'
import ForgotPassword from '../Pages/Common/ForgotPassword/ForgotPassword'
import Home from '../Pages/User/Home/Home'
import RegisterAd from '../Pages/User/Registration_Ad/Register_Ad'
import RegistrationLogin from '../Pages/Common/Registration_login/Registration_login'
import SinglePage from '../Pages/User/SinglePage/SinglePage'
import UserProfile from '../Pages/User/ProfilePage/UserProfile'
import WishlistPage from '../Pages/User/WishlistPage/WishlistPage'
import PostAdsPage from '../Pages/User/PostAdsPage/PostAdsPage'
import Chats from '../Pages/User/ChatPage/Chats'
import ClientProfile from '../Pages/User/ProfilePage/ClientProfile'
import ChangePassword from '../Pages/Common/ChangePassword/ChangePassword'
import ProtectedRoutes from '../utilities/ProtectedRoutes'
import ContactPage from '../Pages/User/ContactPage/ContactPage'
import NotificationPage from '../Pages/User/NotificationPage/NotificationPage'
import PurchaseAd from '../Pages/User/SubscriptionPage/PurchaseAd'
import OwnProductPage from '../Pages/User/OwnProductPage/OwnProductPage'
import SearchProductsPage from '../Pages/User/SearchProductsPage/SearchProductsPage'
import CategoryProductPage from '../Pages/User/CategoryProductPage/CategoryProductPage'
import UpdateProfilePage from '../Pages/User/UpdateProfilePage/UpdateProfilePage'
import PrivacyPage from '../Pages/User/Legal&PrivacyPage/PrivacyPage'
import TermsAndConditionPage from '../Pages/User/Legal&PrivacyPage/TermsAndConditionPage'
import CookiesPage from '../Pages/User/Legal&PrivacyPage/CookiesPage'



//-------Admin components--------

import AdminHome from '../Pages/Admin/AdminHome/AdminHome'
import CategoryForm from '../Pages/Admin/New/CategoryForm'
import UsersList from '../Pages/Admin/List/UsersList'
import ProductsList from '../Pages/Admin/List/ProductsList'
import CategoryList from '../Pages/Admin/List/CategoryList'
import SubcategoryList from '../Pages/Admin/List/SubcategoryList'
import UsersDetails from '../Pages/Admin/Single/UsersDetails'
import AdminDetails from '../Pages/Admin/Single/AdminDetails'
import SubcategoryForm from '../Pages/Admin/New/SubcategoryForm'
import EditForm from '../Pages/Admin/Edit/EditForm'
import EditCategory from '../Pages/Admin/Edit/EditCategory'
import EditSubcategory from '../Pages/Admin/Edit/EditSubcategory'
import { AdminContextProvider } from '../Contexts/AdminContext'
import AdminProtectedRouter from '../utilities/AdminProtectedRouter'
import ProductDetails from '../Pages/Admin/Single/ProductDetails'
import PlansList from '../Pages/Admin/List/PlansList'
import PlanForm from '../Pages/Admin/New/PlanForm'
import EditPlanForm from '../Pages/Admin/Edit/EditPlanForm'
import PlanDetails from '../Pages/Admin/Single/PlanDetails'
import AdsForm from '../Pages/Admin/New/AdsForm'
import AdsLists from '../Pages/Admin/List/AdsLists'
import SuperAdminList from '../Pages/Admin/List/SuperAdminList'
import AdminList from '../Pages/Admin/List/AdminList'
import NewAdminForm from '../Pages/Admin/New/NewAdminForm'
import ProfileDetails from '../Pages/Admin/Single/ProfileDetails'
import SuperAdminDetails from '../Pages/Admin/Single/SuperAdminDetails'
import EditPassword from '../Pages/Admin/Edit/EditPassword'
import SuperAdminProtectedRouter from '../utilities/SuperAdminProtectedRouter'
import NotificationForm from '../Pages/Admin/New/NotificationForm'
import NotificationList from '../Pages/Admin/List/NotificationList'
import MessageList from '../Pages/Admin/List/MessageList'
import UnProtectedRouter from '../utilities/UnProtectedRouter'
import NotFound from '../Components/404/NotFound'
import DocumentList from '../Pages/Admin/List/DocumentList'
import DocumentForm from '../Pages/Admin/New/DocumentForm'






//-------- Admin End---------


const Routings = () => {





  return (

    <div>
      <Router>
        <AdminContextProvider>
          <Routes>

            {/* <Route exact index element={<Home />} /> */}
            <Route path="/" exact Component={Home} />

            <Route element={<UnProtectedRouter />}>
              <Route path='/registration_login' element={<RegistrationLogin />} />
            </Route >

            <Route path='*' element={<NotFound />} />
            <Route path='/forgetpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/product/:productId' element={<SinglePage />} />
            <Route path='/category/:categoryId' element={< CategoryProductPage />} />
            <Route path='/search/:query' element={< SearchProductsPage />} />
            <Route path='/legal-and-privacy' >
              <Route index element={<PrivacyPage />} />
              <Route path="terms&condition" element={<TermsAndConditionPage />} />
              <Route path="cookies" element={<CookiesPage />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route path='/postadd' element={<PostAdsPage />} />
              <Route path='/myads' element={< OwnProductPage />} />
              <Route path='/notification' element={< NotificationPage />} />
              <Route path='/registerad/:subCategoryId' element={<RegisterAd />} />
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/updateprofile' element={<UpdateProfilePage />} />
              <Route path='/wishlist' element={<WishlistPage />} />
              <Route path='/clientprofile/:clientId' element={< ClientProfile />} />
              <Route path='/subscribe' element={< PurchaseAd />} />
              <Route path='/chat' element={< Chats />} />
              <Route path='/chat/:conversationId' element={< Chats />} />
              <Route path='/changepassword/:userId' element={< ChangePassword />} />
            </Route>

            <Route element={<AdminProtectedRouter />}>
              <Route exact path="admin" element={<AdminHome />} />
              <Route path="/admin/users">
                <Route index element={<UsersList />} />
                <Route path="singles/:userId" element={<UsersDetails />} />
              </Route>
              <Route path="/admin/products">
                <Route index element={<ProductsList />} />
                <Route path="singles/:productId" element={<ProductDetails />} />
              </Route>
              <Route path="/admin/messages">
                <Route index element={<MessageList />} />
              </Route>
              <Route path="/admin/notifications">
                <Route index element={<NotificationList />} />
                <Route path="form" element={<NotificationForm title="Add New Notification" />} />
              </Route>
              <Route path="/admin/document">
                <Route index element={<DocumentList />} />
                <Route path="form" element={<DocumentForm title="Add New Document" />} />
              </Route>
              <Route path="/admin/category">
                <Route index element={<CategoryList />} />
                <Route path="form" element={<CategoryForm title="Add New Category" />} />
                <Route path="edit/:categoryId" element={<EditCategory title="Edit Category" />} />
              </Route>
              <Route path="/admin/subcategory">
                <Route index element={<SubcategoryList />} />
                <Route path="form" element={<SubcategoryForm title="Add New SubCategory" />} />
                <Route path="edit/:subcategoryId" element={<EditSubcategory title="Edit SubCategory" />} />
              </Route>
              <Route path="/admin/ads">
                <Route index element={<AdsLists />} />
                <Route path="form" element={<AdsForm title="Add New Advertisement" />} />
                <Route path="edit/:adsId" element={<EditPlanForm title="Edit Advertisement" />} />
              </Route>
              <Route path="/admin/profile">
                <Route index element={<ProfileDetails />} />
                <Route path="edit" element={<EditForm title="Edit Profile" />} />
              </Route>
              <Route element={<SuperAdminProtectedRouter />}>
                <Route path="/admin/superadmins">
                  <Route index element={<SuperAdminList />} />
                  <Route path="updatepassword/:Id" element={<EditPassword title="Edit SuperAdmin Password" path="superadmins" />} />
                  <Route path="single/:superadminId" element={<SuperAdminDetails />} />
                </Route>
                <Route path="/admin/plans">
                  <Route index element={<PlansList />} />
                  <Route path="form" element={<PlanForm title="Add New Subscribe Plans" />} />
                  <Route path="edit/:subscriptionId" element={<EditPlanForm title="Edit Subscribe Plans" />} />
                  <Route path="single/:subscriptionId" element={<PlanDetails />} />
                </Route>
                <Route path="/admin/members">
                  <Route index element={<AdminList />} />
                  <Route path="form" element={<NewAdminForm title="Add New Admin" />} />
                  <Route path="updatepassword/:Id" element={<EditPassword title="Edit Admin Password" path="members" />} />
                  <Route path="single/:adminId" element={<AdminDetails />} />
                </Route>
              </Route>
            </Route>

          </Routes>
        </AdminContextProvider>


      </Router >

    </div >
  )
}

export default Routings