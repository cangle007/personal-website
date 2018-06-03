import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SliderPage from '../../components/SliderPage';
import getRecomProcess from '../thunks/getRecomProcess';

function mapStateToProps(state, ownProps) {
  return { logoImages: state.logoImages };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_RecomProcess: () => dispatch(getRecomProcess())
  };
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {
    this.props.get_RecomProcess();
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(SliderPage));
