import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgFor],
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
      projectUrl: "https://github.com/DonWirson/mvp-git-history-Flutter"
    },
    { 
      title: "MVP Historial Git",
      svgUrl: "assets/svg/flutter-svgrepo-com.svg",
      description: "Revisa los commits de un repositorio de Github y sus ramas.",
      projectUrl: "https://github.com/DonWirson/mvp-git-history-Flutter"
    },
    { 
      title: "Perdidog Api .Net Core",
      svgUrl: "assets/svg/dotnet-svgrepo-com.svg",
      description: "Api utilizada en Perdidog Flutter, actualmente esta en Azure en Prod.",
      projectUrl: "https://github.com/DonWirson/perdidog-api-net-core"
    },
    { 
      title: "APP Perdidog",
      svgUrl: "assets/svg/flutter-svgrepo-com.svg",
      description: "App mobile creada en Flutter, con motivo de reportar mascotas perdidas🐕.",
      projectUrl: "https://github.com/DonWirson/Perdidog-Flutter"
    },
    { 
      title: "Perdidog Api Spring",
      svgUrl: "assets/svg/java-svgrepo-com.svg",
      description: "Api utilizada en Perdidog Flutter, ahora basada en SpringBoot, de momento no tiene mucha funcionalidad.",
      projectUrl: "https://github.com/DonWirson/perdidog-api-spring-boot"
    },
  ]
}
