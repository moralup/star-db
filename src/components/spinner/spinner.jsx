import './spinner.css';

export default (props) => {
    const { size } = props;
    return (
        <span className={`loader loader-${size}`}></span>
    );
}