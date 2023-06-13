import {Post} from "./post";
import {PostContentType} from "./post-content-type";

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
}
