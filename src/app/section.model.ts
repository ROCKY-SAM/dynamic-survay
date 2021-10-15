import {Item} from "./item.model";
export class Section {
    sectionIndex!:number;
    sectionHeader!:string;
    subSections:Section[]=[];
    questions : Item[]=[];
}
