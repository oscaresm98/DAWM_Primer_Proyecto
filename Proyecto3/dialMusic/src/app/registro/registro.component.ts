import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.usuarioForm = this.fb.group({
      usuario: ['', Validators.required],
      alias: ['', Validators.required],
      contrasenia: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuarioForm);
    console.log(this.usuarioForm.get('usuario')?.value);
    this.toastr.success('El usuario fue registrado con exito!', 'Usuario registrado!');
    this.router.navigate(['/login']);
  }

}
