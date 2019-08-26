import { Img } from "./Img";

export class Profile {
  id: string;
  name: string;
  email: string;
  password: string;
  img: Img = new Img();
}
