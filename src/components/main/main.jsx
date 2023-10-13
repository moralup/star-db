import { Component } from 'react';
import ItemList from '../item-list';
import ImageWithDescription from '../image-with-description';
import SwapiService from '../../service/swapi-service';
import MyImage from '../../image/cat-unknown.jpg';
import './main.css';

export default class Main extends Component{
    
    state = {
        data: [
            { name: 'unknown' },
            { name: 'unknown' },
            { name: 'unknown' },
            { name: 'unknown' }],
        unknown: { name: 'unknown', gender: 'unknown', height: 'unknown', mass: 'unknown' },
        index: 0,
    };

    constructor(){
        super();
        this.setData();
    }
    swapiService = new SwapiService();
    
    setData = async () => {
        const people = await this.swapiService.getAllPeople();
        this.setState({ data: people });
    }

    setIndex = (i) => {
        this.setState({ index: i })
    }
    render(){
        return (
            <div className="main-bottom">
                <ItemList setIndex={this.setIndex} data={this.state.data}/>
                <ImageWithDescription
                    url={ this.state.index !==0 ?
                        this.state.data[this.state.index].url : 
                        MyImage
                    }
                    data1={this.state.index !==0 ? 
                        this.state.data[this.state.index] :
                        this.state.unknown}
                    size="min"/>
            </div>
        );
    }
}

