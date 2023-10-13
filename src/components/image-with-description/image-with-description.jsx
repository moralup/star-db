import './image-with-description.css';

const ImageWithDescription = (props) => {
    const { size, url, data1 } = props;
    const [ name, ...data ] = Object.entries(data1);
    const title = name ? name[1] : null; 
    if(size == 'min') console.log(url)
    return (
        <div className={`image-with-description-${size}`}>
            <img className={`image-with-description-img-${size}`} 
                src={url}
                alt="random planet"
            />
            <div className={`image-with-description-details-${size}`}>
                <h3 className={`image-with-description-title-${size}`}>{title}</h3>
                <ul className={`image-with-description-list-${size}`}>
                    {data.map(el => {
                        if(Array.isArray(el)){
                            return (
                                <li key={el[0]} 
                                    className={`image-with-description-list-item-${size}`}>
                                    {`${el[0]}: ${el[1]}`}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ImageWithDescription;
