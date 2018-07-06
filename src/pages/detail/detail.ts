import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Entry} from 'contentful';
import { ContentfulProvider } from '../../providers/contentful/contentful';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit {
  lang:Entry<any>;
  title;
  describtion;
  imgSource;



  constructor(public navCtrl: NavController, public navParams: NavParams,private content:ContentfulProvider ) {
    content.getlanguage(navParams.data.id).then(
      (course)=>{
      this.lang=course;
      console.log(course);
      this.title=course.fields.title;
      this.describtion=course.fields.description;
      this.imgSource=course.fields.image.fields.file.url;
      console.log(this.title);


      console.log(this.lang + "" + navParams.data.id);
    });
  }
  ngOnInit() {

    console.log(this.lang);
  }

}


