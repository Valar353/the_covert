import React from 'react';
import { connect } from 'react-redux';
import AddStaff from "../components/AddStaff/AddStaff";

function AddStaffContainer(props) {
    return (
        <AddStaff state={props} />
    )
}
const mapStateToProps = function(state) {
    return {length: state.staff.length}
}

export default connect(mapStateToProps)(AddStaffContainer);