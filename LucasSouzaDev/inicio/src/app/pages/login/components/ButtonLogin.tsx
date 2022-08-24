
interface IButtonLoginProps {
    type?: "button" | "submit" | "reset"
    onClick: () => void
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick}) => {
    return (
        <button className=" rounded-md bg-blue-300 pl-2 pr-2 m-6"
            type ={type}
            onClick={onClick}>
            Entrar
        </button>



    )
}