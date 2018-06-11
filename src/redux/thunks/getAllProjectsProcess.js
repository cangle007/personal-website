import pokemonBattle from '../../images/pokemonBattleDisplay.png';
import userProfile from '../../images/userProfileDisplay.png';
import toDos from '../../images/toDosDisplay.png';
import gmailInbox from '../../images/gmailInboxDisplay.png';
import pixelArt from '../../images/pixelArtDisplay.png';
import responsiveWeb from '../../images/responsiveWebDisplay.png';

export default function getAllProjectsProcess() {
  return (dispatch, getState) => {
    let arr = [
      {
        image: pokemonBattle,
        type: 'website',
        projectname: 'PokemonBattle'
      },
      {
        image: toDos,
        type: 'mobile',
        projectname: 'ToDos'
      },
      {
        image: responsiveWeb,
        type: 'website & mobile',
        projectname: 'ResponsiveWeb'
      },
      {
        image: pixelArt,
        type: 'website',
        projectname: 'PixelArt'
      },
      {
        image: userProfile,
        type: 'mobile',
        projectname: 'UserProfile'
      },
      {
        image: gmailInbox,
        type: 'website',
        projectname: 'Gmail-Inbox'
      }
    ];
    dispatch({ type: 'GET_ALL_PROJECTS', projects: arr });
  };
}
