import './productList.css'
import Product from '../product/product'
import {products} from '../../data'
const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'> Create & Inspire. Its Ramriddlez</h1>
                <p className='pl-desc'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='pl-list'>
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link ={item.link}/>
                ))}
               
            </div>
        </div>
    )
}

export default ProductList