import React from 'react';
import style from './Staff.module.scss';
import {Link} from 'react-router-dom';
import {store} from "../../redux/Store";

export default class Staff extends React.Component {
    render() {
        if (this.props.state.staffList === undefined) return <div>Список сотрудников пуст</div>;
        const StaffList = this.props.state.staffList.map((item) => {
            return (
                <Link to={'/PersonalPage/' + item.id} key={item.id} className={style.listItem}>
                    <img src={item.img}/>
                    <div className={style.userInfo}>
                        <div><p>Имя: </p><p>{item.name}</p></div>
                        <div><p>Фамилия: </p><p>{item.surname}</p></div>
                        <div><p>Должность: </p><p>{item.position}</p></div>
                    </div>
                </Link>
            )
        });
        console.log(store.getState());
        return (
            <div>
                <h1>Список сотрудников</h1>
                <div className={style.staffList}>
                    {StaffList}
                </div>
            </div>
        );
    }
}