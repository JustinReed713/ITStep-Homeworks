'use strict';

// --------------------------------------- declaration main class of inheritance chain --------------------------------------- //

class Pokemon {  //   I know that Pokémon is a trademark and there is a letter "é" in its name. But its easier to create a class through the console

    constructor(combatPower, healthPoints, name) {  //   type of arguments for constructor (name: string, combatPower: number, healthPoints: number)

        this._name = (name != undefined) ? name : this.__proto__.constructor.name;  //   if name was not given then tooks name of class
        this.combatPower = combatPower;
        this.healthPoints = healthPoints;
        this.learnedAttacks = ['Scratch', 'Hyper Fang'];  //   basic attacks for all Pokémons
    }

    /*   setters   */
    setName(name) {
        this._name = name;
    };

    /*   getters   */
    getName() {
        return this._name;
    };

    /*   publick methods   */
    say() {
        return `${this.__proto__.constructor.name.slice(0, 2)} - ${this.__proto__.constructor.name}`
    };

    scratch() {  //   basic fast attack
        return this.combatPower / 5;
    };

    hyperFang() {  //   basic massive attack
        return this.combatPower / 3;
    };

    attack(target, typeAttack) {  //   method that allow Pokémons attack; type of arguments (target: object, typeAttack: string['fast', 'massive'])
        if (arguments.length == 2) {
            let damage = 0;
            if (typeAttack === 'fast') {
                damage = Math.round(this.scratch());
            };
            if (typeAttack === 'massive') {
                damage = Math.round(this.hyperFang());
            };
            target.healthPoints -= damage;
            this.say();
            console.log(`${this.getName()} damaged ${target.getName()} with ${typeAttack} attack on ${damage} health points.`);
        } else {
            console.log(`${this.getName()} cant attack.`);
        };
        return `${target.getName()} has ${target.healthPoints} health points.`;
    };

    /*   static methods   */
    static evolve(evolvingObj) {  //   evolve pokemon to next phase (certainly if it could);
        if ((evolvingObj.evolvePhase != 'Upper') && (evolvingObj.evolvePhase != undefined)) {
            return Object.assign(new evolvingObj.__proto__.constructor.__proto__.prototype.constructor,
                {
                    _name: (evolvingObj._name != evolvingObj.__proto__.constructor.name) ? evolvingObj._name : evolvingObj.__proto__.constructor.__proto__.name,
                    healthPoints: (evolvingObj.healthPoints * 2),
                    combatPower: (evolvingObj.combatPower * 2)
                }
            );
        } else {
            console.log('It cant evolve');
            return evolvingObj;
        };
    };

};

// ---------------- declaration of four identical in meaning and lexically classes but raising some diversity ---------------- //

