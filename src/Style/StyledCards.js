import styled from 'styled-components';
import coq from '../images/coq.gif';
import fougere from '../images/fougere.png';
import wallabie from '../images/wallabie.png';
import springbok from '../images/springbok.png';

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2vh;
`;

export const ThirdLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

// FR

export const Border = styled.div`
  height: 32vh;
  width: 10vw;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #1e3586;
  background-color: #1e3586;
  &:hover {
    transform: scale(1.2) translateY(-5vh);
  }
`;

export const ContainerPictureName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid blue;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #1e3586;
`;

export const Picture = styled.img`
  height: 10vh;
  width: 5vw;
`;

export const Name = styled.h2`
  color: white;
  font-size: 1.7vh;
  font-weight: bold;
`;

export const Details = styled.div`
  background-image: url(${coq});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 5%;
  align-items: flex-start;
  & > * {
    padding: 4%;
  }
`;

//

//NZ
export const BorderNz = styled.div`
  height: 32vh;
  width: 10vw;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  background-color: black;
  &:hover {
    transform: scale(1.2) translateY(-5vh);
  }
`;

export const ContainerPictureNameNz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid white;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: black;
`;

export const DetailsNz = styled.div`
  background-image: url(${fougere});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  align-items: flex-start;
  & > * {
    padding: 4%;
  }
`;

//Aus

export const BorderAus = styled.div`
  height: 32vh;
  width: 10vw;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #396e4a;
  background-color: #f5d465;
  &:hover {
    transform: scale(1.2) translateY(-5vh);
  }
`;

export const ContainerPictureNameAus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid #396e4a;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #f5d465;
`;

export const DetailsAus = styled.div`
  background-image: url(${wallabie});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  align-items: flex-start;
  & > * {
    padding: 4%;
  }
`;

export const NameAus = styled.h2`
  color: black;
  font-size: 1.7vh;
  font-weight: bold;
`;
//A.sud

export const BorderSud = styled.div`
  height: 32vh;
  width: 10vw;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #f4bb32;
  background-color: #274c26;
  &:hover {
    transform: scale(1.2) translateY(-5vh);
  }
`;

export const ContainerPictureNameSud = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid #f4bb32;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #274c26;
`;

export const DetailsSud = styled.div`
  background-image: url(${springbok});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  align-items: flex-start;
  & > * {
    padding: 4%;
  }
`;
export const NameSud = styled.h2`
  color: black;
  font-size: 1.7vh;
  font-weight: bold;
`;
