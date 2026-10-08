import type { ImageMetadata } from 'astro';
import cintiaduarte from '../assets/team/cintiaduarte.webp';
import elianaproserpio from '../assets/team/elianaproserpio.webp';
import facundofernandez from '../assets/team/facundofernandez.webp';
import gabrielnievas from '../assets/team/gabrielnievas.webp';
import juanmeza from '../assets/team/juanmeza.webp';
import lorenasartori from '../assets/team/lorenasartori.webp';
import nicolasdebella from '../assets/team/nicolasdebella.webp';
import nicolasmansilla from '../assets/team/nicolasmansilla.webp';
import nicolaspavon from '../assets/team/nicolaspavon.webp';
import ornellameolans from '../assets/team/ornellameolans.webp';
import tatianatablada from '../assets/team/tatianatablada.webp';
import vero from '../assets/team/vero.webp';

export type TeamMember = { name: string; photo: ImageMetadata };

export const team: TeamMember[] = [
  { name: 'Cintia Duarte', photo: cintiaduarte },
  { name: 'Eliana Proserpio', photo: elianaproserpio },
  { name: 'Facundo Fernández', photo: facundofernandez },
  { name: 'Gabriel Nievas', photo: gabrielnievas },
  { name: 'Juan Meza', photo: juanmeza },
  { name: 'Lorena Sartori', photo: lorenasartori },
  { name: 'Nicolás De Bella', photo: nicolasdebella },
  { name: 'Nicolás Mansilla', photo: nicolasmansilla },
  { name: 'Nicolás Pavón', photo: nicolaspavon },
  { name: 'Ornella Meolans', photo: ornellameolans },
  { name: 'Tatiana Tablada', photo: tatianatablada },
  { name: 'Vero', photo: vero },
];
