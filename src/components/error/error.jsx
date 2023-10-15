import './error.css';

export default (props) => {
    return (
        <div className="error">
            <h3 className="error-title">{`Oooops, no ${props.message} today`}</h3>
        </div>
    )
}