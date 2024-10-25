class Agenda {
    compromissos: string[] = [];

    constructor(compromissos: string[] = []) {
        this.compromissos = compromissos;
    }

    adicionarCompromisso(compromisso: string) {
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
