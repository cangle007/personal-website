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
        name: 'PokemonBattle',
        hover: 'hidden-pokemonBattle'
      },
      {
        file: toDos,
        display: 'mobile',
        name: 'ToDos',
        hover: 'hidden-toDos'
      },
      {
        file: gmailInbox,
        display: 'website',
        name: 'Gmail-Inbox',
        hover: 'hidden-gmailInbox'
      },
      {
        file: pixelArt,
        display: 'website',
        name: 'PixelArt',
        hover: 'hidden-pixelArt'
      },
      {
        file: userProfile,
        display: 'mobile',
        name: 'UserProfile',
        hover: 'hidden-userProfile'
      },
      {
        file: responsiveWeb,
        display: 'website & mobile',
        name: 'ResponsiveWeb',
        hover: 'hidden-responsiveWeb'
      }
    ];
    dispatch({ type: 'GET_ALL_PROJECTS', projects: arr });
  };
}
