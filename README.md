# Site du Groupe Scolaire Les Oliviers (GSO)

Next.js 14 / TypeScript / Tailwind CSS. Suit la feuille de route fournie (voir le prompt complet).

## Installation

```bash
npm install
npm run dev
```

## Configuration Supabase

1. Créer un projet sur [supabase.com](https://supabase.com).
2. Éditeur SQL → exécuter `supabase/schema.sql` puis `supabase/storage.sql`.
3. Authentication → créer un utilisateur admin (email + mot de passe), puis dans l'Éditeur SQL :
   `insert into public.utilisateurs (id, nom) values ('<uuid de l'utilisateur>', 'Admin GSO');`
4. Copier `.env.local.example` vers `.env.local` et renseigner `NEXT_PUBLIC_SUPABASE_URL` et
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Project Settings → API).
5. `/admin/login` permet ensuite de se connecter et d'accéder à `/admin/dashboard`.

## Ce qui est fait (lot 1 — le plus urgent)

- Scaffold Next.js + Tailwind, palette (jaune moutarde / vert olive / doré) dans `tailwind.config.ts`.
- Vrais assets intégrés dans `public/images` (logo, façade de l'école, bannière de rentrée, affiche
  règlement de tenue) et `public/docs` (3 prospectus + 22 fiches fournitures réelles).
- Header à deux bandes (logo seul en bande 1 ; Accueil + menu déroulant "Informations" + bouton
  "Inscrire mon enfant" en bande 2), Footer avec vraies coordonnées.
- **Page d'accueil** : hero avec la vraie photo de façade, présentation, atouts, statistiques, CTA
  documents.
- **Page Fournitures** (`/fournitures`) : bibliothèque complète et réelle, classée par programme
  (Français / Congolais) → cycle → classe, avec boutons Consulter/Télécharger. La série S regroupe
  les anciennes séries C/D au Lycée Général (voir `data/fournitures.ts`).
- **Page Prospectus** (`/prospectus`) : les 3 vrais prospectus (Programme Français, Programme
  Congolais, Lycée Technique).
- **Page Tarifs** (`/tarifs`) : grilles tarifaires réelles extraites des 3 prospectus (inscription,
  réinscription, écolages mi-temps/plein-temps par cycle).

## Ce qui est fait (lot 2 — Supabase + inscription)

- **Schéma complet** (`supabase/schema.sql`) : tables `utilisateurs`, `programmes`, `niveaux`,
  `tarifs`, `documents`, `actualites`, `galerie`, `inscriptions`, `contacts`, avec RLS sur chacune
  (lecture publique du contenu vitrine, écriture réservée aux admins via `public.est_admin()`).
- **Storage** (`supabase/storage.sql`) : buckets `documents`, `galerie`, `actualites` avec lecture
  publique et écriture réservée aux admins.
- **Auth admin** : `/admin/login` (Supabase Auth, bouton afficher/masquer le mot de passe),
  `middleware.ts` protège toutes les routes `/admin/*`, `/admin/dashboard` affiche les compteurs
  (préinscriptions en attente, messages non lus) et les 5 modules à construire.
- **Formulaire d'inscription** (`/inscription`) fonctionnel : écrit directement dans la table
  `inscriptions`, classes proposées dynamiquement selon le programme choisi (toutes les classes
  réelles, y compris Première/Terminale S, A, G1-G3/BG/H).

## Pages stub (contenu à venir)

`/programmes`, `/actualites`, `/galerie`, `/contact` — squelettes posés pour que la navigation ne
casse pas.

## Prochaines étapes (dans l'ordre suggéré)

1. Modules admin détaillés : formulaires d'ajout/édition pour Actualités, Galerie, Documents,
   Tarifs, et vue/export des Préinscriptions (`/admin/dashboard/*`).
2. Pages Programmes détaillées (Congolais et Français, par niveau) et page Contact (carte + formulaire).
3. Actualités et Galerie connectées à Supabase Storage côté public.
4. SEO technique (sitemap.xml, robots.txt) et déploiement (Vercel recommandé pour Next.js).

## Fournitures à finaliser

Première/Terminale G1 (Secrétariat) et H (Informatique) utilisent provisoirement la même liste que
G2/G3/BG (fichiers `premiere-g1.pdf`, `premiere-h.pdf`, `terminale-g1.pdf`, `terminale-h.pdf` dans
`public/docs/fournitures/congolais/`) — à remplacer manuellement par les vraies listes quand elles
seront prêtes. Non fourni à ce jour : cycle Crèche en programme français.
