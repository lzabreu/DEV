import { Link } from 'react-router-dom';

export const Menu =() => {
    return (
        <div className='border border-2px border-blue-500 bg-blue-100 underline'>
            <Link to='/entrar' className='pl-4 pr-4'>Inicio</Link>
            <Link to='/inicio'>Dashboard</Link>
        </div>
    )
}