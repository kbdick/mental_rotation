import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

export interface Images {
  image_default: string;
  image_test_one: string;
  image_test_two: string;
  image_test_three: string;
  image_test_four: string;
}

@Component({
  selector: 'mental-rotation',
  templateUrl: './mental-rotation.component.html',
  styleUrls: ['./mental-rotation.component.scss']
})

export class MentalRotationComponent implements OnInit {

  imagesCol: AngularFirestoreCollection<Images>;
  images: Observable<Images[]>;

  constructor(private afs: AngularFirestore) {
    
    this.imagesCol = this.afs.collection('images', ref => {
    return ref
            .limit(1)
      });
    this.images = this.imagesCol.valueChanges();
    
  }

  ngOnInit() {
  }

}
