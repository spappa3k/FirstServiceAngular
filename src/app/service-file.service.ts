import { Injectable } from '@angular/core';
import { GeneralModel, PostModel, PostCategoryModel} from './models/models';
import * as data from './json/blog.json';


@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {
Posts:PostModel[]=[];
PostsPreferiti:PostModel[]=[];

  constructor() {}

getPost(){
  return this.Posts=data.posts;
}

addToPreferiti(PostAdd:PostModel){
  if(!this.PostsPreferiti.find(s=> s.id==PostAdd.id)){
this.PostsPreferiti.push(PostAdd);
  }
  console.log(this.PostsPreferiti);
}

removeFromPreferiti(PostRemove:PostModel){
  let n =this.PostsPreferiti.indexOf(PostRemove);
this.PostsPreferiti.splice(n,1);
  console.log(this.PostsPreferiti);
}
}
