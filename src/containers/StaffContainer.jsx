import React from 'react';
import { connect } from 'react-redux';
import Staff from "../components/StaffList/Staff";

function StaffContainer(props) {
    return (
        <Staff state={props} />
    )
}
const mapStateToProps = function(state) {
    return {staffList: state.staff}
}

export default connect(mapStateToProps)(StaffContainer);