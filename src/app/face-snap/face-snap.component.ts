import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe,  NgClass, NgStyle, TitleCasePipe, } from '@angular/common';
import { FaceSnapsServices } from '../services/face-naps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!:FaceSnap;
  snapsStatus!:boolean;
  snapsName!:String;

  constructor(private router:Router){}


  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
  /*onAddSnap():void{
    if(!this.snapsStatus)
    {
      //this.faceSnap.addSnaps();
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,"snap");
      this.snapsName="Oops, unSnap";
      this.snapsStatus=true;
    }else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,"unsnap");
      this.snapsName="Oh, snap!";
      this.snapsStatus=false;
    }
    
  }*/
}