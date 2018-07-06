import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentfulProvider } from '../../providers/contentful/contentful';
import {Entry} from 'contentful'
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  language: Entry<any>[]=[];
  ngOnInit() {
    console.log(this.content.getAll());
    this.content.getAll().then(lang =>this.language=lang);
  }

  constructor(public navCtrl: NavController, private content:ContentfulProvider) {

  }
showdetails(id){
this.navCtrl.push(DetailPage,{id});
}
}
