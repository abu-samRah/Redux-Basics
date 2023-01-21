import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer({ numberOfIceCreams, buyIceCream }) {
  return (
    <div>
      <h2>Number of icecreams {numberOfIceCreams}</h2>
      <button onClick={buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
