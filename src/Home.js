import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tkm from './image/tkm.png';

export const Home=()=>{
    const navigation=useNavigate();
    return(
        <div>
            <img src={tkm}  alt="logo" />
            <h1>TAŞ, KAĞIT, MAKAS OYUNU</h1>
            <Button variant="info" size="lg" onClick={()=>navigation('normal')}>Klasik Mod</Button>
            <Button variant="warning" size="lg" onClick={()=>navigation('zoroyun')}>Zor Oyun Modu</Button>
            <h2> 2 FARKLI OYUN MODU VARDIR.  
                KLASİK OYUN NORMAL TAŞ KAĞIT MAKAS OYUNUDUR. 
                ZOR OYUN  İSE KULLANICININ ÜST ÜSTE AYNI ÖGEYİ SEÇMESİNE İZİN VERMEZ.  </h2>
        </div>
    )
}



