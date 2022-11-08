
export const Home = (props) => {
    return <div className="home-container">
        <div className="box">
            <p className="name">{props.name}</p>
            <p className="exp">{props.exp}</p>
            <input placeholder="Email" type="email" className="email"></input>
            <button className="access">Get early access</button>
            </div>
        </div>
}
