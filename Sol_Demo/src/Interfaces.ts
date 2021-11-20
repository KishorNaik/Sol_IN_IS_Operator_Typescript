export interface Person{
    firstName?:string;
    lastName?:string;
}

export interface Organization{
    name?:string;
}

export type Contact =Person | Organization; // Person | Organization; 