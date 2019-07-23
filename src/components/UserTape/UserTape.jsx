import React from 'react';
import style from './UserTape.module.scss';
import {Link} from 'react-router-dom';
import AddStaffContainer from "../../containers/AddStaffContainer";

export default class UserTape extends React.Component {
    render() {
        const StaffList = this.props.state.staffList.map((item) => {
            return (
                <Link to={'/PersonalPage/' + item.id} key={item.id} className={style.listItem}>
                    <img src={item.img}/>
                </Link>
            )
        });
        return (
            <div className={style.staffList}>
                {StaffList}
                <AddStaffContainer />
            </div>
        );
    }
}