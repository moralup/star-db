import { Component } from 'react';
import ImageWithDescription from '../image-with-description';
import Error from '../error/error';
import SwapiService from '../../service/swapi-service';
import didntLoadImage from '../../image/no-picture.jpg';

export default class RandomPlanet extends Component{
    state = {
        data: {
            name: 'unknown',
            population: 'unknown',
            diameter: 'unknown',
            rotationPeriod: 'unknown',
            url: undefined,
            errorMessage: 'no random planet today', 
        },
        error: false,
    };

    swapiService = new SwapiService();
    
    intervalFlag = null;

    componentDidMount(){
        this.updatePlanet();
        // this.intervalFlag = setInterval(this.updatePlanet, 8000);
    }
    i = 1
    updatePlanet = () =>{
        let rn = parseInt(Math.random() * 20);
        rn = rn === 0 || rn === 1 || rn === 20 ? 2 : rn;
        this.swapiService.getPlanet(rn)
            .then(data => this.setState({ data }),
                err => this.setState({ error: true }));
    };

    render(){
        const { data, error } = this.state;
        return <ImageWithDescription error={error} data1={ data } size="max"/>
    }
}