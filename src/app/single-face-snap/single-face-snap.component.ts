import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, } from '@angular/common';
import { FaceSnapsServices } from '../services/face-naps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe,
    TitleCasePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
   faceSnap!:FaceSnap;
  snapsStatus!:boolean;
  snapsName!:String;

  constructor(private faceSnapService:FaceSnapsServices, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.prepareInterface();
   this.getFaceSnap();
  }
  private prepareInterface()
  {
    this.snapsStatus=false;
    this.snapsName="Oh, Snap!";
  }
  private getFaceSnap(){
    const faceSnapId =this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapService.getFaceSnapById(faceSnapId);
  }
  onAddSnap():void{
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
    
  }
}