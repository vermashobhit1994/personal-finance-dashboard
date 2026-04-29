import Image from "next/image"
import IncrementArrow from "../../../../assets/logo/up-arrow.svg";


import DecrementArrow from "../../../../assets/logo/down-arrow.svg";



export const CardAmountPercentage = ({ percentValue, isIncrement,altText }) => {
    return (
        <p>{percentValue} <Image src={
                isIncrement ? IncrementArrow : DecrementArrow
            }alt={isIncrement? }/>

        </p>
    )
}
