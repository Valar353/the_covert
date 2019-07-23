import React from 'react';
import style from './PersonalPage.module.scss';
import {store} from "../../redux/Store";
import {actionChangeMessage, SendComment} from "../../redux/action";
import UserTapeContainer from "../../containers/UserTapeContainer";

export default class PersonalPage extends React.Component {
    constructor(props) {
        super(props);
        this.dropParam();
        this.themeBlur = false;
        this.phoneBlur = false;
        this._myMessage = {};
    }

    dropParam = () => {
        this.isTheme = false;
        this.isMessage = true;
        this.isPhone = false;
    };

    changeMessage = (event) => {
        const target = event.target;
        let message;
        if (target.name === 'message') {
            (target.value.length < 129) ? this.isMessage = true : this.isMessage = false;
            message = {...this._myMessage, message: target.value};
        }
        if (target.name === 'theme') {
            (target.value.length > 4 && target.value.length < 81) ? this.isTheme = true : this.isTheme = false;
            message = {...this._myMessage, theme: target.value};
        }
        if (target.name === 'phone') {
            target.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g) ? this.isPhone = true : this.isPhone = false;
            message = {...this._myMessage, phone: target.value};
        }
        // console.log(message);
        store.dispatch(actionChangeMessage(message));
    };


    sendComment = (event) => {
        event.preventDefault();
        const data = this._myMessage;
        const id = this.props.state.personalData.id;
        store.dispatch(SendComment(id, data));
        this.dropParam();
    };


    blur = (event) => {
        if (event.target.name === 'theme') this.themeBlur = true;
        if (event.target.name === 'phone') this.phoneBlur = true;
        this.forceUpdate();
    };

    focus = (event) => {
        if (event.target.name === 'theme') this.themeBlur = false;
        if (event.target.name === 'phone') this.phoneBlur = false;
    };


    render() {
        this._myMessage = this.props.state.myMessage;
        if (this.props.state.personalData === undefined) return <div>Пользователь не найден</div>;
        let com;
        let comments = [];
        if (this.props.state.personalData.comments.length > 0) {
            com = JSON.parse(this.props.state.personalData.comments);
            console.log(com);

            com = com.reverse();
            for (let key in com) {
                // console.log(item)
                if (key > 4) break;
                const item = com[key];
                comments.push((
                    <div key={key} className={style.message}>
                        <div className={style.author}>{item.author}</div>
                        <div className={style.text}>{item.message}</div>
                    </div>
                ));
            }
            comments.reverse();
        } else {
            comments.push((<div key={0}>Комментариев пока нет, оставь его первым!</div>));
        }

        const item = this.props.state.personalData;
        return (
            <div className={style.personalPage}>
                <UserTapeContainer/>
                <div className={style.wrapper}>
                    <div className={style.personalData}>
                        <img src={item.img} width='150px' height='150px'/>
                        <div><p>Имя: </p><p>{item.name}</p></div>
                        <div><p>Фамилия: </p><p>{item.surname}</p></div>
                        <div><p>Должность: </p><p>{item.position}</p></div>
                        <div><p>Адрес: </p><p>{item.address}</p></div>
                    </div>
                    <div className={style.commentsWrapper}>
                        <h3>Комментарии:</h3>
                        <div className={style.comments}>
                            {comments}
                        </div>
                        <form onSubmit={this.sendComment}>
                            <h3>Написать комментарий</h3>
                            <div className={style.theme}>
                                <input value={this._myMessage.theme} onChange={this.changeMessage} name='theme'
                                       minLength='5' maxLength='80' placeholder='Введите тему'
                                       onFocus={this.focus} onBlur={this.blur}
                                />
                                {(this.themeBlur && !this.isTheme && this._myMessage.theme !== '') ? (
                                    <div className={style.error}>Тема должна быть не меньшее 5 символов и не более 80 </div>
                                ) : ''}
                            </div>
                            <div className={style.message}>
                                {/*<label>Сообщение:</label>*/}
                                <textarea className={style.message} value={this._myMessage.message}
                                          name='message' placeholder='Введите сообщение'
                                          maxLength='128' onChange={this.changeMessage}
                                />
                            </div>
                            <div className={style.phone}>
                                {/*<label>Телефон:</label>*/}
                                <input value={this._myMessage.phone} onChange={this.changeMessage} name='phone'
                                       minLength='7' maxLength='15' onFocus={this.focus} onBlur={this.blur}
                                       placeholder='Введите телефон'/>
                                {(this.phoneBlur && !this.isPhone && this._myMessage.phone !== '') ? (
                                    <div className={style.error}>Телефон введен некорректно</div>
                                ) : ''}
                            </div>
                            <div>
                                {(this.isPhone && this.isTheme && this.isMessage) ? (
                                    <button>Оставить коммент</button>
                                ) : (
                                    <button disabled>Оставить коммент</button>
                                )}

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};