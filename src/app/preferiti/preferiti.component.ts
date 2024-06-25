import { Component } from '@angular/core';
import { ServiceFileService } from '../service-file.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent {

  constructor(public ps:ServiceFileService){

  }



}
