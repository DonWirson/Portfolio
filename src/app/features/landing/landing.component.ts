import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent { 

  repoUrl = "https://github.com/DonWirson";

  dummyData = [ 
    { 
      title: "Portafolio",
      svgUrl: "assets/svg/angular-svgrepo-com.svg",
      description: "Literalmente lo estas viendo >:D, creado en Angular 18.",
      projectUrl: "https://github.com/DonWirson/Portfolio",
      demoUrl: null
    },
    { 
      title: "MVP Historial Git",
      svgUrl: "assets/svg/flutter-svgrepo-com.svg",
      description: "Revisa los commits de un repositorio de Github y sus ramas.",
      projectUrl: "https://github.com/DonWirson/mvp-git-history-Flutter",
      demoUrl: null
    },
    { 
      title: "Perdidog Api .Net Core",
      svgUrl: "assets/svg/dotnet-svgrepo-com.svg",
      description: "Api utilizada en Perdidog Flutter, actualmente esta en Azure en Prod.",
      projectUrl: "https://github.com/DonWirson/perdidog-api-net-core",
      demoUrl: null
    },
    { 
      title: "APP Perdidog",
      svgUrl: "assets/svg/flutter-svgrepo-com.svg",
      description: "App mobile creada en Flutter, con motivo de reportar mascotas perdidas🐕.",
      projectUrl: "https://github.com/DonWirson/Perdidog-Flutter",
      demoUrl: null
    },
    { 
      title: "Perdidog Api Spring",
      svgUrl: "assets/svg/java-svgrepo-com.svg",
      description: "Api utilizada en Perdidog Flutter, ahora basada en SpringBoot, de momento no tiene mucha funcionalidad.",
      projectUrl: "https://github.com/DonWirson/perdidog-api-spring-boot",
      demoUrl: null
    },
    { 
      title: "Mvp Editor Html",
      svgUrl: "assets/svg/flutter-svgrepo-com.svg",
      description: "Permite crear archivos HTML usando un editor de texto online o mobile, demo disponible :D.",
      projectUrl: "https://github.com/DonWirson/mvp-editor-html",
      demoUrl: "https://donwirson.github.io"
    },
  ]
}
