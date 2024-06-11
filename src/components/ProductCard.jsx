import './productCard.css'

function ProductCard(){

    const cardTitle = "Ferrari 296 GTB";
    const cardImage ='https://cdn.motor1.com/images/mgl/OkpwL/s1/ferrari-296-gtb.jpg';
    const cardDescription = "Откройте новую эру скорости с Ferrari 296 GTB";
    const availability = true;
    const thereIs = "Спешите, на складе несколько экземпляров"
    const thereNot = "Товара нет на складе"

    return (
        <div className="containerProduct">
            <h1>Наши предложения</h1>
            <div className={availability ? 'containerProductYes' : 'containerProductNo'}>
                <h2>{cardTitle}</h2>
                <img src={cardImage} className='imgProduct' alt="ferrari"/>
                <h4>{cardDescription}</h4>
                <p className='descriptionProd'>
                    Позвольте себе ощутить неподдельный восторг от вождения с Ferrari 296 GTB — автомобилем, 
                    который воплощает в себе сочетание роскоши, инноваций и невероятной динамики.
                    <br />Инновации и мощь
                    <br />Ferrari 296 GTB оснащен революционным V6-двигателем с турбонаддувом и гибридной системой, 
                    которые вместе вырабатывают ошеломляющие 830 лошадиных сил. Благодаря этому автомобиль 
                    разгоняется до 100 км/ч всего за 2,9 секунды, обеспечивая максимальное удовольствие от вождения.
                    <br /><b><span>Ваше будущее начинается сейчас.</span></b>
                </p >
            </div>
            <div className='availability'>
                <b><p className={availability ? 'textBlack' : 'textRed'}>
                    {availability ? thereIs : thereNot}
                </p></b>
            </div>
        </div>
    )
}

export default ProductCard
