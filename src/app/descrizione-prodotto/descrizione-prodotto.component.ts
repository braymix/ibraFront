import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Track } from "ngx-audio-player";

@Component({
  selector: "app-descrizione-prodotto",
  templateUrl: "./descrizione-prodotto.component.html",
  styleUrls: ["./descrizione-prodotto.component.scss"],
})
export class DescrizioneProdottoComponent implements OnInit {
  nome: String;

  listaAllArticolo: any = [];
  isCaricato: boolean = true;
  prezzo: string = "";
  displayBasic: boolean;
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = true;
  msaapPlaylist: Track[] = [
    {
      title: "non disponibile",
      link: "",
    },
  ];

  constructor(
    private _Activatedroute: ActivatedRoute,
    private http: HttpClient,
    public fb: FormBuilder
  ) {}

  public formGroup: FormGroup;
  ngOnInit() {
    this.formGroup = this.fb.group({
      nome: [""],
      cognome: [""],
      nomeDarte: [""],
      email: [""],
      dataDiNascita: [""],
      note: [""],
    });

    this.nome = this._Activatedroute.snapshot.paramMap.get("nome");
    this.get().subscribe((element) => {
      let pNuovo = 0;
      pNuovo = element.prezzo - (element.prezzo * element.sconto) / 100;
      element["pn"] = pNuovo;
      this.listaAllArticolo.push(element);
      this.isCaricato = false;
      this.msaapPlaylist = [
        {
          title: element.nome,
          link: element.traccia,
        },
      ];
    });

    console.log(this.listaAllArticolo);
  }

  compra() {
    console.log(this.listaAllArticolo)
    this.formGroup.value["note"] +=
      " |||||-------------||||| ha comprato il beat " + this.listaAllArticolo[0].nome;

    this.post(this.formGroup.value).subscribe((a) => {
      this.formGroup = this.fb.group({
        nome: [""],
        cognome: [""],
        nomeDarte: [""],
        email: [""],
        dataDiNascita: [""],
        note: [""],
      });
      this.displayBasic = true;

    });
  }

  public post(body: any): Observable<any> {
    return this.http.post("https://ibraback123.herokuapp.com/api/tutorials/sendEmail", body);
  }

  public get(): Observable<any> {
    return this.http.get("https://ibraback123.herokuapp.com/api/tutorials/" + this.nome);
  }
}
