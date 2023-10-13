import React, { Component } from 'react';
import './item-list.css';


export default class ItemList extends Component{
    
    onClickUl = (e) => {
        console.log(e.target.id)
        this.props.setIndex(e.target.id);
    };
    render(){
        const { data } = this.props;
        return (
            <ul onClick={this.onClickUl} 
                className="list">
                { data.map((el, i) => {
                    return <li id={ i } 
                        key={ i }
                        className="list-item">
                        { el.name }
                    </li>;
                }) }
            </ul>
        );
    }
}