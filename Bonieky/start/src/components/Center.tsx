type Props = {
    name: string
    age: number
}

function Center({name, age}: Props) {
    return(
        <div>
            Olá { name } você tem { age } anos
        </div>
    )
}
export default Center