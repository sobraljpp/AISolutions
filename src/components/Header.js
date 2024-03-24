import { useNavigate } from 'react-router-dom';
// Importing the logo image

// Defining the Header component responsible for rendering the header section of the application
export default function Header() {
    // Using the `useNavigate` hook to get the navigate function for routing
    const navigate = useNavigate();

    // Rendering the header section with logo, site name, and navigation links
    return (
        <header className="bg-sky-500 text-sky-100 py-4 px-6 shadow-lg sticky w-full top-0 z-20 backdrop-blur-lg">
            {/* Div containing header content */}
            <div className="flex justify-between items-center">
                {/* Button with logo and site name */}
                <button className="flex items-center space-x-2"
                    // Navigate to the home page when the button is clicked
                    onClick={() => navigate('/')}
                >
                    {/* Displaying the site name */}
                    <h1 className="text-lg font-semibold">Cool Name</h1>
                </button>
                {/* Navigation links */}
                <nav>
                    {/* Unordered list of navigation links */}
                    <ul className="flex flex-row items-center space-x-6">
                        {/* Navigation link for the Home page */}
                        
                        {/* Navigation link for the About page */}
                        <li>
                            <button className="bg-transparent px-6 py-2 rounded-lg hover:text-gray-300 hover:bg-cyan-500"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/')}
                            >
                                Login
                            </button>
                        </li>
                        {/* Navigation link for the Pdb page */}
                        <li>
                            <button className="bg-blue-600 w-[150px] py-2 rounded-lg hover:text-gray-300"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/')}
                            >
                                {false ? 
                                <p>Connect Wallet</p>
                                :
                                <p>Connected</p>
                                }
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}