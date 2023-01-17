import { ReactNode } from "react"

type Props = {
  url: string,
  legenda: string,
  children: ReactNode
}

export const Photo = ({url, legenda, children}: Props) => {
  return (
    <div>
      <img src={url} alt="Foto" />
      {children}      
      <p>{legenda}</p>
    </div>
  )
}
