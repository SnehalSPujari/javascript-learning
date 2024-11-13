let professor = {
    name: "Snehal Pujari",
    collegeName: "NKOCET",
    degrees: {
        Engineering:"CSE",
        MS:"Computer Science",
        PhD: "Adv. Computing"
    },
    certifications: ["Hacker Rank Participation","IFE course","Adv. Programming","Google cloud developer"],
}

console.log(professor);
console.log("==============add totalExperience property to object===================");

professor.totalExperience = "14 years";
console.log(professor);

console.log("================modification of existing property==============");
professor.name = "Subhash Pujari";
console.log(professor);

console.log("=================add new certificate in array at 2nd index=================");
professor.certifications.splice(2, 0,"Oracle Certified");
console.log(professor.certifications);
console.log(professor);



console.log("============log last element of certifications array====================");
console.log(professor.certifications[professor.certifications.length-1]);

console.log("============== traverse array using for of loop ===============");

for ( const element of professor.certifications)
    {
        console.log(element);
        
    }



