import './speakers.css';

function Speakers({ name = "speaker", institute = "Indian Institute of Technology", image = "https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg" }) {
    return (
        <div className="container">
            <img
                src={image}
                alt=""
            />
            <p style={{ textAlign: "center", fontSize: "1.2em", fontWeight: "900" }}>
                {name}
            </p>
            <p style={{ textAlign: "center", fontSize: "1em", fontWeight: "bold" }}>
                {institute}
            </p>
        </div>
    );
}

export default Speakers;
