import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private http: HttpClient, ) { }
  public display: String = "";
  listaAllArticolo : any = [];

  isCaricato:boolean = true;
  prezzo : string = "";
  ngOnInit() {

      if (this.isMobileDevice()) {
        this.display ="p-col-4";
      }
      else{
        this.display ="p-col-12";
      } 
      this.isMobileDevice();
    this.getAllArticoli();
  }

  public isMobileDevice() {
    var check = false;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
    return false;
    }else{
      // false for not mobile device
      return true;
      console.log("not mobile device");
    }
    return check;
};

  public getAllArticoli(){

    this.get().subscribe((resp) => {
      
      

     resp.forEach(element => {
     let pNuovo = 0;
     pNuovo = element.prezzo - ((element.prezzo * element.sconto)/100  )  ;
     element["pn"] = pNuovo; 
     this.listaAllArticolo.push(element);
     });
   
     this.isCaricato=false;
     
    });
    console.log(this.listaAllArticolo)
  }

  public get(): Observable<any> {
    return this.http.get("https://ibraback123.herokuapp.com/api/tutorials");
  }

}
