import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService();
    return class AuthService extends React.Component{
        constructor(){
            super();
            this.state ={
                login:null
            }
        }


        componentWillMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace('/alreadyLoged')
            }
            else {
                try {
                    const profile = Auth.getProfile()
                    this.setState({
                        user: profile
                    })
                }
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/alreadyLoged')
                }
            }
        }

        render() {
            if (this.state.user) {
                return (
                    <AuthComponent history={this.props.history} user={this.state.user} />
                )
            }
            else {
                return null
            }
        }


    }
    }