class FireType extends Pokemon {  //   this class contain methods for 'attacks' of fire type Pokémons
    constructor(name, combatPower, healthPoints) {  //   constructor arguments (string, number, number, boulean)
        super(name, combatPower, healthPoints);
        Object.defineProperty(this, 'type', {
            value: "Fire",
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    /*   publick methods   */
    /*   some methods calculating the damage of the attacks inherent in the fire type   */
    ember() {
        return this.combatPower / 4;
    };

    fireSpin() {
        return this.combatPower / 3;
    };

    fireFang() {
        return this.combatPower / 2;
    };

    flameWheel() {
        return this.combatPower / 2;
    };

    flamethrower() {
        return this.combatPower * 1.5;
    };

    heatWave() {
        return this.combatPower * 1.2;
    };

    fireBlast() {
        return this.combatPower;
    };

    overHeat() {
        return this.combatPower * 2;
    };

    attack(target, typeAttack) {  //   reload method; arguments (target: object, typeAttack: string['fast','massive'])
        if (arguments.length == 2) {  //   checking for all arguments
            let damage = 0,
                modifier = 1;
            switch (target.type) {  //   damage modifier depended on target type
                case 'Fire':
                    modifier = 0.75;
                    break;
                case 'Grass':
                    modifier = 1.2;
                    break;
                case 'Electric':
                    modifier = 1;
                    break;
                case 'Water':
                    modifier = 0.5;
                    break;
            };
            if (typeAttack === 'fast') {  //   calling damage calculator for fast attack
                switch (this.learnedAttacks[0]) {
                    case 'Ember':
                        damage = this.ember();
                        break;
                    case 'Fire Spin':
                        damage = this.fireSpin();
                        break;
                    case 'Fire Fang':
                        damage = this.fireFang();
                        break;
                    case 'Scratch':
                        damage = this.scratch();
                        break;
                    default:
                        return `${this.getName()} cant attack.`
                };
            };
            if (typeAttack === 'massive') {  //   calling damage calculator for massive attack
                switch (this.learnedAttacks[1]) {
                    case 'Flame Wheel':
                        damage = this.flameWheel();
                        break;
                    case 'Flamethrower':
                        damage = this.flamethrower();
                        break;
                    case 'Heat Wave':
                        damage = this.heatWave();
                        break;
                    case 'Fire Blast':
                        damage = this.fireBlast();
                        break;
                    case 'Over Heat':
                        damage = this.overHeat();
                        break;
                    case 'Hyper Fang':
                        damage = this.hyperFang();
                        break;
                    default:
                        return `${this.getName()} cant attack.`
                };
            };
            target.healthPoints -= Math.round(damage * modifier);
            console.log(`${this.getName()} damaged ${target.getName()} with ${typeAttack} attack on ${damage} health points.`);
        } else {
            return `${this.getName()} cant attack.`;
        };
        return (target.healthPoints <= 0) ? `${target.getName()} is fainted.` : `${target.getName()} has ${target.healthPoints} health points.`;
    };

    /*   static methods   */
    static learnNewAttack(obj, typeAttack) {  //   learning new attack of Fire type; arguments (obj: object, typeAttack: string['fast', 'massive'])
        if ((arguments.length == 2) && (obj.type == 'Fire')) {
            let indexType;
            switch (typeAttack) {
                case 'fast':
                    indexType = 0;
                    break;
                case 'massive':
                    indexType = 1;
                    break;
                default:
                    return 'Nothing to learn.';
            };
            let possibleAttacks = [['Ember', 'Fire Spin', 'Fire Fang'], ['Flame Wheel', 'Flamethrower', 'Heat Wave', 'Fire Blast', 'Over Heat']];
            console.log(`${obj.getName()} tried to learn new attack.`);
            let indexAttack = +prompt(`What ${typeAttack} attack do you want to learn? \n ${possibleAttacks[indexType].map((item, index = 0) => `${index + 1}  -  ` + item).join(`\n `)} \n Enter number in field below`);
            if (isNaN(indexAttack) || indexAttack === null) {
                return 'Nothing to learn.';
            };
            obj.learnedAttacks[indexType] = possibleAttacks[indexType][indexAttack - 1];
            return `${obj.getName()} succesfully learned ${obj.learnedAttacks[indexType]}`;
        } else {
            return 'Nothing to learn.'
        }
    };

};

/*   classes below are similar and was copy-pasted, renamed and deserve only an external examination   */

class GrassType extends Pokemon {
    constructor(name, combatPower, healthPoints) {  //   constructor arguments (string, number, number, boulean)
        super(name, combatPower, healthPoints);
        Object.defineProperty(this, 'type', {
            value: "Grass",
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    /*   publick methods   */
    razorLeaf() {
        return this.combatPower / 4;
    };

    vineWhip() {
        return this.combatPower / 3;
    };

    bulletSeed() {
        return this.combatPower / 2;
    };

    petalBlizzard() {
        return this.combatPower / 2;
    };

    solarBeam() {
        return this.combatPower * 1.5;
    };

    powerWhip() {
        return this.combatPower * 1.2;
    };

    leafBlade() {
        return this.combatPower;
    };

    leafTornado() {
        return this.combatPower * 2;
    };

    attack(target, typeAttack) {  //   arguments (target: object, typeAttack: string['fast','massive'])
        if (arguments.length == 2) {  //   checking for all arguments
            let damage = 0,
                modifier = 1;
            switch (target.type) {  //   damage modifier depended on target type
                case 'Fire':
                    modifier = 0.75;
                    break;
                case 'Grass':
                    modifier = 1.2;
                    break;
                case 'Electric':
                    modifier = 1;
                    break;
                case 'Water':
                    modifier = 0.5;
                    break;
            };
            if (typeAttack === 'fast') {  //   calling damage calculator for fast attack
                switch (this.learnedAttacks[0]) {
                    case 'Razor Leaf':
                        damage = this.razorLeaf();
                        break;
                    case 'Vine Whip':
                        damage = this.vineWhip();
                        break;
                    case 'Bullet Seed':
                        damage = this.bulletSeed();
                        break;
                    case 'Scratch':
                        damage = this.scratch();
                        break;
                    default:
                        return `${this.getName()} cant attack.`
                };
            };
            if (typeAttack === 'massive') {  //   calling damage calculator for massive attack
                switch (this.learnedAttacks[1]) {
                    case 'Petal Blizzard':
                        damage = this.petalBlizzard();
                        break;
                    case 'Solar Beam':
                        damage = this.solarBeam();
                        break;
                    case 'Power Whip':
                        damage = this.powerWhip();
                        break;
                    case 'Leaf Blade':
                        damage = this.leafBlade();
                        break;
                    case 'Leaf Tornado':
                        damage = this.leafTornado();
                        break;
                    case 'Hyper Fang':
                        damage = this.hyperFang();
                        break;
                    default:
                        return `${this.getName()} cant attack.`
                };
            };
            target.healthPoints -= Math.round(damage * modifier);
            this.say();
            console.log(`${this.getName()} damaged ${target.getName()} with ${typeAttack} attack on ${damage} health points.`);
        } else {
            return `${this.getName()} cant attack.`;
        };
        return (target.healthPoints <= 0) ? `${target.getName()} is fainted.` : `${target.getName()} has ${target.healthPoints} health points.`;
    };

    /*   static methods   */
    static learnNewAttack(obj, typeAttack) {  //   learning new attack of Grass type; arguments (obj: object, typeAttack: string['fast', 'massive'])
        if ((arguments.length == 2) && (obj.type == 'Grass')) {
            let indexType;
            switch (typeAttack) {
                case 'fast':
                    indexType = 0;
                    break;
                case 'massive':
                    indexType = 1;
                    break;
                default:
                    return 'Nothing to learn.';
            };
            let possibleAttacks = [['Razor Leaf', 'Vine Whip', 'Bullet Seed'], ['Petal Blizzard', 'Solar Beam', 'Power Whip', 'Leaf Blade', 'Leaf Tornado']];
            console.log(`${obj.getName()} tried to learn new attack.`);
            let indexAttack = +prompt(`What ${typeAttack} attack do you want to learn? \n ${possibleAttacks[indexType].map((item, index = 0) => `${index + 1}  -  ` + item).join(`\n `)} \n Enter number in field below`);
            if (isNaN(indexAttack)) {
                return 'Nothing to learn.';
            };
            obj.learnedAttacks[indexType] = possibleAttacks[indexType][indexAttack - 1];
            return `${obj.getName()} succesfully learned ${obj.learnedAttacks[indexType]}`;
        } else {
            return 'Nothing to learn.';
        };
    };

};


class ElectricType extends Pokemon {
    constructor(name, combatPower, healthPoints) {  //   constructor arguments (string, number, number, boulean)
        super(name, combatPower, healthPoints);
        Object.defineProperty(this, 'type', {
            value: "Electric",
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    /*   publick methods   */
    thunderFang() {
        return this.combatPower / 4;
    };

    voltSwitch() {
        return this.combatPower / 3;
    };

    spark() {
        return this.combatPower / 2;
    };

    thunder() {
        return this.combatPower / 2;
    };

    zapCannon() {
        return this.combatPower * 1.5;
    };

    wildCharge() {
        return this.combatPower * 1.2;
    };

    thunderBolt() {
        return this.combatPower;
    };

    thunderPunch() {
        return this.combatPower * 2;
    };

    attack(target, typeAttack) {  //   arguments (target: object, typeAttack: string['fast','massive'])
        if (arguments.length == 2) {  //   checking for all arguments
            let damage = 0,
                modifier = 1;
            switch (target.type) {  //   damage modifier depended on target type
                case 'Fire':
                    modifier = 0.75;
                    break;
                case 'Grass':
                    modifier = 1.2;
                    break;
                case 'Electric':
                    modifier = 1;
                    break;
                case 'Water':
                    modifier = 0.5;
                    break;
            };
            if (typeAttack === 'fast') {  //   calling damage calculator for fast attack
                switch (this.learnedAttacks[0]) {
                    case 'Thunder Fang':
                        damage = this.thunderFang();
                        break;
                    case 'Volt Switch':
                        damage = this.voltSwitch();
                        break;
                    case 'Spark':
                        damage = this.spark();
                        break;
                    case 'Scratch':
                        damage = this.scratch();
                        break;
                    default:
                        return `${this.getName()} cant attack.`
                };
            };
            if (typeAttack === 'massive') {  //   calling damage calculator for massive attack
                switch (this.learnedAttacks[1]) {
                    case 'Thunder':
                        damage = this.thunder();
                        break;
                    case 'Zap Cannon':
                        damage = this.zapCannon();
                        break;
                    case 'Wild Charge':
                        damage = this.wildCharge();
                        break;
                    case 'Thunder Bolt':
                        damage = this.thunderBolt();
                        break;
                    case 'Thunder Punch':
                        damage = this.thunderPunch();
                        break;
                    case 'Hyper Fang':
                        damage = this.hyperFang();
                        break;
                    default:
                        return `${this.getName()} cant attack.`
                };
            };
            target.healthPoints -= Math.round(damage * modifier);
            this.say();
            console.log(`${this.getName()} damaged ${target.getName()} with ${typeAttack} attack on ${damage} health points.`);
        } else {
            return `${this.getName()} cant attack.`;
        };
        return (target.healthPoints <= 0) ? `${target.getName()} is fainted.` : `${target.getName()} has ${target.healthPoints} health points.`;
    };

    /*   static methods   */
    static learnNewAttack(obj, typeAttack) {  //   learning new attack of Electric type; arguments (obj: object, typeAttack: string['fast', 'massive'])
        if ((arguments.length == 2) && (obj.type == 'Electric')) {
            let indexType;
            switch (typeAttack) {
                case 'fast':
                    indexType = 0;
                    break;
                case 'massive':
                    indexType = 1;
                    break;
                default:
                    return 'Nothing to learn.';
            };
            let possibleAttacks = [['Thunder Fang', 'Volt Switch', 'Spark'], ['Thunder', 'Zap Cannon', 'Wild Charge', 'Thunder Bolt', 'Thunder Punch']];
            console.log(`${obj.getName()} tried to learn new attack.`);
            let indexAttack = +prompt(`What ${typeAttack} attack do you want to learn? \n ${possibleAttacks[indexType].map((item, index = 0) => `${index + 1}  -  ` + item).join(`\n `)} \n Enter number in field below`);
            if (isNaN(indexAttack)) {
                return 'Nothing to learn.';
            };
            obj.learnedAttacks[indexType] = possibleAttacks[indexType][indexAttack - 1];
            return `${obj.getName()} succesfully learned ${obj.learnedAttacks[indexType]}`;
        } else {
            return 'Nothing to learn'
        };
    };

};


class WaterType extends Pokemon {
    constructor(name, combatPower, healthPoints) {  //   constructor arguments (string, number, number, boulean)
        super(name, combatPower, healthPoints);
        Object.defineProperty(this, 'type', {
            value: "Water",
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    /*   publick methods   */
    waterGun() {
        return this.combatPower / 4;
    };

    bubble() {
        return this.combatPower / 3;
    };

    splash() {
        return this.combatPower / 2;
    };

    hydroCannon() {
        return this.combatPower / 2;
    };

    hydroPump() {
        return this.combatPower * 1.5;
    };

    surf() {
        return this.combatPower * 1.2;
    };

    waterPulse() {
        return this.combatPower;
    };

    aquaJet() {
        return this.combatPower * 2;
    };

    attack(target, typeAttack) {  //   arguments (target: object, typeAttack: string['fast','massive'])
        if (arguments.length == 2) {  //   checking for all arguments
            let damage = 0,
                modifier = 1;
            switch (target.type) {  //   damage modifier depended on target type
                case 'Fire':
                    modifier = 0.75;
                    break;
                case 'Grass':
                    modifier = 1.2;
                    break;
                case 'Electric':
                    modifier = 1;
                    break;
                case 'Water':
                    modifier = 0.5;
                    break;
            };
            if (typeAttack === 'fast') {  //   calling damage calculator for fast attack
                switch (this.learnedAttacks[0]) {
                    case 'Water Gun':
                        damage = this.waterGun();
                        break;
                    case 'Bubble':
                        damage = this.bubble();
                        break;
                    case 'Splash':
                        damage = this.splash();
                        break;
                    case 'Scratch':
                        damage = this.scratch();
                        break;
                    default:
                        return `${this.getName()} cant attack.`
                };
            };
            if (typeAttack === 'massive') {  //   calling damage calculator for massive attack
                switch (this.learnedAttacks[1]) {
                    case 'Hydro Cannon':
                        damage = this.hydroCannon();
                        break;
                    case 'Hydro Pump':
                        damage = this.hydroPump();
                        break;
                    case 'Surf':
                        damage = this.surf();
                        break;
                    case 'Water Pulse':
                        damage = this.waterPulse();
                        break;
                    case 'Aqua Jet':
                        damage = this.aquaJet();
                        break;
                    case 'Hyper Fang':
                        damage = this.hyperFang();
                        break;
                    default:
                        return `${this.getName()} cant attack.`
                };
            };
            target.healthPoints -= Math.round(damage * modifier);
            this.say();
            console.log(`${this.getName()} damaged ${target.getName()} with ${typeAttack} attack on ${damage} health points.`);
        } else {
            return `${this.getName()} cant attack.`;
        };
        return (target.healthPoints <= 0) ? `${target.getName()} is fainted.` : `${target.getName()} has ${target.healthPoints} health points.`;
    };

    /*   static methods   */
    static learnNewAttack(obj, typeAttack) {  //   learning new attack of Water type; arguments (obj: object, typeAttack: string['fast', 'massive'])
        if ((arguments.length == 2) && (obj.type == 'Water')) {
            let indexType;
            switch (typeAttack) {
                case 'fast':
                    indexType = 0;
                    break;
                case 'massive':
                    indexType = 1;
                    break;
                default:
                    return 'Nothing to learn.';
            };
            let possibleAttacks = [['Water Gun', 'Bubble', 'Splash'], ['Hydro Cannon', 'Hydro Pump', 'Surf', 'Water Pulse', 'Aqua Jet']];
            console.log(`${obj.getName()} tried to learn new attack.`);
            let indexAttack = +prompt(`What ${typeAttack} attack do you want to learn? \n ${possibleAttacks[indexType].map((item, index = 0) => `${index + 1}  -  ` + item).join(`\n `)} \n Enter number in field below`);
            if (isNaN(indexAttack)) {
                return 'Nothing to learn.';
            };
            obj.learnedAttacks[indexType] = possibleAttacks[indexType][indexAttack - 1];
            return `${obj.getName()} succesfully learned ${obj.learnedAttacks[indexType]}`;
        } else {
            return 'Nothing to learn';
        };
    };

};

// --- now real shit. Next are evolutionary chains for different Pokémon of each type. In general, two chains for each type --- //

/*   evolutionary chains for Fire type Pokémons.
    Evolutionary forms are inherited in reverse order, that is, from the third to the first.
    From the point of view of human logic, this is wrong, from the point of view of programming, this allows you to create objects of the parent class through a static method or "to evolve"   */

/*   chain for Charmander   */
class Charizard extends FireType {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Upper';
    }

    /*   public methods   */
    say() {
        return `${this.__proto__.constructor.name.slice(0, 4)} - ${this.__proto__.constructor.name}`
    };
};

class Charmeleon extends Charizard {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Middle';
    }
};

class Charmander extends Charmeleon {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Lower';
    }
};

/*   chain for Vulpix   */
class Ninetales extends FireType {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Upper';
    }

    /*   public methods   */
    say() {
        return `${this.__proto__.constructor.name.slice(0, 2)} - ${this.__proto__.constructor.name}`
    };
};

class Vulpix extends Ninetales {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Lower';
    }

    /*   public methods   */
    say() {
        let copy = (obj) => {
            let str = obj.__proto__.constructor.name[1];
            for (let index = 0; index < 3; index++) {
                str = str + str;
            };
            return str;
        }
        console.log(`${this.__proto__.constructor.name.slice(0, 2)}${copy(this)}`);
        return `${this.__proto__.constructor.name}`
    };
};


/*   evolutionary chains for Grass type Pokémons. */
/*   chain for Bulbasaur   */
class Venusaur extends GrassType {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Upper';
    }

    /*   public methods   */
    say() {
        return `${this.__proto__.constructor.name.slice(0, this.__proto__.constructor.name.indexOf('saur'))} - saur`
    };
};

class Ivysaur extends Venusaur {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Middle';
    }
};

class Bulbasaur extends Ivysaur {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Lower';
    }
};

/*   chain for Tangela   */
class Tangrowth extends GrassType {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Upper';
    }

    /*   public methods   */
    say() {
        return `* slured sounds `
    };
};

class Tangela extends Tangrowth {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Lower';
    }
};


/*   evolutionary chains for Electric type Pokémons. */
/*   chain for Pichu   */
class Raichu extends ElectricType {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Upper';
    }

    /*   public methods   */
    say() {
        return `${this.__proto__.constructor.name.slice(0, this.__proto__.constructor.name.indexOf('chu'))} - chu`
    };
};

class Pikachu extends Raichu {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Middle';
    }
};

