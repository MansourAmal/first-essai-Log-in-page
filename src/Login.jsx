//importer 
import react,{ useState } from "react";
//création des varible
const Login = ({styleForm}) =>{
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[rememberme,setrememberme]=useState('');
    /*fonction */
    const hundlesubmit =(e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <a  
                            href="#l"  
                            className="a1">
                                Contacter nous
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#l" 
                            className="a1">
                                Sondage Partenaire
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#l" 
                            className="a1">
                                Sondage utulisateur
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#l" 
                            className="a1">
                                Connection
                            </a>
                    </li>
                </ul>
            </nav>
            <div
                style={styleForm}
                >
                <form 
                    onSubmit={hundlesubmit} 
                    className="form-login">
                    <h1>Connecter vous</h1>
                    <label 
                        for='email'
                        className="label_section">email</label>
                    <input 
                        value={email} 
                        type='email' placeholder="votreemail@gmail.com" 
                        id="email" 
                        name="email"  
                        onChange={(e) => setemail(e.target.value)} />
                        <div
                            className="label_section">
                            <label 
                                for='password' >
                                    password
                                </label>
                                <a href="/oublier" 
                                className="lien1">mot de pass oublier</a>
                        </div>
                    <input 
                        value={password} 
                        type='password' 
                        placeholder="votre mot de pass" 
                        id="password" 
                        name="password"
                        onChange={(e) => setpassword(e.target.value)}/>
                        
                    <a href="/inscrire"
                    className="lien2">s'inscrire</a>
                    <div 
                        className="margin_section">
                        <input 
                            type='checkbox' 
                            value={rememberme} 
                            id='rememberme' 
                            name='rememberme'
                            onChange={(e) => setrememberme(e.target.value)}/>
                        <label 
                            for='rememberme' >Remember me</label> 
                    </div>
                    <button
                        type="submit"
                        className="margin_section">
                            Connexion
                    </button>
                </form>
            </div>
       </div>
       

    )
        
   
}

export default Login;