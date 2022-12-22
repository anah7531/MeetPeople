import { FaStar } from "react-icons/fa";

export function RatingStar({value}){
    const star = Array(5).fill(0);

    return (
        <div className="d-inline">
        {star.map((star, i) => <FaStar size={20} color={i < value ? "#ffc107" : "#e4e5e9"}/>)}
    </div>
    )
}