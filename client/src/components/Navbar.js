import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const {loginStatus,loginCbHandler} = props
  const refresh = () => {
    window.location.href = "/";
  };
  const loginHandler = ()=>{
    loginCbHandler(true)
  }
  const logoutHanler = ()=>{
    localStorage.clear()
    refresh()
    loginCbHandler(false)
  }

  const [username, setUsername] = useState(null)
  useEffect(() => {
    setUsername(localStorage.getItem("username"))
  
    return () => {
      
    }
  }, [username])
  
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{backgroundColor : "#2AAEB0"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" onClick={()=>refresh()} to="/">Articles</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" onClick={()=>refresh()} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
          </li>
          {loginStatus ? (
            <>
             <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/posting">Draft</Link>
            
          </li>
           <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/profile">{username}</Link>
           
         </li>
            </>
           
          ) : (
            null
          )}
          

        </ul>
        <form class="d-flex" role="search">
          {loginStatus ? (
            <a onClick={()=> logoutHanler()} href='#'class="btn btn-dark" type="submit">Logout</a>
          ) : (
            <>
            <Link onClick={()=> loginHandler()} to='/login'class="btn btn-dark"  type="submit">Login</Link>
            <div style={{paddingRight: "20px"}}></div>
            <Link to='/register' class="btn btn-dark" type="submit">Register</Link>
            </>
            
            )
          
          }
        
      </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
