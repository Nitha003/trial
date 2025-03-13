import './LoginPage.css'
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const handleuser = () => {
        navigate(`/login/judges/addcases`);
    };
    return(
        <>
        <div className="bosk">
            <h2 >LOGIN</h2>
            <div className="uname">
                <label>username</label>
                <input 
                    type="text"
                    required
                />
            </div>
            <div className="pw">
                <label>password</label>
                <input
                    type="password"
                    required
                />
            </div>
            <button type="button" onClick={handleuser}>Login</button>
        </div>
        </>
    );
};

export default Login;