
export abstract class Personagem {
    constructor(
        protected _nome: string,
        protected _vidaAtual: number,
        protected _vidaBase: number,
        protected _energia: number,
        protected _ataque: number,
        protected _defesa: number,
        protected _poder: number,
        protected _nivel: string
    ) { }




    public set nome(nome: string) {
        this._nome = nome;
    }


    public set vidaBase(vidaBase: number) {
        this._vidaBase = vidaBase;
    }



    public set vidaAtual(vidaAtual: number) {
        this._vidaAtual = vidaAtual;
    }





    public set ataque(ataque: number) {
        this._ataque = ataque;
    }

    public set defesa(defesa: number) {
        this._defesa = defesa;
    }



    public set poder(poder: number) {
        this._poder = poder;
    }

    public set nivel(nivel: string) {
        this._nivel = nivel;
    }





    public abstract apresentacao(): void;


    public status(): string {
        return (
            "Gerreiro Z: \n" +
            "\nNome:" + this._nome +
            "\nVida:" + this._vidaAtual + "/"+ this._vidaBase +  " " + "Energia:" + this._energia +
            "\nAtaque:" + this._ataque + " " + "Defesa:" + this._defesa +
            "\nPoder:" + this._poder +
            "\nNivel:" + this._nivel

        );
    }



    public abstract treinarAtaque(): void;


    public abstract treinarDefesa(): void;




    public descansar(time:number): void {
        this._vidaAtual += time * Math.round(Math.random() * 2);
        this._energia += time * Math.round(Math.random() * 20);
        if (this._vidaAtual >= this._vidaBase) {
            this._vidaAtual = this._vidaBase;
        }
        if (this._energia >= 100) {
            this._energia = 100;
        }
    }


    public abstract soldierFight(): void;


    public abstract bossFight(): void;




    public sementeDeuses(): number {
        return this._vidaAtual = this._vidaBase , this._energia = 100;
    }


    public abstract evolucao(): void;



    public danger(): void {
        if(this._energia <= 0){
            this._energia = 0;
            this._vidaAtual -= 10;
        }
        if(this._energia == 0){
            console.log("Descanse para não diminuir a sua vida")
        }
    }


    public dangerHard(){
        if (this._vidaAtual <= 30 && this._vidaAtual >= 0) {
            console.log("Você está em perigo!!");
        } 

    }

    public winSoldier(): boolean {
        if (this._poder > 10000 && this._ataque > 150) {
            console.log("VOCÊ VENCEU!!")
            return false;
        } else {
            return true;
        }
    }

    public winBoss(): boolean {
        if (this._poder > 15000 && this._ataque > 250) {
            console.log("VOCÊ VENCEU!!")
            return false;
        } else {
            return true;
        }
    }



    public isDead(): boolean {
        if (this._vidaAtual <= 0) {
            console.log("OPS...VOCÊ MORREU!!")
            console.log("Junte as esferas do dragão para voltar ao jogo!!")
            return false;
        } else {
            return true;
        }
    }


    public isOver(): string {
        return (
              "||==================================================||"   +
            "\n||Sua aventura no mundo de Dragon Ball Z acaba agora||" +
            "\n||                  Até a próxima!!                 ||" +
            "\n||==================================================||"

        )

    }
}
