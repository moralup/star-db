export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error( `Could not fetch ${this._apiBase}${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople(){
        const people = await this.getResource('/people');
        return people.results.map((person, i) => this.transformPeople(person, i+1));
    }

    async getPerson(id){
        const person = await this.getResource(`/people/${id}`);
        return this.transformPeople(person, id);
    }

    async getAllPlanets(){
        const planets = await this.getResource('/planets/');
        return planets.results.map((planet, id) => this.transformPlanet(planet, id));
    }

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`);
        return this.transformPlanet(planet, id);
    }

    async getAllStarships(){
        const res = await this.getResource('/starships/');
        return res.results.map((starship, id) => this.transformStarship(starship, id));
    }

    async getStarship(id){
        const starship = await this.getResource(`/starships/${id}`);
        return this.transformStarship(starship, id);
    }

    transformPlanet(planet, id){
        return {
            name: planet.name,
            population: planet.population,
            diameter: planet.diameter,
            rotationPeriod: planet.rotation_period,
            url: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
        };
    }

    transformPeople(person, id){
        return {
            name: person.name,
            gender: person.gender,
            height: person.height,
            mass: person.mass,
            url: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
        }
    }

    transformStarship(starship, id){
        return {
            name: starship.name,
            length: starship.length,
            class: starship.starship_class,
            price: starship.cost_in_credits,
            passengers: starship.passengers,
            url: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
        }
    }

}


