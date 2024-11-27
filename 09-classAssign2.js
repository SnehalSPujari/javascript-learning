//college class with attributes, constructor and display() to log
//complete object details

class College {
    name;
    city;
    coursesOffered;
    code;
    
    
    constructor(name,city,coursesOffered,code){
        this.name=name;
        this.city=city;
        this.coursesOffered=coursesOffered;
        this.code=code;
    }


    display(){
        console.log(`Name: ${this.name}`);
        console.log(`City: ${this.city}`);
        console.log(`Courses: ${this.coursesOffered}`);
        console.log(`Code: ${this.code}`);        
    }
}

//testing class with objects

const college1= new College("N.K.Orchid","Solapur","BE, B.tech, M.E., M.tech","1033");
college1.display();
console.log("========================================");

const college2= new College("D.Y.Patil Institutes","Pune","B.A., M.A., B.Sc, B.Arch"," 1022");
college2.display();
console.log("========================================");

const college3= new College("COEP","Pune","B.E., B.tech, M.E., M.tech", "1011");
college3.display();
console.log("========================================");

const college4= new College("WIT","Solapur","B.E., B.tech, M.E., M.tech","1000");
college4.display();
console.log("========================================");
