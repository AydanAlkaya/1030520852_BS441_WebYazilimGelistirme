import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tkm from './image/tkm.png';

export const Home=()=>{
    const navigation=useNavigate();
    return(
        <div>
            <img src={tkm}  alt="logo"/>
            <h1>TAŞ, KAĞIT, MAKAS OYUNU</h1>
            <Button onClick={()=>navigation('normal')}>Klasik Mod</Button>
            <Button onClick={()=>navigation('zoroyun')}>Zor Oyun Modu</Button>
            <h2>DSAFGFHJK</h2>
        </div>
    )
}



