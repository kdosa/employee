
//import { Link, useMatch,useResolvedPath } from "react-router-dom";

export default function Navbar()
{
return (
    <nav className = "nav">
        <a href = "/" className = "title">Software Spartans</a>
        <ul>
            <li>
            <a href="/pricing">Share Employee Data</a>
            </li>
            <li>
            <a href="/AddEmployee">Add Employee</a>
            </li>
            <li>
                H.R. Manager
            </li>
        </ul>
    </nav>
    )
} 
/*
function CustomLink({ to, children, ...props})
{
    //const path = window.location.pathname
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch( {path: resolvedPath.pathname, end: true});

    return <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    
}
*/