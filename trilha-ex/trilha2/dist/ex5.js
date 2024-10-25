"use strict";
class Agenda {
    constructor(compromissos = []) {
        this.compromissos = [];
        this.compromissos = compromissos;
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
    }
    listarCompromissos() {
        return this.compromissos;
    }
}
let minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Reunião às 10h");
minhaAgenda.adicionarCompromisso("Dentista às 14h");
console.log(minhaAgenda.listarCompromissos());
