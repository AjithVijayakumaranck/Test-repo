import React from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={Style.Container}>
            <div className={Style.grid} >
                <div className={Style.box}>
                    <Link to='/' className={Style.navigation} > <h1>DealNBuy</h1> </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et,sollicitudin elit at amet.</p>

                </div>

                <div className={Style.box}>
                    <h2>About Us</h2>
                    <ul>
                        <Link to='/legal-and-privacy' className={Style.navigation} ><li>Help Center</li></Link>
                        <Link to='/legal-and-privacy/terms&condition' className={Style.navigation} ><li>Terms & Conditions</li></Link>
                        <Link to='/legal-and-privacy' className={Style.navigation} ><li>Privacy Policy</li></Link>
                    </ul>
                </div>
                <div className={Style.box}>
                    <h2>Locations</h2>
                    <ul>
                        <li> India </li>
                    </ul>
                </div>
                <div className={Style.box}>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>kerala </li>
                        <li>Email: deal&buy@gmail.com</li>
                        <li>Phone: +91 123 456 789</li>
                    </ul>
                </div>
            </div>
            <div className={Style.bottom}>
                <div className={Style.bottomleft}>
                    <p>Copyright © 2023 DealNBuy. All Rights Reserved.
                        <Link to='/legal-and-privacy/terms&condition' className={Style.navigation} ><span className={Style.left}><i>Terms Of Use</i></span></Link>
                        <Link to='/legal-and-privacy' className={Style.navigation} ><span><i>Privacy Policy</i></span></Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer
