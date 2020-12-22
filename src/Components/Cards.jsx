import React from 'react';
import cali from '../images/cali.jpg';
import iba from '../images/iba.jpg';
import haym from '../images/hayman.jpg';
import chabal from '../images/chabal.jpg';
import eals from '../images/eals.jpg';
import betsen from '../images/betsen.jpg';
import mccaw from '../images/mccaw.jpg';
import burger from '../images/burger.jpeg';

import {
  Border,
  BorderNz,
  BorderAus,
  BorderSud,
  ContainerPictureName,
  ContainerPictureNameNz,
  ContainerPictureNameAus,
  ContainerPictureNameSud,
  Details,
  DetailsAus,
  DetailsNz,
  DetailsSud,
  Name,
  NameAus,
  NameSud,
  Picture,
  FirstLine,
  SecondLine,
  ThirdLine,
} from '../Style/StyledCards.js';

export default function Cards() {
  return (
    <>
      <>
        <FirstLine>
          <Border>
            <ContainerPictureName>
              <Picture src={cali} alt="player rugby picture" />
              <Name>Christian Califano</Name>
            </ContainerPictureName>
            <Details>
              <h3>Poste: Pilier gauche</h3>
              <h3>Pays: France</h3>
              <h3>nb selections: 71</h3>
              <h3>taille: 1m80</h3>
              <h3>poids: 110 Kgs</h3>
            </Details>
          </Border>

          <Border>
            <ContainerPictureName>
              <Picture src={iba} alt="player rugby picture" />
              <Name>Raphaël Ibanez</Name>
            </ContainerPictureName>
            <Details>
              <h3>Poste: Talonneur</h3>
              <h3>Pays: France</h3>
              <h3>nb selections: 98</h3>
              <h3>taille: 1m80</h3>
              <h3>poids: 96 Kgs</h3>
            </Details>
          </Border>

          <BorderNz>
            <ContainerPictureNameNz>
              <Picture src={haym} alt="player rugby picture" />
              <Name>Carl Hayman</Name>
            </ContainerPictureNameNz>
            <DetailsNz>
              <h3>Poste: Pilier droit</h3>
              <h3>Pays: N.Zéland</h3>
              <h3>nb selections: 45</h3>
              <h3>taille: 1m93</h3>
              <h3>poids: 96 Kgs</h3>
            </DetailsNz>
          </BorderNz>
        </FirstLine>
      </>
      <>
        <SecondLine>
          <Border>
            <ContainerPictureName>
              <Picture src={chabal} alt="player rugby picture" />
              <Name>Sebastien Chabal</Name>
            </ContainerPictureName>
            <Details>
              <h3>Poste: Deuxième ligne</h3>
              <h3>Pays: France</h3>
              <h3>nb selections: 62</h3>
              <h3>taille: 1m91</h3>
              <h3>poids: 115 Kgs</h3>
            </Details>
          </Border>

          <BorderAus>
            <ContainerPictureNameAus>
              <Picture src={eals} alt="player rugby picture" />
              <NameAus>John Eals</NameAus>
            </ContainerPictureNameAus>
            <DetailsAus>
              <h3>Poste: Deuxième ligne</h3>
              <h3>Pays: Australie</h3>
              <h3>nb selections: 86</h3>
              <h3>taille: 2m</h3>
              <h3>poids: 115 Kgs</h3>
            </DetailsAus>
          </BorderAus>
        </SecondLine>
      </>
      <>
        <ThirdLine>
          <Border>
            <ContainerPictureName>
              <Picture src={betsen} alt="player rugby picture" />
              <Name>Serge Betsen</Name>
            </ContainerPictureName>
            <Details>
              <h3>Poste: Troisième ligne</h3>
              <h3>Pays: France</h3>
              <h3>nb selections: 62</h3>
              <h3>taille: 1m82</h3>
              <h3>poids: 100 Kgs</h3>
            </Details>
          </Border>

          <BorderNz>
            <ContainerPictureNameNz>
              <Picture src={mccaw} alt="player rugby picture" />
              <Name>Richie McCaw</Name>
            </ContainerPictureNameNz>
            <DetailsNz>
              <h3>Poste: Troisième ligne</h3>
              <h3>Pays: France</h3>
              <h3>nb selections: 62</h3>
              <h3>taille: 1m88</h3>
              <h3>poids: 105 Kgs</h3>
            </DetailsNz>
          </BorderNz>

          <BorderSud>
            <ContainerPictureNameSud>
              <Picture src={burger} alt="player rugby picture" />
              <NameSud>Shaulk Burger</NameSud>
            </ContainerPictureNameSud>
            <DetailsSud>
              <h3>Poste: Troisième ligne</h3>
              <h3>Pays: A. Sud</h3>
              <h3>nb selections: 86</h3>
              <h3>taille: 1m93</h3>
              <h3>poids: 114 Kgs</h3>
            </DetailsSud>
          </BorderSud>
        </ThirdLine>
      </>
    </>
  );
}
