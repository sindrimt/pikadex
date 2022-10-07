import { Url } from "url";

export default interface pokemon {
    name: string;
    id: number;
    image: Url;
    type: string;    
}