import React from 'react';
import { connect } from 'react-redux';
import UserTape from "../components/UserTape/UserTape";

function UserTapeContainer(props) {
    return (
        <UserTape state={props} />
    )
}
const mapStateToProps = function(state) {
    return {staffList: state.staff}
}

export default connect(mapStateToProps)(UserTapeContainer);