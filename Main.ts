import { Personagem } from "./Personagem";
import { Saiyajin } from "./Saiyajin";
import { Namekuseijin } from "./Namekuseijin";
import { Terraqueo } from "./Terraqueo";
import prompt from 'prompt-sync';

let teclado = prompt();



let guerreiroz: Personagem;

let personagens = [

    new Saiyajin('Son Goku', 80, 100, 100, 90, 70, 9000, 'Saiyajin'),

    new Saiyajin('Vegeta', 90, 100, 100, 90, 80, 10000, 'Saiyajin'),

    new Namekuseijin('Piccolo', 70, 100, 100, 70, 70, 7000, "Namekuseijin"),

    new Terraqueo('Kuririn', 60, 100, 100, 60, 60, 3000, "Normal")

]



console.log('|==========Dragon Ball Z==========|')
console.log('|===========Personagens===========|')
console.log('|1.Goku                           |')
console.log('|2.Vegeta                         |')
console.log('|3.Piccolo                        |')
console.log('|4.Kuririn                        |')
console.log('|=================================|')


let num = +teclado('Escolha um personagem:');

guerreiroz = personagens[num - 1];


let opcao = 0;

console.log(guerreiroz.apresentacao());


while (opcao != 5 && guerreiroz.isDead()) {


    console.log(`+============+ Personagem +============+`);
    console.log('|1. Treinar Ataque:                    |');
    console.log('|2. Treinar Defesa:                    |');
    console.log('|3. Descansar:                         |');
    console.log('|4. Encontrar luta:                    |');
    console.log('|5. Sair:                              |');
    console.log('+======================================+');

    opcao = +teclado("Escolha uma opção: ")

    switch (opcao) {
    
        case 1:
            guerreiroz.treinarAtaque();
            guerreiroz.danger();
            guerreiroz.dangerHard();
            guerreiroz.evolucao();
            console.log(guerreiroz.status());
            break;


        case 2:
            guerreiroz.treinarDefesa();
            guerreiroz.danger();
            guerreiroz.dangerHard();
            guerreiroz.evolucao();
            console.log(guerreiroz.status());
            break;


        case 3:
            console.log(guerreiroz.status());
            let horas: number = +teclado("Você quer descansar quantas horas?")
            guerreiroz.descansar(horas);
            console.log(guerreiroz.status());
            break;
         



        case 4:
            let opcao1: number = 0;

            while (opcao1 != 3 && guerreiroz.isDead()) {

                console.log('+=====+ Escolha o adversário +====+');
                console.log('|1. Soldado                       |');
                console.log('|2. Boss Fight                    |');
                console.log('|3. Fugir:                        |');
                console.log('+================================+');

                opcao1 = +teclado('Escolha a batalha ou fuja como um inseto: ');

                switch (opcao1) {

                    case 1:
                        let opcao2: number = 0;

                        while (opcao2 != 3 && guerreiroz.isDead() && guerreiroz.winSoldier()) {

                            console.log('+======Adversário: Soldado +=====+');
                            console.log('|1. Lutar                        |');
                            console.log('|2. Comer semente dos Deuses     |');
                            console.log('|3. Fugir                        |');
                            console.log('+================================+');

                            opcao2 = +teclado('Sua decisão pode definir a sua vida, escolha a certa: ');

                            switch (opcao2) {

                                case 1:
                                    guerreiroz.soldierFight();
                                    guerreiroz.evolucao();
                                    console.log(guerreiroz.status());
                                    break;
                                case 2:
                                    guerreiroz.sementeDeuses()
                                    console.log(guerreiroz.status());
                                    break;
                            }
                        }
                    case 2:
                        let opcao3: number = 0;

                        while (opcao3 != 3 && guerreiroz.isDead() && guerreiroz.winBoss()) {

                            console.log('+======Adversário: Boss +========+');
                            console.log('|1. Lutar                        |');
                            console.log('|2. Comer semente dos Deuses     |');
                            console.log('|3. Fugir                        |');
                            console.log('+================================+');

                            opcao3 = +teclado('Luta dificil, saiba escolher a melhor opção: ');

                            switch (opcao3) {

                                case 1:
                                    guerreiroz.bossFight();
                                    guerreiroz.evolucao();
                                    guerreiroz.dangerHard();
                                    console.log(guerreiroz.status());
                                    break;
                                case 2:
                                    guerreiroz.sementeDeuses();
                                    console.log(guerreiroz.status());
                                    break;
                            }
                        }

                }
            }

              case 5:
                console.log(guerreiroz.isOver());
                break;

    }
}



