// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar, que exibe a mensagem de ataque conforme o tipo de herói
    atacar() {
      let ataque = '';
  
      // Verifica o tipo do herói e define o ataque correspondente
      if (this.tipo === 'mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      }
  
      // Exibe a mensagem final
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando objetos (instâncias) de heróis de diferentes tipos
  let mago = new Heroi('Merlin', 45, 'mago');
  let guerreiro = new Heroi('Conan', 30, 'guerreiro');
  let monge = new Heroi('Shaolin', 50, 'monge');
  let ninja = new Heroi('Ryu', 25, 'ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar();        // Exibe: O mago atacou usando magia
  guerreiro.atacar();   // Exibe: O guerreiro atacou usando espada
  monge.atacar();       // Exibe: O monge atacou usando artes marciais
  ninja.atacar();       // Exibe: O ninja atacou usando shuriken
  