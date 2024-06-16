import { useState } from "react"
export default function FeedBack() {

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const addLike = () => {
        setLike(count => count + 1)
    }

    const addDislike = () => {
        setDislike(count => count + 1)
    }

    const reserResulta = () => {
        setLike(0);
        setDislike(0);
    }

    return (
        <div>
            <h3>FeedBack</h3>
            <button onClick={addLike}>like</button>
            <p>{like}</p>
            <button onClick={addDislike}>dislike</button>
            <p>{dislike}</p>
            <button onClick={reserResulta}>reset</button>
        </div>
    )
}
