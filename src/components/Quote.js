import "./index.css"

function Quote(props) {
    //console.log(props.quote)

    return (
       <div className = "quote-container">
    <h2 className="text-quotes">{props.quote}</h2>
       </div>
    )
}

export default Quote