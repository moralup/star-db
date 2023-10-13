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
        const result = people.results.map((person, i) => this.transformPeople(person, i+1));
        return result;
    }

    getPerson(id){
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets(){
        const res = await this.getResource('/planets/');
        return res.results;
    }

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`);
        return this.transformPlanet(planet, id);
    }

    async getAllStarships(){
        const res = await this.getResource('/starships/');
        return res.results;
    }

    getStarships(id){
        return this.getResource(`/starships/${id}`);
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

}


