import { Ingridient } from 'src/app/_shared/ingridient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingridient[];

    constructor(name: string, desc: string, imagePath:string, ingredients: Ingridient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}