import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer({ item, buyItem }) {
  return (
    <div>
      <h2>Item - {item}</h2>
      <button onClick={buyItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
