import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

// import * as categoriesActions from "../../redux/actions/category/categoriesActions";
// import { bindActionCreators } from "redux";
import { getAssetCategories } from "../../redux/actions/category/categoriesActions";

class CategoriesDashboard extends React.Component {

  initialState = {
    categories: {
      id: "1",
      title: "hELLO"
    }
  };

  state = this.initialState;

  /*
  * Fetch categories once component is mounted.
  */
  componentDidMount() {
    this.props.getAssetCategories();
  }

  render(){
    console.log("props", this.props);
    console.log("SATTE", this.state);
    return (
      <div>
        {this.props.categories ? this.props.categories.length : '-'}
      </div>
    )
  }
}

CategoriesDashboard.propTypes = {
  // categories: PropTypes.array.isRequired,
  // actions: PropTypes.object.isRequired,
  // errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  getAssetCategories: () => dispatch(getAssetCategories())
  // actions: bindActionCreators(categoriesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesDashboard);
