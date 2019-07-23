import React from 'react';
import addIcon from '../../img/add.svg'
import {actionAddStaff} from "../../redux/action";
import {store} from "../../redux/Store";

export default class AddStaff extends React.Component {

    addStaff = () => {
        const i = Math.floor((Math.random() * 365) + 1);
        const iN = Math.floor((Math.random() * 10));
        const iS = Math.floor((Math.random() * 10));
        const iP = Math.floor((Math.random() * 10));
        const id = this.props.state.length.toString();
        const cat = 'http://www.iscalio.com/cats/' + i + '.jpg';
        const name = ['Александр','Максим','Артем','Даниил','Иван','Дмитрий','Кирилл','Андрей','Егор','Михаил'];
        const surname = ['Иванов','Смирнов','Кузнецов','Попов','Васильев','Петров','Соколов','Новиков','Федоров','Семенов'];
        const position = ['frontend','backend','UI/UX','SMM','Android-developer','Gamedev','QA','Java developer','C# developer','team leader'];
        store.dispatch(actionAddStaff({id, img:cat, name:name[iN], surname:surname[iS], position:position[iP], address: 'Адрес '+ id,comments:''}));
    };

    render() {

        return (
            <img src={addIcon} onClick={this.addStaff} style={{marginRight:'-5px'}} />
        );
    }
}