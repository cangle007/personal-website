import pokemonBattle from '../../images/pokemonBattle.jpg';
import userProfile from '../../images/userProfile.jpg';
import toDos from '../../images/toDos.jpg';
import gmailInbox from '../../images/gmailInbox.jpg';
import pixelArt from '../../images/pixelArt.jpg';
import responsiveWeb from '../../images/responsiveWeb.jpg';

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
        file: userProfile,
        display: 'mobile',
        name: 'userProfile',
        hover: 'hidden-userProfile'
      },
      { file: toDos, display: 'mobile', name: 'toDos', hover: 'hidden-toDos' },
      {
        file: gmailInbox,
        display: 'website',
        name: 'gmailInbox',
        hover: 'hidden-gmailInbox'
      },
      {
        file: pixelArt,
        display: 'website',
        name: 'pixelArt',
        hover: 'hidden-pixelArt'
      },
      {
        file: responsiveWeb,
        display: 'website & mobile',
        name: 'responsiveWeb',
        hover: 'hidden-responsiveWeb'
      }
      // userProfile,
      // toDos,
      // gmailInbox,
      // pixelArt,
      // responsiveWeb,
      // pokemonBattle,
      // pokemonBattle,
      // pokemonBattle
    ];
    dispatch({ type: 'GET_ALL_PROJECTS', projects: arr });
  };
}
