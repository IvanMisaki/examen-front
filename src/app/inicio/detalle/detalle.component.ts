import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() empezar: boolean = false
  @Input() tiempoXimagen: number = 0
  @Input() tiempoTotal: number = 0
  images = [
    { src: '../../../assets/img/imagen-1.png', text: 'Angular' },
    { src: '../../../assets/img/imagen-2.png', text: 'Spring Boot' },
    { src: '../../../assets/img/imagen-3.png', text: 'Net Core' },
    { src: '../../../assets/img/imagen-4.png', text: 'SQL Server' },
    { src: '../../../assets/img/imagen-5.png', text: 'Oracle' }
  ];

  currentImageIndex: number = 0;
  loaderImage: HTMLImageElement | null = null;
  loaderText: HTMLElement | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //if(this.empezar)
    {
      this.loaderImage = document.getElementById('loader-image') as HTMLImageElement;
      this.loaderText = document.getElementById('loader-text');
      this.changeImage();
      setTimeout(() => {
        this.router.navigate(['/bienvenida']); // Redirige a BienvenidaComponent después de 6 segundos
      }, 1000*this.tiempoTotal);
    }
  }

  changeImage() {
    setInterval(() => {
      if (this.loaderImage && this.loaderText) {
        this.loaderImage.src = this.images[this.currentImageIndex].src;
        this.loaderText.innerText = this.images[this.currentImageIndex].text;
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }
    }, 1000*this.tiempoXimagen);
  }
}
