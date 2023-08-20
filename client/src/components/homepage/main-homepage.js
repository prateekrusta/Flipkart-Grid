import '../../assets/css/homepage.css';
import Banner from './banner';
import Chat from '../../assets/logos/chat.png';
import Thunder from '../../assets/logos/thunder.png';
import Shoes from '../../assets/logos/shoes.png';
import Handbag from '../../assets/logos/handbag.png';
import Gym from '../../assets/logos/gym.png';
import Gifts from '../../assets/logos/gift.png';
import Jacket from '../../assets/logos/jacket.png';
import Nav from '../navbar/navbar';
import ProductsNav from './productsNav';
import LogoMain from '../../assets/logos/logo-main.png'
import {Link} from 'react-router-dom'
const MainHomepage = () => {
  return (
    <>
        <div className="row">
            <div className="col-sm-2 sideBar">
              <div>
                <img alt="" src={LogoMain} className='logomain'/>
              </div>
            <div className='sideBar-inner'>
              <h2>EXPLORE!</h2>
              <div className="nav-links-inner">
                <img alt="" src={Thunder} className='nav-links-img' /> New In
              </div>
              <div className="nav-links-inner">
                <img alt="" src={Jacket} className='nav-links-img' /> Clothing
              </div>
              <div className="nav-links-inner">
                <img alt="" src={Shoes} className='nav-links-img' />Shoes
              </div>
              <div className="nav-links-inner">
                <img alt="" src={Handbag} className='nav-links-img' /> Accessories
              </div>
              <div className="nav-links-inner">
                <img alt="" src={Gym} className='nav-links-img' /> Active Wear
              </div>
              <div className="nav-links-inner">
                <img alt="" src={Gifts} className='nav-links-img' /> Gifting
              </div>
            </div>
              <Link to="/chat"><div className="nav-links-inner-bottom">
                <img alt="" src={Chat} className='nav-links-img' /> Help Center
              </div></Link>
            </div>
            <div className="col-sm-10">
              <Nav />
              <ProductsNav />
              <Banner />
            </div>
        </div>
    </>
  );
};

export default MainHomepage;
