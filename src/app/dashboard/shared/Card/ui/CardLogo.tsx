import Image from "next/image"; 
import { CardType } from "../types/CardType";


type CardLogo = CardType['logo']

export const CardLogo = ({ImagePath, AltText}:CardLogo) => {
  return (
    <Image src={ImagePath} alt={AltText} />
  )
}
