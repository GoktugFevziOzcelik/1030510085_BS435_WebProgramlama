import React, {Component} from 'react';
import {Link} from "react-router-dom";


export class Home extends Component {
    render() {
        return (
            <div>
            <h2>Kedi oyunu</h2>
                <p className="welcome-text">
                    Kedi oyununa hoşgeldiniz kart seç
                </p>
                <div className="action">
                    <Link  to={"/match"} className="play" >Oyna</Link>
                </div>
            </div>
        );
    }
}
