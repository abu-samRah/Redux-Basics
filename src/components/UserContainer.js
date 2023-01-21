import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ fetchUsers, userData }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  if (userData.loading) {
    return <h2>loading</h2>;
  }
  if (userData.error) {
    return <h2>Error: {userData.error}</h2>;
  }
  return userData.users.map((user) => <div>{user.name}</div>);
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
