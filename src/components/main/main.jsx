import { Component } from 'react';
import ItemList from '../item-list';
import ImageWithDescription from '../image-with-description';
import MyImage from '../../image/cat-unknown.jpg';
import './main.css';

export default class Main extends Component{
    
    state = {
        person: { 
            name: 'unknown',
            gender: 'unknown', 
            height: 'unknown', 
            mass: 'unknown', 
            url: MyImage, 
        },
    };

    getPerson = (person) => {
        this.setState({ person })
    };
    
    render(){
        return (
            <div className="main-bottom">
                <ItemList getPerson={this.getPerson}/>
                <ImageWithDescription
                    data1={this.state.person}
                    size="min"/>
            </div>
        );
    }
}

