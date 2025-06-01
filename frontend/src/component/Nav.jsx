import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 

const Nav = () => {
    const navigate = useNavigate();

    const userinfo = JSON.parse(localStorage.getItem("userInfo"));
    const isadmin = userinfo.isAdmin;

    const handlelogout = async () => {
        try {
            await axios.post("http://localhost:8000/api/logout", { withCredentials: true });
            localStorage.removeItem("userInfo");
            navigate("/login");
        } catch (error) {
            console.log("Logout error:", error.message);
        }
    };

    return (
        <div>
            <Link to="/">Home</Link>

            {isadmin && <Link to="/employeeList">Employee List</Link>}

            <p>{userinfo?.name}</p>
            <button onClick={handlelogout}>Logout</button>
        </div>
    );
};

export default Nav;
