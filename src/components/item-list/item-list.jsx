import React, { Component } from 'react';
import Spinner from '../spinner';
import SwapiService from '../../service/swapi-service';
import './item-list.css';

export default class ItemList extends Component{
    
    state = {
        list: null,
    };

    swapiService = new SwapiService();
    
    componentDidMount(){
        this.setData();
        console.log('hello from item list')
    }

    setData = async () => {
        const people = await this.swapiService.getAllPeople();
        this.setState({ list: people });
    };

    onClickUl = (e) => {
        const person = this.state.list[e.target.id];
        this.props.getPerson(person);
    };

    render(){
        const { list } = this.state;
        if(!list) return <Spinner size="max"/>;
        return (
            <ul onClick={this.onClickUl} 
                className="list">
                { list.map((el, i) => {
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