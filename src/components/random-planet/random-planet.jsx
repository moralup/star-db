import { Component } from 'react';
import ImageWithDescription from '../image-with-description';
import SwapiService from '../../service/swapi-service';
import didntLoadImage from '../../image/no-picture.jpg';

export default class RandomPlanet extends Component{
    state = {
        data: {
            name: 'unknown',
            population: 'unknown',
            diameter: 'unknown',
            rotationPeriod: 'unknown',
            url: didntLoadImage, 
        },
    };

    constructor(){
        super();
        this.updatePlanet();
    }

    swapiService = new SwapiService();
    
    updatePlanet(){
        setInterval(async () => {
            let rn = parseInt(Math.random() * 20);
            rn = rn === 0 || rn === 1 || rn === 20 ? 2 : rn;
            const data = await this.swapiService.getPlanet(rn);
            this.setState({ data });
        }, 5000);
    }
    render(){
        const { data } = this.state;
        return(
            <ImageWithDescription data1={ data } size="max"/>
        );
    }
}