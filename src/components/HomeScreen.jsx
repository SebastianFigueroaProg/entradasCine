import { TablaExcel } from "./TablaExcel";
import logo from '../assets/vamLogo.jpeg';
import logoKon from '../assets/logKonecta.jpeg';
import './homeScreen.css';

export const HomeScreen = () => {    

  return (
    <>
        <nav className="nav">
          <img src={logo} alt="logo" className="logoVam"/>
          <h2>Entradas Cine - Incentivo</h2>
          <img src={logoKon} alt="logo" className="logoKonecta"/>
        </nav>
        
        <TablaExcel/>
        
    </>
  )
}
