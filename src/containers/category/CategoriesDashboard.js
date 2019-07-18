import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getAssetCategories } from "../../redux/actions/category/categoriesActions";

class CategoriesDashboard extends React.Component {

  /*
  * Fetch categories once component is mounted.
  */
  componentDidMount() {
    this.props.getAssetCategories();
  }

  render(){
    return (
      <div>
        {this.props.categories ? this.props.categories.length : '-'}
      </div>
    )
  }
}

CategoriesDashboard.propTypes = {
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  categories: state.categories.data
});

const mapDispatchToProps = dispatch => ({
  getAssetCategories: () => dispatch(getAssetCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesDashboard);
