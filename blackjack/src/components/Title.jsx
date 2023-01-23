

export default function Title(props) {

    return (
        <div className="title-screen">
            <p>title screen</p>
            <button className="new-game" onClick={props.onClickNewGame}> </button>
        </div>
    )
}