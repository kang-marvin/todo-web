import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getAssetCategories } from "../../redux/actions/category/categoriesActions";

class CategoriesDashboard extends React.Component {

  /*
  * Fetch categories once component is mounted.
  */
  componentDidMount() {
    console.log(" this.props.getAssetCategories();", this.props.getAssetCategories());
    this.props.getAssetCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        {categories ? categories.length : "No Categories Found"}
      </div>
    );
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
