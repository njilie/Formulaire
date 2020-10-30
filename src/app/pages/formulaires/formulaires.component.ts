import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.scss']
})
export class FormulairesComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: [0, Validators.required],
      adresse: this.formBuilder.group({
        numero: [0],
        rue: [''],
        codePostal:['']
      }),
      chats: this.formBuilder.array([

        this.formBuilder.control('')
      ])
    }); 
  }

  ngOnInit(): void {
  }

  get chats(){
    return this.userForm.get('chats') as FormArray;
  }

  ajouterChat(){
    this.chats.push(this.formBuilder.control(''));
  }
  onSubmit(){
    if (this.userForm.valid){
        alert("Votre formulaire est valide");
    }
    else {
      alert("Le formulaire n'est pas valide!")
    }
  }

}
