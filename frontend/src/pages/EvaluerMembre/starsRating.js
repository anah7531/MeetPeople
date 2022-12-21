import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

const StarsRating = ({rating, setRating}) => {

    const star = Array(5).fill(0);
    const [hover, setHover] = useState(null);

    return (
        <div className="d-flex justify-content-end">
            {star.map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            className="star"
                            onClick={ () => setRating(ratingValue) }
                        />
                        <FaStar
                            size={35}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default StarsRating