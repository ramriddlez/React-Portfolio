import './productList.css'
import Product from '../product/product'
import {products} from '../../data'
const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'> Projects 👨🏻‍💻📈 </h1>
                <p className='pl-desc'> 
                Enjoy the projects below to showcase my FULL STACK development skills; I am consistently improving and adding to this list so please come back often!
                </p>
            </div>
            <div className='pl-list'>
                {products.map((item) => (
                    <Product key={item.id} sourcecode={item.sourcecode} img={item.img} link ={item.link}/>
                ))}
               
            </div>
        </div>
    )
}

export default ProductList