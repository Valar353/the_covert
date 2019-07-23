import React from 'react';
import { connect } from 'react-redux';
import PersonalPage from "../components/PersonalPage/PersonalPage";

function PersonalPageContainer(props) {
    return (
        <PersonalPage state={props} />
    )
}
const mapStateToProps = function(state,ownProps) {
    let personalData;
    if(state.staff === undefined) return state;
    for(let item of state.staff){
        if(+item.id === +ownProps.match.params.id)
            personalData = item;
    }

    return {
        personalData: personalData,
        myMessage: state.myMessage
    }
}

export default connect(mapStateToProps)(PersonalPageContainer);