class Pichu extends Pikachu {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Lower';
    }
};

/*   chain for Voltorb   */
class Electrode extends ElectricType {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Upper';
    }

    /*   public methods   */
    say() {
        return `bzzzzzzzZZZZZZZZZZZZZZ     ${this.__proto__.constructor.name}!!!`
    };
};

class Voltorb extends Electrode {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Lower';
    }
};


/*   evolutionary chains for Water type Pokémons. */
/*   chain for Squirtle   */
class Blastoise extends WaterType {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Upper';
    }

    /*   public methods   */
    say() {
        return `${this.__proto__.constructor.name} !!!!!!`
    };
};

class Wartortle extends Blastoise {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Middle';
    }

    /*   public methods   */
    say() {
        console.log(this.__proto__.constructor.name);
        return super.say();
    };
};

class Squirtle extends Wartortle {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Lower';
    }
};

/*   chain for Psyduck   */
class Golduck extends WaterType {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Upper';
    }

    /*   public methods   */
    say() {
        return `${this.__proto__.constructor.name.slice(0, this.__proto__.constructor.name.indexOf('duck'))} - duck`
    };
};

class Psyduck extends Golduck {
    constructor(name, combatPower, healthPoints) {
        super(name, combatPower, healthPoints);
        this.evolvePhase = 'Lower';
    }
};