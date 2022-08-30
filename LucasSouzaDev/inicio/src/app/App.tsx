import { Routes} from './routes'
import { LoggedUserContextProvider } from './shared/contexts'



export function App() {
  return (
    <LoggedUserContextProvider>
      <Routes />
    </LoggedUserContextProvider>
  );
}