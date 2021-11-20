import { Contact } from "./Interfaces";



const sayHello=(contact:Contact)=>{
    if("firstName" in contact){
        console.log("Hello " + contact.firstName);
    }
    
    if("name" in contact){
        console.log("Hello "+ contact.name);
    }
}

sayHello({
    firstName:"Kishor",
    name:"XYZ"
});