import React, {useState} from 'react';
import Boggle from './boggle'
import Navbar from './navbar.component'





const App = () => {


    const [gameSize, setGameSize] = useState(4);

    const onNavClick = (e) =>{
            setGameSize(e.target.value)
    }
    
    return (
    <>
        <Navbar onClick={onNavClick}/>
        <Boggle boardSize={gameSize} />
    </>
    )


}

export default App;