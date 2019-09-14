import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LandingPage from '../components/landing_page/LandingPage';
import { fetchImages } from '../actions/landingPageAction';
import { getImages, getImagesLoading } from '../selectors/allSelectors';

class AllImages extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    allImages: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch(); 
  }
  
  
  render() {
    const { allImages, loading } = this.props;
    if(loading || !allImages) return<h1>Loading</h1>;

    return<LandingPage allImages={allImages} />;
  }
}

const mapStateToProps = state => ({
  allImages: getImages(state),
  loading: getImagesLoading(state)
});



const mapDispatchProps = dispatch => ({
  fetch() {
    dispatch(fetchImages());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(AllImages);
