import pokemonBattle from '../../images/pokemonBattle.png';
import userProfile from '../../images/userProfile.png';
import toDos from '../../images/toDos.png';
import gmailInbox from '../../images/gmailInbox.png';
import pixelArt from '../../images/pixelArt.png';
import responsiveWeb from '../../images/responsiveWeb.png';

export default function getAllProjectsProcess() {
  return (dispatch, getState) => {
    let arr = [
      {
        file: pokemonBattle,
        display: 'website',
        name: 'pokemonBattle',
        hover: 'hidden-pokemonBattle'
      },
      {
        file: toDos,
        display: 'mobile',
        name: 'toDos',
        hover: 'hidden-toDos'
      },
      {
        file: gmailInbox,
        display: 'website',
        name: 'gmail-Inbox',
        hover: 'hidden-gmailInbox'
      },
      {
        file: pixelArt,
        display: 'website',
        name: 'pixelArt',
        hover: 'hidden-pixelArt'
      },
      {
        file: userProfile,
        display: 'mobile',
        name: 'userProfile',
        hover: 'hidden-userProfile'
      },
      {
        file: responsiveWeb,
        display: 'website & mobile',
        name: 'responsiveWeb',
        hover: 'hidden-responsiveWeb'
      }
    ];
    dispatch({ type: 'GET_ALL_PROJECTS', projects: arr });
  };
}
