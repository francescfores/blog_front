import {Post} from "./post";
import {PostContentTypeAttribute} from "./post-content-type-attribute";

export class PostContentType {
  id!: number;
  name!: string;
  desc!: string;
  attributes: PostContentTypeAttribute[]=[];
}
