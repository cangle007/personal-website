import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../../components/HomePage.jsx';
import getAllProjectsProcess from '../thunks/getAllProjectsProcess.js';

export default function HomeContainer() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllProjectsProcess());
  }, [dispatch]);

  return <HomePage projects={projects} />;
}
