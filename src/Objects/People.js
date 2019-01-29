export class People {
    constructor (apiObject){
        this.name = apiObject.name;
        this.height = apiObject.height;
        this.mass = apiObject.mass;
        this.hair_color = apiObject.hair_color;
        this.skin_color = apiObject.skin_color;
        this.eye_color = apiObject.eye_color;
        this.birth_year = apiObject.birth_year;
        this.gender = apiObject.gender;
    }
}