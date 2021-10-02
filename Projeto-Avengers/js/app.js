// Importando modulos
import {subindoCarrosel, descendoCarrosel, alterandoCarroselPeloTempo, left, right} from './carrosel.js';
import {openNavResponsive, closeNavResponsive, open, close} from "./responsive-nav.js";

//Eventos
right.addEventListener('click', subindoCarrosel)
left.addEventListener('click', descendoCarrosel)
open.addEventListener('click', openNavResponsive)
close.addEventListener('click', closeNavResponsive)
window.addEventListener('load',alterandoCarroselPeloTempo)