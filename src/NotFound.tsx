import './NotFound.css'

import Espantapajaros from './assets/espantapajaros.png'

export const NotFound = () => {

    const click = () => {
        console.log("click")
    }

    return (
        <div className='containerNotFound'>
            <div className='notFound'>
                <h2>404 NOT FOUND</h2>
            </div>
            <div className="box">
                <div className='containerImage'>
                    <div className="boxImage">
                        <img src={Espantapajaros} alt="Espantapajaros" />
                    </div>
                </div>
                <div className='containerText'>
                    <h1>I have bad news for you</h1>
                    <p className='parrafo'>The page you are looking for might be removed or is temporarily unavailable</p>
                    <button onClick={click}>back to homepage</button>
                </div>
            </div>
        </div>
    )
}
