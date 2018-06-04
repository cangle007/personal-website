import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getAllProjectsProcess from '../thunks/getAllProjectsProcess';

import HomePage from '../../components/HomePage';

function mapStateToProps(state, ownProps) {
  return { projects: state.projects };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getAllProjects: () => {
      dispatch(getAllProjectsProcess());
    }
  };
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {
    this.props.getAllProjects();
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(HomePage));
