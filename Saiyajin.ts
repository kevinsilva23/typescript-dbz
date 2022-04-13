import { Personagem } from "./Personagem";

export class Saiyajin extends Personagem {
  constructor(
    nome: string,
    vidaAtual: number,
    vidaBase:number,
    energia: number,
    ataque: number,
    defesa: number,
    poder: number,
    nivel: string
  ) {
    super(
      nome, vidaAtual, vidaBase, energia, ataque, defesa, poder, nivel)

  }




  public apresentacao(): string {
    return (
           "Você escolheu o guerreiro Z:" + " " + this._nome +
             `\n` +
      "\nVindo de uma raça guerreira e conquistadora." +
      "\nOs famosos guerreiros da raça Saiyajin" +
      "       \nPoder:" + this._poder
    )

  }


  public treinarAtaque(): void {
    this._vidaAtual -= Math.round(Math.random() * 2);
    this._energia -= Math.round(Math.random() * 20);
    this._ataque += Math.round(Math.random() * 10);
    this._poder += Math.round(Math.random() * 400);

    if (this._poder > 15000) {
      this._vidaAtual -= Math.round(Math.random() * 2);
      this._energia -= Math.round(Math.random() * 30);
      this._ataque += Math.round(Math.random() * 20);
      this._poder += Math.round(Math.random() * 600);
    }
  }



  public treinarDefesa(): void {
    this._vidaAtual -= Math.round(Math.random() * 2);
    this._energia -= Math.round(Math.random() * 20);
    this._defesa += Math.round(Math.random() * 10);
    this._poder += Math.round(Math.random() * 100);

    if (this._poder > 15000) {
      this._vidaAtual -= Math.round(Math.random() * 2);
      this._energia -= Math.round(Math.random() * 20);
      this._defesa += Math.round(Math.random() * 20);
      this._poder += Math.round(Math.random() * 200);
    }

  }

  public soldierFight(): void {
    this._vidaAtual -= Math.round(Math.random() * 10);
    this._energia -= Math.round(Math.random() * 5);
    this._poder += Math.round(Math.random() * 50);
    if (this._poder > 10000) {
      this._vidaAtual -= Math.round(Math.random() * 5);
    }
  }


  public bossFight(): void {
    this._vidaAtual -= Math.round(Math.random() * 20);
    this._energia -= Math.round(Math.random() * 10);
    this._poder += Math.round(Math.random() * 100);
    if (this._poder > 15000) {
      this._vidaAtual -= Math.round(Math.random() * 10);
    }
    
  }


  public evolucao(): void {
    if (this._poder > 15000) {
      this._nivel = "Super Saiyajin";
      this._vidaBase = 200;
    }
  }
}