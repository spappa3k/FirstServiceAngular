import { Component, Input, OnInit  } from '@angular/core';
import { ServiceFileService } from '../service-file.service';
import { PostModel } from '../models/models';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrl: './preview-post.component.css'
})
export class PreviewPostComponent{

 @Input()
 Post?:PostModel; 
constructor(public ps:ServiceFileService){}
/*
addToFavorite(Post:PostModel){
  console.log("passa");
this.ps.addToPreferiti(Post)
}*/
}


