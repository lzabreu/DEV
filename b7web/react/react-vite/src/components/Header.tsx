type Props = {
  title:string
  pageNumber: string
}

const Header = ({ title, pageNumber }: Props) => {
  return (
    <header className="text-3xl bg-gray-300 text-white">
      <h1>{`${title} ${pageNumber}`}</h1>
      <hr />
    </header>
  )
}
export default Header