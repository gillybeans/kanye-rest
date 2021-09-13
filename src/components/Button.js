import "./index.css";

const Button = (props) => {

    function fetchQuote() {
        fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(res => props.setQuote(res.quote))
    }

    return (
    <button className="btn" onClick = {fetchQuote}> Click for Quote</button>
    )};

export default Button;