import {Post} from "./post";

export class PostContent {
  id!: number;
  num!: string;
  name!: string;
  type!: string;
  desc!: string;
  img!: File[];
  post!: Post | number;
}
