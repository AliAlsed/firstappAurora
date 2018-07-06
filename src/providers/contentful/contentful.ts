import { Injectable } from '@angular/core';
import { createClient,Entry} from 'contentful'
/*
  Generated class for the ContentfulProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContentfulProvider {
private client = createClient({
  space:'yz7nsh28mm0a',
  accessToken:'76d9c347d5cdf6cbe6d033c7848e169a8a4ba9730215ff950c998b90292c416e'
});
  constructor() {
    console.log('Hello ContentfulProvider Provider');
  }

  getAll(query?:object):Promise<Entry<any>[]>{
    return this.client.getEntries(Object.assign({content_type: 'proglang'},query)).then(res => res.items)
  }
  getlanguage(langid):Promise<Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type: 'proglang'}, { 'sys.id':langid})).then(res =>res.items[0]);
  }
}
