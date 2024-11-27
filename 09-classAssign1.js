class Vehicle {
    company;
    model;
    fuelType;
    enginePower;
    cost;
    
    
    constructor(company,model,fuelType,enginePower,cost){
        this.company=company;
        this.model=model;
        this.fuelType=fuelType;
        this.enginePower=enginePower;
        this.cost=cost;
    }


    showDetails(){
        console.log(`Company: ${this.company}`);
        console.log(`Model: ${this.model}`);
        console.log(`Fuel type: ${this.fuelType}`);
        console.log(`Engine power: ${this.enginePower}cc`);
        console.log(`Price: ${this.cost} Rs`);
        
    }
}

//testing class with objects

const vehicle1= new Vehicle("Rolls-Royce","Ghost","Petrol","6750", "6,95,00,000");
vehicle1.showDetails();
console.log("========================================");

const vehicle2= new Vehicle("Lamborghini","Urus","Petrol","3996","3,15,00,000");
vehicle2.showDetails();
console.log("========================================");

const vehicle3= new Vehicle("Ferrari","Roma","Petrol","3855","3,76,00,000");
vehicle3.showDetails();
console.log("========================================");

const vehicle4= new Vehicle("Bentley Bentayga","Bentayga V8","Petrol","3996","4,10,00,000");
vehicle4.showDetails();
console.log("========================================");

const vehicle5= new Vehicle("Aston Martin","DBX","Petrol","3982","3,82,00,000");
vehicle5.showDetails();
console.log("========================================");