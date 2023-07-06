import { Link } from "react-router-dom"

import Button from "../components/Button"

function Login() {

    const handleEvent = () => {
        alert("I was clicked");
      };
    

  return (
    <>
     <div className="login-form bg-gray-300 m-auto px-4 py-8">
        <form action="" className="">
            <article className="flex flex-col">
                <label className="my-2" htmlFor="">Usuario o e-mail</label>
                <input className="h-[32px] pl-2" type="text" />
            </article>
            <article className="flex flex-col mt-2">
                <label className="my-2" htmlFor="">Contraseña</label>
                <input className="h-[32px] pl-2" type="password" />
            </article>
        </form>
        <Link className="block ml-auto w-max mt-2">Olvidé mi contraseña</Link>
        <Link to="/user" className="mt-6 block m-auto border border-solid border-gray-700 px-16 text-center py-2">Ingresar</Link>
     </div>
    </>
  )
}

export default Login