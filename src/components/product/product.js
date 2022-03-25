import './product.css'
import GitHub from '../../img/ghe.png'
const Product = ({ img, link }) => {
    return (
        <div className='p'>
            <div className='p-browser'>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle-1'>
                    <a href='https://github.com/ramriddlez/UofT-SCS-Coding-Bootcamp-Project-1-Interactive-Front-End-Application' target='_blank' rel="noreferrer" >
                        <p>&#128073; source code &#128072; </p>
                    </a>
                </div>
            </div>
            <a href={link} target='_blank' rel="noreferrer" >
                <img src={img} alt='' className='p-img'></img>
            </a>


        </div>
    )
}

export default Product