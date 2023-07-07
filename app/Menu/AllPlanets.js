import mercurio from "../assets/mercurio.png";
import venus from "../assets/venus.png";
import terra from "../assets/terra.png";
import marte from "../assets/marte.png";
import jupiter from "../assets/jupiter.png";
import saturno from "../assets/saturno.png";
import urano from "../assets/urano.png";
import netuno from "../assets/netuno.png";

export const planets = [
    {planetName: "Mercúrio", imagePrincipal: mercurio, rotacao: "58.6", revolucao: "87.97", raio: "2,439.7", temperatura: "430", infoPlanet: "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Sua órbita ao redor do Sol leva 87,97 dias terrestres, o menor de todos os planetas do Sol. Mercúrio é um dos quatro planetas terrestres do Sistema Solar e é um corpo rochoso como a Terra."},
    {planetName: "Vênus", imagePrincipal: venus, rotacao: "243", revolucao: "224.7", raio: "6,051.8", temperatura: "471", infoPlanet: "Vênus é o segundo planeta a partir do Sol. É nomeado após a deusa romana do amor e da beleza. Como o objeto natural mais brilhante no céu noturno da Terra depois da Lua, Vênus pode lançar sombras e pode ser, em raras ocasiões, visível a olho nu em plena luz do dia."},
    {planetName: "Terra", imagePrincipal: terra, rotacao: "0.99", revolucao: "365.26", raio: "6,371", temperatura: "16", infoPlanet: "Terceiro planeta a partir do Sol e o único planeta conhecido a abrigar vida. Cerca de 29,2% da superfície da Terra é terra, com os restantes 70,8% cobertos por água. A distância da Terra ao Sol, as propriedades físicas e a história geológica permitiram que a vida evoluísse e prosperasse."},
    {planetName: "Marte", imagePrincipal: marte, rotacao: "1.03", revolucao: "1.88", raio: "3,389.5", temperatura: "-28",  infoPlanet: "Marte é o quarto planeta a partir do Sol e o segundo menor planeta do Sistema Solar, sendo maior do que apenas Mercúrio. Em inglês, Marte carrega o nome do deus romano da guerra e é muitas vezes referido como o 'Planeta Vermelho'."},
    {planetName: "Júpiter", imagePrincipal: jupiter, rotacao: "9.93", revolucao: "11.86", raio: "69,911", temperatura: "-108", infoPlanet: "Júpiter é o quinto planeta a partir do Sol e o maior do Sistema Solar. É um gigante gasoso com uma massa duas vezes e meia maior que a de todos os outros planetas do Sistema Solar combinados, mas menos de um milésimo da massa do Sol."},
    {planetName: "Saturno", imagePrincipal: saturno, rotacao: "10.8", revolucao: "29.46", raio: "58,232", temperatura: "-138", infoPlanet: "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar, depois de Júpiter. É um gigante gasoso com um raio médio de cerca de nove vezes e meia o da Terra. Tem apenas um oitavo da densidade média da Terra."},
    {planetName: "Urano", imagePrincipal: urano, rotacao: "17.2", revolucao: "84", raio: "25,362", temperatura: "-195", infoPlanet: "Urano é o sétimo planeta a partir do Sol. Seu nome é uma referência ao deus grego do céu, Urano segundo a mitologia grega, era o bisavô de Ares. Tem o terceiro maior raio planetário e a quarta maior massa planetária do Sistema Solar."},
    {planetName: "Netuno", imagePrincipal: netuno, rotacao: "16.08", revolucao: "164.79", raio: "24,622", temperatura: "-201", infoPlanet: "Netuno é o oitavo e mais distante planeta solar conhecido do Sol. No Sistema Solar, é o quarto maior planeta em diâmetro, o terceiro planeta mais massivo e o planeta gigante mais denso. É 17 vezes a massa da Terra, mais massiva que seu quase gêmeo Urano."}
];
