import React from 'react'
import Thunder from '../../assets/logos/thunder.png';
import Female from '../../assets/logos/female.png';
import Male from '../../assets/logos/male.png';
import Filter from '../../assets/logos/filter.png';
import Sort from '../../assets/logos/sort.png';
import Star from '../../assets/logos/star.png'
import '../../assets/css/navbar.css';


const ProductsNav = () => {
  return (
    <div className='productNav' style={{marginTop:'5%'}}>
      <div className="heading"><img alt="" src={Star} className='nav-links-img'  style={{height:'35%', marginRight:'10px', position:'relative', top:'-5px'}} /><h2 style={{textAlign:'left'}}>Collections</h2></div>
      <div className='sections'>
      <div className='box'><img alt="" src={Female} className='nav-links-img' />Women</div>
      <div className='box'><img alt="" src={Male} className='nav-links-img' />Men&nbsp;&nbsp;</div>
      <div className='box'><img alt="" src={Sort} className='nav-links-img'/>Sort</div>
      <div className='box'><img alt="" src={Filter} className='nav-links-img' />Filter</div>
      </div>
    </div>
  )
}

export default ProductsNav
