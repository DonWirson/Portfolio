import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TecnologyCard {
  title: string;
  svgUrl: string;
  description: string;
  links: { label: string; url: string }[];
}

@Component({
  selector: 'app-tecnologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnologies.component.html',
  styleUrl: './tecnologies.component.css',
})
export class TecnologiesComponent {
  selectedIndex = 0;

  tecnologias: TecnologyCard[] = [
    {
      title: 'Flutter',
      svgUrl: 'assets/svg/flutter-svgrepo-com.svg',
      description: 'Framework multiplataforma para crear aplicaciones móviles, web y de escritorio con un solo código.',
      links: [
        { label: 'Documentación', url: 'https://flutter.dev' },
        { label: 'Mi Repositorio', url: 'https://github.com/DonWirson' }
      ]
    },
    {
      title: '.Net',
      svgUrl: 'assets/svg/angular-svgrepo-com.svg',
      description: 'Plataforma de desarrollo versátil para crear aplicaciones web, móviles y de escritorio.',
      links: [
        { label: 'Documentación', url: 'https://dotnet.microsoft.com' },
        { label: 'Mi Repositorio', url: 'https://github.com/DonWirson' }
      ]
    }
  ];
}
