import React, { Component } from 'react';

class Value extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        const compra = (this.state.item.codigo === 'CLP') ? parseFloat(this.state.item.compra).toFixed(4) : parseFloat(this.state.item.compra).toFixed(2);
        const venta = (this.state.item.codigo === 'CLP') ? parseFloat(this.state.item.venta).toFixed(4) : parseFloat(this.state.item.venta).toFixed(2);

        return (
            <div className="card-3">
                <header>
                    <h3>{this.state.item.nombre}</h3>
                </header>
                <div className="card_body">
                    <p><span className="left">Compra:</span> <span className="right"><strong> {compra}</strong></span></p>
                    <p><span className="left">Venta:</span> <span className="right"><strong> {venta}</strong></span></p>
                </div>
            </div>
        )
    }
}

export default Value;