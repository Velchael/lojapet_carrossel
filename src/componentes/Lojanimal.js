import React from "react";
import './Cardanimais.css';
import{Link} from 'react-router-dom';
import Cardanimal from "./Cardanimal";
export default function Lojanimal(){
    return(

        <div className="presenta_css">
        
        <nav>
            <ul>
                <li>

                <div>
                 <Cardanimal
                  image="https://cms.cobasi.com.br/uploads/Passaros_2x_28c0843bf2_9e7d18cb3d.png" alt="Pássaros" loading="lazy" height="60"
                  name="Alimentos para Pasaro"
                  phone="1.Power_Pasaro"
                  email="2.Nutri_Pasaro"
                 />
                <Cardanimal
               
                  image="https://cms.cobasi.com.br/uploads/Peixes_2x_eb3414de4e_6f28d2e6ad.png" alt="Peixes" loading="lazy" height="60"
                  name="Alimentos para Piexes"
                  phone="1.Power_Peixe"
                  email="2.Nutri_Peixe"
                />
                <Cardanimal

                  image="https://cms.cobasi.com.br/uploads/Outros_pet_2x_bdecd908f1_4ea7085b43.png" alt="Outros Pets" loading="lazy" height="60"
                  name="Alimentos para Colhelo"
                  phone="1.Power_Colhelo"
                  email="2.Nutri_Colhelo"
                 />
                 </div> 
                </li>
                <li>
                  <Link to="/Apresentação"style={{ textDecoration: 'none',color: "white"}}>..[ RETORNAR A PÁGINA INICIAL ]..</Link>
                </li>
            </ul>
        </nav>

       </div>
        
    ) 
}
