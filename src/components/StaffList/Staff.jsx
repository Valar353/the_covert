import React from 'react';
import style from './Staff.module.scss';
import {Link} from 'react-router-dom';
import {store} from "../../redux/Store";

export default class Staff extends React.Component {
    render() {
        if(this.props.state.staffList === undefined) return <div>Список сотрудников пуст</div>;
        const StaffList = this.props.state.staffList.map((item) => {
            return (
                <Link to={'/PersonalPage/' + item.id} key={item.id} className={style.listItem}>
                    <img src={item.img} />
                    <div>{item.name}</div>
                    <div>{item.surname}</div>
                    <div>{item.position}</div>
                </Link>
            )
        });
        console.log(store.getState());
        return (
            <div>
                <h1>список сотрудников:</h1>
                <div className={style.staffList}>
                    {StaffList}
                </div>
            </div>
        );
    }
}