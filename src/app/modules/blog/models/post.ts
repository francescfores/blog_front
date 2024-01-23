import {PostContent} from "./post-content";

export class Post {
  id!: number;
  name!: string;
  subname!: string;
  desc!: string;
  img: File[]|[]=[];
  contents: PostContent[]|[]=[];
  components: PostContent[]|[]=[];
  category!: any;
  user!: any;
  client!: any;
}

