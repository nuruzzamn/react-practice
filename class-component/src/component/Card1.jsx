// import App from "../App"

export default function Card1(props) {
    console.log(props)
    let {title, des} = props;
    return <div>
        <h3>{title}</h3>
        <p>{des}</p>
    </div>
}