import React, { Component } from 'react';
import Logo from '../assets/images/logo.svg';
import ApiService from '../services/Apiservices'
import Endpoints from "../services/Endpoints";

import Value from "./Value";

class Values extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        ApiService.getItems(Endpoints.values)
            .then(resp => {
                this.setState({ data: resp.cotizaciones }, () => {
                    //console.log(this.state)
                });
            })
            .then(resp => {
                this.setState({ loading: false }, () => {
                    //console.log(this.state)
                    
                });
            })
            .catch(err => console.log(err))
    }

    render() {
        const item = this.state.data.map((e, i) => {
            return <Value key={i} item={e} />
        })
        return (
            <div className="container-fluid values fade">
                <div className="container">
                    <div className={this.state.loading !== true ? "values__content" : "hidden"}>
                        <ul>
                            <li>
                                <img src={Logo} alt="Supervielle" />
                            </li>
                            <li>
                                <h2>Cambiá dólares y euros convenientemente y sin moverte de tu casa. Ahora extendimos el horario de 8 a 20h</h2>
                            </li>
                            <li>
                                <div className="values__content_card">
                                    {item}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Values;