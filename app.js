export default class Animals {

    constructor(name, weight, height, teeth, apex, diet, img) {
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.teeth = teeth;
        this.apex = apex;
        this.diet = diet;
        this.img = img;
    }
    printItem() {
        console.log('YEs')
        // return `<li onclick="Controller.order('${this.name}')">${this.name}${this.img}: ${this.apex} (${this.diet})</li>`
    }
}

// REVIEW