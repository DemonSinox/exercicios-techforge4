//3 - Crie uma interface chamada MeioDePagamento com os seguintes métodos:
//- autorizar(valor: number): boolean – deve retornar true se o pagamento for autorizado, ou false se não for.
//- processarPagamento(valor: number): void – realiza o processamento do pagamento se autorizado.
//Implemente essa interface em duas classes: CartaoDeCredito e PayPal. Ambas devem ter comportamentos diferentes para autorizar e
//processar o pagamento:
//- No caso de CartaoDeCredito, o pagamento é autorizado se o saldo disponível for maior que o valor da compra.
//- No caso de PayPal, o pagamento é autorizado se o número de transações no dia for inferior a um limite má

interface MeioDePagamento {
  autorizar(valor: number): boolean;
  processarPagamento(valor: number): void;
}

class CartaoDeCredito implements MeioDePagamento {
  public saldo: number;
  public valorPago: number;

  constructor(saldo: number, valorPago: number = 0) {
    this.saldo = saldo;
    this.valorPago = valorPago;
  }

  autorizar(valor: number): boolean {
    return this.saldo >= valor;
  }

  processarPagamento(valor: number): void {
    if (this.autorizar(valor)) {
      this.saldo -= valor;
      this.valorPago += valor;
      console.log(`Pagamento de R$${valor} realizado com sucesso via Cartão de Crédito.`);
      console.log(`Saldo restante: R$${this.saldo}`);
    } else {
      console.log("Pagamento não autorizado: saldo insuficiente.");
    }
  }
}

class PayPal implements MeioDePagamento {
  private transacoesHoje: number;
  private limiteTransacoes: number;

  constructor(limiteTransacoes: number) {
    this.transacoesHoje = 0;
    this.limiteTransacoes = limiteTransacoes;
  }

  autorizar(valor: number): boolean {
    return this.transacoesHoje < this.limiteTransacoes;
  }

  processarPagamento(valor: number): void {
    if (this.autorizar(valor)) {
      this.transacoesHoje++;
      console.log(`Pagamento de R$${valor} realizado com sucesso via PayPal.`);
      console.log(`Transações realizadas hoje: ${this.transacoesHoje}`);
    } else {
      console.log("Pagamento não autorizado: limite de transações diárias atingido.");
    }
  }
}

console.log("com Cartão de Crédito:");
const cartao = new CartaoDeCredito(500);
cartao.processarPagamento(200);
cartao.processarPagamento(350);

console.log("com PayPal:");
const paypal = new PayPal(3);
paypal.processarPagamento(100);
paypal.processarPagamento(150);
paypal.processarPagamento(50);
paypal.processarPagamento(200);
