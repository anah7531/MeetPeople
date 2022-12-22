import { useState } from "react"
import { RatingStar } from "./RatingStar"

export function CarouselEvaluation({evaluations = []}){
    const [index, setIndex] = useState(0)



    const next = ()=> setIndex(state => state + 1 >= evaluations.length ? 0 : state + 1)
    const prev = ()=> setIndex(state => state - 1 < 0 ? evaluations.length -1 : state -1)

    const show = () =>{
        if(evaluations.length === 0)
            return <p className='text-center'>Aucune évaluation</p>

        return(
            <div className="carousel carousel-dark slide text-center mt-2 ">
                <div className="carousel-inner ratio ratio-21x9">
                    <div className="carousel-item active">
                        <RatingStar value={evaluations[index].note} />
                        <p className="px-5 fs-6 mt-2">{evaluations[index].description}</p>
                    </div>
                </div>
                <button className="carousel-control-prev" onClick={prev} type="button" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" onClick={next} type="button" >
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }


    return(
        <div>
            <div className='text-center'><b>Les Evaluations</b></div>
            {show()}
      </div>
    )
}