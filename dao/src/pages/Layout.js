// Importing the Outlet component from 'react-router-dom' which is used for rendering child components of the current route
import { Outlet } from 'react-router-dom';
// Importing the Header component from the components directory
import Header from '../components/Header';

// Defining the Layout component responsible for rendering the overall layout structure of the application
export default function Layout({requestAccount, walletAddress}) {
    return (
        // Container div for the entire layout
        <div className='w-[100vw] md:h-[100vh] md:flex md:flex-col lg:h-[100vh] lg:flex lg:flex-col overflow-y-auto overflow-x-hidden relative'>
            {/* Rendering the Header component */}
            <Header requestAccount={requestAccount} walletAddress={walletAddress} />
            {/* Rendering the child components of the current route */}
            <Outlet />
        </div>
    )
}