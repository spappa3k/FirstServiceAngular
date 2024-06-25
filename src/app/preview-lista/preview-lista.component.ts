import { Component, OnInit } from '@angular/core';
import { ServiceFileService } from '../service-file.service';
import { PostModel } from '../models/models';

@Component({
  selector: 'app-preview-lista',
  templateUrl: './preview-lista.component.html',
  styleUrl: './preview-lista.component.css'
})
export class PreviewListaComponent implements OnInit{
  Posts:PostModel[]=[];

  constructor(public ps:ServiceFileService){
   
  }
  
  ngOnInit():void{
    this.Posts=this.ps.getPost();
    console.log(this.Posts);
    }
}
