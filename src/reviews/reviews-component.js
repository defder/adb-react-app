import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk, findReviewsByGameThunk} from "./reviews-thunk";

const ReviewsComponent = ({gameId}) => {
    const [review, setReview] = useState('')
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReviewsByGameThunk(gameId))
    }, [])
    const handleCreateReview = () => {
        dispatch(createReviewThunk({
            review,
            gameId
        }))
        setReview('')
    }

    if (currentUser && currentUser.role === "REVIEWER") {
        return(
            <>
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control">
                    </textarea>
                    <button className="btn btn-outline-info mt-2" onClick={handleCreateReview}>Create Review</button>
                </div>
            </>
        )
    } else {
        return(
            <>
                <ul className="list-group">
                    {
                        reviews.map((review) =>
                            <li className="list-group-item">
                                {review.author.username}: {review.review}
                            </li>
                        )
                    }
                </ul>
            </>
        )
    }
}
export default ReviewsComponent