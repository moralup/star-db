import Spinner from '../spinner';

import './image-with-description.css';

const ImageWithDescription = (props) => {
    const { size, data1, error } = props;
    const { name, errorMessage, url, ...data } = data1;
    return (
        <div className={`image-with-description-${size}`}>
            {url ? 
                <img className={`image-with-description-img-${size}`} 
                    src={url}
                    alt="random planet"
                /> : error ? null :
                <Spinner size={size}/>
            }
            <div className={`image-with-description-details-${size}`}>
                <h3 className={`image-with-description-title-${size}`}>{!error ? name : 'Ooops!'}</h3>
                <List url={url} errorMessage={errorMessage} error={error} data={data} size={size}/>
            </div>
        </div>
    );
};

const List = (props) => {
    const { data, size, error, errorMessage, url } = props;
    let li;

    if(error){
        // console.log(data, size, error, url, 'hello')
        li = <li className={`image-with-description-list-item-${size}`}>{errorMessage}</li>;         
    } else {
        // console.log(data, size, error, url)
        li = Object.entries(data)
            .map(el => {
                return (
                    <li key={el[0]} 
                        className={`image-with-description-list-item-${size}`}>
                        {`${el[0]}: ${el[1]}`}
                    </li>
                );
            }); 
    }
    
    return (
        <ul className={`image-with-description-list-${size}`}>
            {li}
        </ul>
    );
};
export default ImageWithDescription;
