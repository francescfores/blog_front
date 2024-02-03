import {Post} from "./post";
import {PostContentType} from "./post-content-type";
import {PostContentTypeAttribute} from "./post-content-type-attribute";

export class PostContent {
  id!: number;
  num!: string;
  name!: string;
  type!: PostContentType;
  desc!: string;
  img!: File[]|[];
  post!: Post | number;
  created_at!: string;
  images: any;
  attributes!: PostContentTypeAttribute[];
  subcontents!: PostContent[];
  component!: PostContent;
  subcomponent_id!: number;
  subcomponent_attributes!: PostContentTypeAttribute[];
  parents!: PostContent[];
  recycled_id!: number;
  copied_id!: number;
  global!: any;
  copy_childs!: any;
  subcomponents:PostContent[]=[];
}
