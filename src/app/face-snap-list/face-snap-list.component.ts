import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsServices } from '../services/face-naps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!:FaceSnap[];
  constructor(private faceSnapsServices: FaceSnapsServices){}
  ngOnInit(): void {
    this.faceSnaps =this.faceSnapsServices.getFaceSnaps();
    
  }
}
