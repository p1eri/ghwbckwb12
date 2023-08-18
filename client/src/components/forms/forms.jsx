import React from 'react';
import './forms.css';

export class RegisterForm extends React.Component {
    handleSubmit = event => {
        // Отменяем стандартное поведение формы
        event.preventDefault();

        // Получаем значения из полей ввода
        const username = this.username.value;
        const email = this.email.value;
        const password = this.password.value;

        // Отправляем данные на микросервис API
        fetch('http://ip:port/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name: username })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error.message);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="registerUsername">Имя пользователя</label>
                    <input type="text" className="form-control" id="registerUsername" placeholder="Введите имя пользователя" ref={input => this.username = input} />
                </div>
                <div className="form-group">
                    <label htmlFor="registerEmail">Адрес электронной почты</label>
                    <input type="email" className="form-control" id="registerEmail" placeholder="Введите адрес электронной почты" ref={input => this.email = input} />
                </div>
                <div className="form-group">
                    <label htmlFor="registerPassword">Пароль</label>
                    <input type="password" className="form-control" id="registerPassword" placeholder="Введите пароль" ref={input => this.password = input} />
                </div>
                <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </form>
        );
    }
}

export class LoginForm extends React.Component {
    handleSubmit = event => {
        // Отменяем стандартное поведение формы
        event.preventDefault();

        // Получаем значения из полей ввода
        const email = this.email.value;
        const password = this.password.value;

        // Отправляем данные на микросервис API
        fetch('http://ip:port/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error.message);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="loginEmail">Адрес электронной почты</label>
                    <input type="email" className="form-control" id="loginEmail" placeholder="Введите адрес электронной почты" ref={input => this.email = input} />
                </div>
                <div className="form-group">
                    <label htmlFor="loginPassword">Пароль</label>
                    <input type="password" className="form-control" id="loginPassword" placeholder="Введите пароль" ref={input => this.password = input} />
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
            </form>
        );
    }
}