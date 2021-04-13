import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-crea-nuovo-articolo',
  templateUrl: './crea-nuovo-articolo.component.html',
  styleUrls: ['./crea-nuovo-articolo.component.scss']
})
export class CreaNuovoArticoloComponent implements OnInit {

  image: string | ArrayBuffer;

  constructor(private http: HttpClient, public fb: FormBuilder) { }
  public formGroup: FormGroup;
  ngOnInit() {
    this.formGroup = this.fb.group({
      nome: [""],
      descrizione: [""],
      tipo: [""],
      giacenza: [""],
      prezzo: [""],
      sconto: [""],
      foto:[""],
      traccia:[""],
      visibile: [""],
    });
  }

  public send(){
    this.post(this.formGroup.value).subscribe(() => {
      
  });
}

  public post(body:any): Observable<any> {
    return this.http.post("https://ibraback123.herokuapp.com/api/tutorials",body);
  }

  saveImage(files: FileList) {

    var file:File = files.item(0);
  
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      this.formGroup.value["foto"] = myReader["__zone_symbol__originalInstance"].result;
      this.post(this.formGroup.value).subscribe(() => {
      
      });
      console.log(myReader["__zone_symbol__originalInstance"].result);
    }
    myReader.readAsDataURL(file);
    //convert to base64 ends
  }

}
