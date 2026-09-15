# Artel S.r.l. — redesign concept

Static, no-build redesign concept for the Artel S.r.l. website (industrial automation / PLC / SCADA / telecontrollo / system integration, active since 1996).

## Why this exists

The current site communicates a technologically advanced company through a dated, text-heavy experience. This concept keeps the real substance of the business but reorganizes it around a clear structure:

- A direct hero message instead of a long intro.
- Three clear service pillars: **Automazione Industriale**, **Telecontrollo**, **System Integration**.
- A **Problema → Soluzione → Tecnologie → Risultato** format for case studies, aimed at B2B credibility.

## Content note

Copy, statistics, contact details, and the three case studies in `casi-studio.html` are **illustrative placeholders** written to demonstrate the proposed structure and tone — they are not Artel's real client data, and the contact form has no backend wired up. Replace with real company content before using this live.

## Structure

```
index.html                     Home
automazione-industriale.html   Service: PLC / SCADA / HMI / Industry 4.0
telecontrollo.html             Service: remote monitoring for acquedotti/depuratori/infrastrutture
system-integration.html        Service: ERP / MES integration
casi-studio.html               Case studies (Problema / Soluzione / Tecnologie / Risultato)
chi-siamo.html                 About / company story
contatti.html                  Contact info + static contact form
css/style.css                  Shared design system
js/main.js                     Mobile nav toggle
```

## Running locally

No build step required.

```
python3 -m http.server
```

Then open `http://localhost:8000`.
