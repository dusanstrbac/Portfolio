import { ProjectDetails } from "@/types/project";

export const projects: ProjectDetails[] = [
  {
    id: "daabelweb",
    title: "Dabel Web",
    description: {
      sr: "Dabel Web je aplikacija namenjena za web interfejs poslovnog sistema. Klijent omogućava korisnicima da pristupaju i upravljaju funkcionalnostima kao što su artikli, narudžbine i dokumenti.",
      en: "Dabel Web is a high-performance business interface application. It enables users to manage complex functionalities including inventory, orders, user data, and automated documentation."
    },
    bigDescription: {
      sr: `Dabel Frontend je kompleksan B2B sistem dizajniran da premosti jaz između administrativnog upravljanja i krajnjih korisnika u prodajnom sektoru. 

Sistem je razvijen sa fokusom na brzinu i efikasnost, omogućavajući partnerima da upravljaju ogromnim asortimanom artikala u realnom vremenu.

Ključni izazovi i rešenja:
• High-Performance Filtering: Implementiran je napredni sistem filtriranja kroz hiljade artikala koristeći React Query.
• Document Generation: Modul za automatsko generisanje PDF i Excel dokumenata direktno u browseru.
• Advanced Ordering: Integrisano QR skeniranje i CSV bulk upload za masovne narudžbine, čime je vreme kreiranja naloga smanjeno za 70%.
• Background Sync: Mehanizam koji na svakih 6 sati sinhronizuje globalne parametre bez prekida korisničkog iskustva.

Aplikacija koristi JWT autentifikaciju sa HttpOnly cookies za maksimalnu sigurnost.`,
      en: `Dabel Frontend is a complex B2B system designed to bridge the gap between administrative management and end-users in the sales sector.

The system was developed with a focus on speed and efficiency, allowing partners to manage a vast range of items in real-time.

Key Challenges & Solutions:
• High-Performance Filtering: Advanced filtering and search system through thousands of items using React Query and optimized API calls.
• Document Generation: Developed a module for automatic generation of PDF and Excel documents directly in the browser.
• Advanced Ordering: Integrated QR scanning and CSV bulk upload for mass orders, reducing order creation time by 70%.
• Background Sync: Implemented a mechanism that synchronizes global site parameters (promotions, banners) every 6 hours without interrupting the user experience.

The application utilizes JWT authentication with HttpOnly cookies for maximum security, while the UI is built using Radix UI primitives.`
    },
    image: "/projects/ecommerce.jpg",
    tech: [
      "Next.js 15", 
      "TypeScript", 
      "TanStack Query v5", 
      "Zod", 
      "Radix UI", 
      "PDF-Lib / ExcelJS", 
      "JWT Auth"
    ],
    gallery: [
      "/projects/ecommerce-1.jpg",
      "/projects/ecommerce-2.jpg",
      "/projects/ecommerce-3.jpg",
      "/projects/ecommerce-4.jpg",
      "/projects/ecommerce-5.jpg",
    ],
    github: "https://github.com/dusanstrbac/dabel_front",
    demo: "http://94.230.179.194:3001/",
  },
  {
    id: "studioflowapp",
    title: "StudioFlow",
    description: {
      sr: "Sveobuhvatna platforma za upravljanje studijima i salonima. Automatizacija zakazivanja termina uz napredno praćenje finansijskih tokova i analitiku poslovanja.",
      en: "A comprehensive management platform for studios and salons. Automates appointment scheduling with advanced financial tracking and business analytics."
    },
    bigDescription: {
      sr: `StudioFlow je SaaS rešenje dizajnirano da olakša svakodnevni rad vlasnicima uslužnih delatnosti. Fokus aplikacije je na eliminisanju manuelnog zakazivanja i pružanju jasne slike o profitabilnosti.

Glavne funkcionalnosti i tehnička rešenja:
• Pametni Kalendar: Interaktivni interfejs za upravljanje terminima i automatskom proverom dostupnosti.
• Finansijski Dashboard: Modul za vizuelni prikaz prihoda, rashoda i neto zarade u realnom vremenu.
• Radnik sistem: Sistem za automatsku evidenciju učinka zaposlenih na osnovu realizovanih termina.
• Multi-role Autentifikacija: Sistem prepoznaje nivoe pristupa (Admin, Radnik) obezbeđujući sigurnost osetljivih podataka.
• SQL Optimizacija: Baza podataka strukturirana da podržava brze upite pri velikom broju transakcija.

Aplikacija pretvara haos papirnih evidencija u organizovan digitalni sistem.`,
      en: `StudioFlow is a SaaS solution designed to streamline the daily operations of service-based businesses. The application focuses on eliminating manual scheduling and providing a clear picture of profitability.

Core Functionalities & Technical Solutions:
• Smart Calendar: Developed an interactive interface for managing appointments with automatic availability checks.
• Financial Dashboard: Implemented a module for real-time visual display of income, expenses, and net profit.
• Employee System: Automatic tracking of employee performance based on completed appointments.
• Multi-role Authentication: The system recognizes access levels (Admin, Employee), ensuring the security of sensitive financial data.
• SQL Optimization: The database is structured to support fast queries even with a large volume of scheduled appointments and transactions.

The application is built as a robust tool that transforms the chaos of paper records into an organized digital system.`
    },
    image: "/studioflow/StudioFlow1.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Rest API", "MySQL", "Shadcn"],
    gallery: [
      "/studioflow/StudioFlow1.png",
      "/studioflow/StudioFlow2.png",
      "/studioflow/StudioFlow3.png",
      "/studioflow/StudioFlow4.png",
      "/studioflow/StudioFlow5.png",
    ],
    github: "https://github.com/dusanstrbac/StudioFlowApp",
    demo: "http://77.46.207.30:7777/",
  },
];