import { Student } from './studentInterface';
import { Component, OnInit } from '@angular/core';
import { GetStudentsService } from "../get-students.service";

@Component({
    selector: 'app-tabella',
    templateUrl: './tabella.component.html',
    styleUrls: ['./tabella.component.css']
})

export class TabellaComponent
{
    api = "http://localhost:4200/student";
    ges : GetStudentsService; //var del tipo della classe passata tramite import { GetStudentsService } from "../get-students.service";
    array : Student[]; //array di studenti (import { Student } from './studentInterface';)
    idCanc: number[] = []; //array per memorizzare temporaneamente gli ID degli studenti che si vogliono modificare/cancellare

    constructor(ges : GetStudentsService) 
    {
        this.ges = ges;
        this.array = [];
        this.load();
    }

    load() : void //metodo che carica dati tramite metodo GET alla url delle API
    {
        this.ges.getData(this.api)
            .subscribe(data => this.array = data.students);
    }

    add(name : string, surname : string, sidicode : string, taxcode : string) : void
    {
        let stu : Student = { //variabile temporanea (type let) di tipo Employee con la quale inserisco i dati del nuovo impiegato
            id: 0,
            name: name,
            surname: surname,
            sidi_code: sidicode,
            tax_code: taxcode
		};
        this.ges.postData(this.api, stu) //metodo che inserisce nuovi dati con metodo POST
            .subscribe(data => this.load());
    }

    remove(id : number) : void
    {
        this.ges.deleteData(this.api + id)
            .subscribe(data => this.load());
    }

    modify(id : number, name : string, surname : string, sidicode : string, taxcode : string) : void
    {
        let stu : Student = {
            id: 0,
            name: name,
            surname: surname,
            sidi_code: sidicode,
            tax_code: taxcode
		};

        this.ges.putData(this.api + id, stu)
            .subscribe(data => this.load());
    }

    message(message : string) : any //metodo richiamato da tag in html per aggiungere un parametro
    {
        return window.prompt(message);
    }
}