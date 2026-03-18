import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import setupStore from './redux/setupStore';

import HomeContainer from './redux/containers/HomeContainer';
import HeaderContainer from './redux/containers/HeaderContainer';
import SliderContainer from './redux/containers/SliderContainer';
import DisplayAllProjectsContainer from './redux/containers/DisplayAllProjectsContainer';
import AboutMeContainer from './redux/containers/AboutMeContainer';
import ProjectPokemonBattleContainer from './redux/containers/ProjectPokemonBattleContainer';
import ProjectToDosContainer from './redux/containers/ProjectToDosContainer';
import ProjectResponsiveWebContainer from './redux/containers/ProjectResponsiveWebContainer';
import ProjectPixelArtContainer from './redux/containers/ProjectPixelArtContainer';
import ProjectUserProfileContainer from './redux/containers/ProjectUserProfileContainer';
import ProjectGmailInboxContainer from './redux/containers/ProjectGmailInboxContainer';
import ResumeContainer from './redux/containers/ResumeContainer';

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route
              path='/PokemonBattle'
              element={<ProjectPokemonBattleContainer />}
            />
            <Route path='/ToDos' element={<ProjectToDosContainer />} />
            <Route
              path='/ResponsiveWeb'
              element={<ProjectResponsiveWebContainer />}
            />
            <Route path='/PixelArt' element={<ProjectPixelArtContainer />} />
            <Route
              path='/UserProfile'
              element={<ProjectUserProfileContainer />}
            />
            <Route
              path='/Gmail-Inbox'
              element={<ProjectGmailInboxContainer />}
            />
            <Route path='/about' element={<AboutMeContainer />} />
            <Route path='/projects' element={<DisplayAllProjectsContainer />} />
            <Route path='/slider' element={<SliderContainer />} />
            <Route path='/header' element={<HeaderContainer />} />
            <Route path='/resume' element={<ResumeContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
