import { Contact, Organization, Person } from "./Interfaces"

const sayHello=(contact:Contact)=>{

    const IsPerson=(contact:Contact):contact is Person=>{
        return (contact as Person).firstName!==undefined;
    }

    const IsOrganization=(contact:Contact):contact is Organization=>{
        return (contact as Organization).name!==undefined;
    }

    if(IsPerson(contact)){
        console.log(contact.firstName);
    }

    if(IsOrganization(contact)){
        console.log(contact.name);
    }

}

sayHello({
    firstName:"Kishor"
});