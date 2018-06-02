import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FooterPage from '../../components/FooterPage';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {}
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(FooterPage));
