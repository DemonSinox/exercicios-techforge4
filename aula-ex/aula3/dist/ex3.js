"use strict";
//Crie uma classe Login que define o contrato para diferentes métodos de login. A classe deve ter o seguinte método:
//● autenticar(): boolean: método que retorna true se a autenticação for bem-sucedida e false caso contrário. Implemente três classes que representam diferentes métodos de login, cada uma com sua própria lógica de autenticação. Os valores corretos podem ser dados fictícios atribuídos como valores padrão para atributos da classe:
//● EmailLogin: recebe email e senha e valida se a combinação é correta.
//● SocialLogin: recebe tokenRedeSocial (uma string simulando um token de autenticação de redes sociais, como Google ou Facebook) e valida se o token está presente e é válido.
//● TwoFactorLogin: recebe codigo (número de autenticação de dois fatores) e senha. Valida se a senha e o código coincidem com os
//valores corretos.
class Login {
    autenticar() {
        return false;
    }
}
class EmailLogin extends Login {
    constructor(email, senha) {
        super();
        this.emailCorreto = "lucas123@gmail.com";
        this.senhaCorreta = "12345";
        this.email = email;
        this.senha = senha;
    }
    autenticar() {
        return this.email === this.emailCorreto && this.senha === this.senhaCorreta;
    }
}
class SocialLogin extends Login {
    constructor(tokenRedeSocial) {
        super();
        this.tokenValido = "Este_cafe_esta_quente";
        this.tokenRedeSocial = tokenRedeSocial;
    }
    autenticar() {
        return this.tokenRedeSocial === this.tokenValido;
    }
}
class TwoFactorLogin extends Login {
    constructor(codigo, senha) {
        super();
        this.codigoCorreto = 8346;
        this.senhaCorreta = "abcd";
        this.codigo = codigo;
        this.senha = senha;
    }
    autenticar() {
        return this.codigo === this.codigoCorreto && this.senha === this.senhaCorreta;
    }
}
let seuEmail = "lucas123@gmail.com";
let suaSenha = "lucas2005";
let token = "Este_cafe_esta_quente";
let fator1 = 8346;
let fator2 = "abcd";
const emailLogin = new EmailLogin(seuEmail, suaSenha);
console.log("email login: " + emailLogin.autenticar());
const socialLogin = new SocialLogin(token);
console.log("social login: " + socialLogin.autenticar());
const twoFactorLogin = new TwoFactorLogin(fator1, fator2);
console.log("Two-Factor Login:" + twoFactorLogin.autenticar());
