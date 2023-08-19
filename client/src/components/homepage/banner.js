import '../../assets/css/banner.css';
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';
import banner4 from '../../assets/images/banner4.png';
import banner5 from '../../assets/images/banner6.png';
import banner6 from '../../assets/images/banner5.png';

const Banner = () => {
  return (
    <div className='row'>
        <div className='col-sm-4'>
        </div>
        <div className="banner-outer col-sm-8">
            <div className='row'>
                <div className="col-sm-6">
                    <div className="banner-conts">
                        <img alt="" src={banner2} className='banner-conts-img'/>
                    </div>
                    <div className="banner-conts">
                        <img alt="" src={banner1} className='banner-conts-img'/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="banner-conts">
                        <img alt="" src={banner5} className='banner-conts-img-landscape-1'/>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-sm-6">
                    <div className="banner-conts">
                        <img alt="" src={banner6} className='banner-conts-img-landscape-2'/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="banner-conts">
                        <img alt="" src={banner4} className='banner-conts-img'/>
                    </div>
                    <div className="banner-conts">
                        <img alt="" src={banner3} className='banner-conts-img'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
