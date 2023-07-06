import Footer from "../components/Footer"
import Header from "../components/Header";

import { Outlet, useLocation } from "react-router-dom";


function Root() {
    const cleanPath = ["/login", "/"]
    const location = useLocation()

    return (
        <div className="flex flex-col h-screen min-h-screen">
            {cleanPath.includes(location.pathname) ?  null : <Header />}
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer /> 
        </div>
    )
  }
  
  export default Root