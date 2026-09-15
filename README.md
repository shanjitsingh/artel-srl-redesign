# Artel S.r.l. — redesign concept

Static, no-build redesign concept for the Artel S.r.l. website (artelsrl.it) — industrial automation, telecontrollo, system integration and access control, active since 1996, based in Terni.

## Why this exists

The real site (artelsrl.it) communicates a technologically advanced company through a dated, text-heavy experience. This concept keeps the real substance of the business but reorganizes it around a clearer structure:

- A direct hero message instead of a long intro.
- Four clear service pillars: **Automazione Industriale**, **Telecontrollo**, **System Integration**, **Rilevazione Presenze / Controllo Accessi**.
- A **Problema → Soluzione → Tecnologie → Risultato** format for illustrative case studies, aimed at B2B credibility.
- A dedicated **Clienti** page for social proof.

## Content note

Company info, service descriptions, values, and client names are pulled from the real artelsrl.it site (Chi Siamo, I nostri valori, Automazione Industriale, Telecontrolli Ambientali, Rilevazione Presenze/Controlli Accessi, I nostri clienti, Contatti). The three examples in `casi-studio.html` are explicitly labeled as **illustrative intervention patterns** — not real, named projects — though the technologies referenced in them (RTU_Net/UC400, Siemens/Allen Bradley PLC + WinCC/RSView, SAP integration) are real to the business. The contact form in `contatti.html` has no backend wired up.

## Structure

```
index.html                     Home
automazione-industriale.html   Service: PLC / quadri elettrici / SCADA
telecontrollo.html             Service: telecontrollo acquedotti/depuratori, RTU_Net/UC400
system-integration.html        Service: MES / ERP (SAP) integration
rilevazione-presenze.html      Service: badge, tornelli, controllo accessi, gestione code
casi-studio.html               Illustrative intervention patterns (Problema / Soluzione / Tecnologie / Risultato)
clienti.html                   Real client list by sector
chi-siamo.html                 About, company values, ISO 9001:2015
contatti.html                  Real contact info + static contact form
css/style.css                  Shared design system
js/main.js                     Mobile nav toggle
```

## Running locally

No build step required.

```
python3 -m http.server
```

Then open `http://localhost:8000`.
