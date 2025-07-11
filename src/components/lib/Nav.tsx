import { Link } from 'react-router-dom';


const Nav = () => {

  
    return (
        <>
            <div>
            
                    <div>
                        <ul className="flex justify-center space-x-4 text-sm font-medium pb-10">
                                <li className="underline"><Link to="/">Base</Link></li>
                                <li className="underline"><Link to="/interface">Interface</Link></li>
                        </ul>
                    </div>
            </div>

        </>
    );
}

export default Nav;