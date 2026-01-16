import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certificacion {
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

@Component({
  selector: 'app-certificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificaciones.component.html',
  styleUrl: './certificaciones.component.css',
})
export class CertificacionesComponent {
  certificaciones: Certificacion[] = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      issueDate: 'mar. 2025',
      credentialId: '381F43EECECFCAB1',
      description: 'Certificación oficial de Microsoft en fundamentos de Azure',
      skills: ['Microsoft Azure', 'Computación en la nube']
    },
    {
      title: 'Associate developer',
      issuer: 'OutSystems',
      issueDate: 'dic. 2025',
      description: 'Certificación profesional como desarrollador asociado en OutSystems',
      skills: ['OutSystems', 'Low-Code Development']
    },
    {
      title: 'Certified Scrum Developer® (CSD®)',
      issuer: 'CertiProf',
      issueDate: 'dic. 2022',
      credentialId: 'TLHZZKHKGG-TMRXSHTQ-RHSHDTFLRH',
      description: 'Certificación profesional como Scrum Developer reconocida internacionalmente',
      skills: ['Scrum', 'Agile Development']
    },
    {
      title: 'Scrum Fundamentals',
      issuer: 'CertiProf',
      issueDate: 'dic. 2022',
      credentialId: '82113971',
      description: 'Certificación en los fundamentos de la metodología Scrum',
      skills: ['Scrum', 'Agile']
    },
    {
      title: 'EFSET English certificate 67/100 (C1 Advanced)',
      issuer: 'EF SET',
      issueDate: 'oct. 2024',
      description: 'Certificación de dominio de inglés a nivel avanzado C1',
      skills: ['Inglés']
    },
    {
      title: 'Fundamentos de kubernetes',
      issuer: 'Udemy',
      issueDate: 'dic. 2025',
      credentialId: 'UC-a59007d9-c8c7-449d-9913-8c84ffd53fce',
      description: 'Curso completo sobre los fundamentos de Kubernetes',
      skills: ['Kubernetes', 'Container Orchestration']
    },
    {
      title: 'Curso ASP.Net Core Web Api',
      issuer: 'Udemy',
      issueDate: 'ene. 2025',
      credentialId: 'UC-1371b900-df43-477f-ab56-76aca4255a1f',
      description: 'Curso especializado en desarrollo de Web APIs con ASP.NET Core',
      skills: ['ASP.NET Web API', 'Desarrollo web back end', '.NET Core']
    },
    {
      title: 'Curso Dart',
      issuer: 'Udemy',
      issueDate: 'sept. 2024',
      credentialId: 'UC-6a532fbb-5c25-4a24-84fc-ea8c6f27c3a7',
      description: 'Curso completo del lenguaje de programación Dart',
      skills: ['Dart']
    },
    {
      title: 'Curso iOS y Swift',
      issuer: 'Udemy',
      issueDate: 'sept. 2024',
      credentialId: 'UC-19fd5728-2a6c-49fc-9eb0-f1d36ad96c4a',
      description: 'Curso completo de desarrollo iOS con Swift',
      skills: ['Desarrollo de iOS', 'Swift']
    },
    {
      title: 'Curso Principios SOLID y Clean Code',
      issuer: 'Udemy',
      issueDate: 'ago. 2024',
      credentialId: 'UC-87e980f1-daed-4829-8648-fc23198133f9',
      description: 'Curso sobre principios SOLID y prácticas de código limpio',
      skills: ['Principios SOLID', 'Clean code']
    },
    {
      title: 'Certificado curso React Native',
      issuer: 'Udemy',
      issueDate: 'jul. 2024',
      credentialId: 'UC-8e8b4473-fOe9-478f-b044-7e8f2207651a',
      description: 'Certificación en desarrollo de aplicaciones móviles con React Native',
      skills: ['React Native']
    },
    {
      title: 'Curso Typescript',
      issuer: 'Udemy',
      issueDate: 'jul. 2024',
      credentialId: 'UC-1e0ab3c2-807c-45a4-8074-5c298a0c30d2',
      description: 'Curso completo del lenguaje de programación TypeScript',
      skills: ['TypeScript']
    }
  ];
}

