import profilePic from'./assets/nanako.jpg'

function Card() {
    
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Nanako</h2>
            <p className="card-text">I am a student and play baseball</p>
        </div>
    );
}

export default Card