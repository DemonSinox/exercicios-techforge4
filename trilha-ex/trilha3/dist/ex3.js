"use strict";
//Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.
class Pagamento {
    processar() {
        return "Processando pagamento...";
    }
}
class PagamentoBoleto extends Pagamento {
    constructor(numeroDeCartao) {
        super();
        this.numeroCorreto = 373129834;
        this.numeroDeCartao = numeroDeCartao;
    }
    processar() {
        if (this.numeroCorreto === this.numeroDeCartao) {
            return "Número de cartão correto.";
        }
        else {
            return "Número de cartão errado.";
        }
    }
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    processar() {
        if (this.numeroCartao.toString().length === 16) {
            return "Pagamento com cartão processado com sucesso.";
        }
        else {
            return "Número do cartão inválido.";
        }
    }
}
const pagamentoBoleto = new PagamentoBoleto(373129834);
console.log(pagamentoBoleto.processar());
const pagamentoCartao = new PagamentoCartao(1234567812345678);
console.log(pagamentoCartao.processar());
