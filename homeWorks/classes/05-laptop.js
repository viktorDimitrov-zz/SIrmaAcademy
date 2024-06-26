class Laptop {
    isOn = false;

    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
    }

    get price() {
        const currentPprice = 800 - this.info.age * 2 + this.quality * 0.5;

        return currentPprice;
    }

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            this.quality--;
        }

    }

    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            this.quality--;
        }

    }

    showInfo() {
        let result = JSON.stringify(this.info);
        return result;
    }

}

let info = { producer: "Asus", age: 2, brand: "Zenbook" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
