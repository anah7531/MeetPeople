import { useState } from "react"

export function CarourelPhoto({photoList = []}){
    const [index, setIndex] = useState(0)

    const next = ()=> setIndex(state => state + 1 >= photoList.length ? 0 : state + 1)
    const prev = ()=> setIndex(state => state - 1 < 0 ? photoList.length -1 : state -1)

    const show = () =>{
        if(photoList.length === 0)
            return <p className='text-center'>Aucune évaluation</p>

        return(
            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active ratio ratio-1x1">
                        <img className="img" src={photoList[index]} alt="photo" />
                    </div>
                </div>
                <button className="carousel-control-prev" onClick={prev} type="button" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" onClick={next} type="button" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }


    return(
        <div>
            <p className='text-center'><b>Les Photos</b></p>
            {show()}
      </div>
    )
}