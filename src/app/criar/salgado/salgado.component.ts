import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salgado } from 'src/app/class/salgado';
import { SalgadoService } from 'src/app/services/salgado.service';

@Component({
  selector: 'app-salgado',
  templateUrl: './salgado.component.html',
  styleUrls: ['./salgado.component.css']
})
export class SalgadoComponent implements OnInit {

  salgado: Salgado = new Salgado();

  constructor(private salgadoService:SalgadoService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.salgado.imagem==null){
      document.getElementById("error").style.display="flex";
    }else{
      this.salgadoService.criar(this.salgado).subscribe(data=>this.goToList(), error => {
        console.log(error)
        document.getElementById("error").style.display="flex";
      }) 
    }
  }

  goToList(){
    this.router.navigate(["/produtos"])
  }

}
