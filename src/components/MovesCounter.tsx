interface MovesCounterProps {
    moves : number,
}

export default function MovesCounter( { moves }: MovesCounterProps ) {
    return (
        <div className="text-center m-5">
            <h2 className="text-white/30">Moves {moves}/6</h2>
        </div>
    )
}