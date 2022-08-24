
import { Link } from 'react-router-dom';
import { LoggedUserContext } from '../../shared/contexts';
import { Menu } from '../../shared/components/Menu';
import { newLoggedUser } from '../../shared/hooks';

export const Dashboard = () => {
    const {loggedUser, logOut} = newLoggedUser()

    return (
        <div>
            <Menu />
            <p>{loggedUser}</p>
            <button className=" rounded-md bg-blue-300 pl-2 pr-2 m-6" 
            onClick={logOut}>Sair</button>
        </div>
    )
}