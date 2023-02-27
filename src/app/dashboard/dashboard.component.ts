import { Component } from '@angular/core';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  urlLink = '';

  formSubmitted = false;
  tinyUrl = '';
  isLoaded = false;
  isCopied = false;
  
  constructor(private tinyyUrlService:NgTinyUrlService){}

onSubmit(linkForm:any) {
  if(linkForm.valid){
    this.isLoaded = true;
    this.tinyyUrlService.shorten(this.urlLink).subscribe((data)=>{
      this.tinyUrl = data;
      this.formSubmitted = true;
      this.isLoaded = false;
    },(error)=>{
      alert('wrong input!!!');
      this.isLoaded = false;
    })
  }
}


copyUrl(tinyUrlRef:any){
  let createElement = document.createElement('input');

  createElement.setAttribute('type','text');
  createElement.setAttribute('value',tinyUrlRef.innerHtml);
  createElement.select();

}

  reset(){
    this.urlLink = '';
    this.formSubmitted = false;
    this.isCopied = false;
  }
}
