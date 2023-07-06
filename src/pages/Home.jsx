import { Link } from "react-router-dom"

function Home() {

    return (
      <>
        <Link className="block ml-auto w-max mr-4 mt-2" to="login">Ingresar</Link>
        <div className="flex items-center justify-center h-full">
         
          <img src="src/assets/images/LogoOlivia.png" alt="" className="w-1/2 translate-y-[-100px]"/>
        </div>
      </>
    )
  }
  
  export default Home