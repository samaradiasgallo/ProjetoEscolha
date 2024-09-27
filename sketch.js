let suaidade;
let titulo;
let corpo;
let genero;
let romance;
let ficção;
let contos;
let livros = {
  menor10:{
    romance: "O Jardim Secreto",
    ficção: "Harry Potter e a Pedra Filosofal",
    contos: "Contos de Fadas dos Irmãos Grimm"
  },
 entre10e14:{
    romance: "A Seleção",
    ficção: "Percy Jackson e o Ladrão de Raios",
    contos: "O Menino Maluquinho"
 },
  entre14e16:{
    romance: "Para Todos os Garotos que Já Amei",
    ficção: "Os Jogos Vorazes",
    contos: "Contos de Fadas para Garotas Modernas"
  },
  entre16e18:{
    romance: "A Cinco Passos de Você",
    ficção: "Duna",
    contos: "O Livro das Coisas Estranhas"
  },
  maior18:{
    romance: "Orgulho e Preconceito",
    ficção: "1984",
    contos: "O Melhor de Edgar Allan Poe" 
  }
};
  
let botao;

function setup() {
  createCanvas(850, 400).position(100,100);
  titulo = "Playwrite CU";
  corpo = "Handjet";
  genero = "Merriweather";
  createSpan("qual a sua idade??").position(580,530).addClass("esconde");
  suaidade = createInput("").position(590,585).addClass("esconde");
  romance = createCheckbox("você gosta de livros de romance?").position(100,600).addClass("esconde");
  ficção = createCheckbox("você gosta de livros de ficção?").position(100,650).addClass("esconde");
  contos = createCheckbox("você gosta de livros de contos?").position(100,700).addClass("esconde");

  botao = createButton("APERTE O BOTÃO").position(width/2, 520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}

function bota(){
  selectAll('.esconde').forEach((el) => el.removeClass('esconde'));
  botao.hide();
}

function draw() {
  background("black");
  let idade = parseInt(suaidade.value());
  let checkromance = romance.checked();
  let checkficção = ficção.checked();
  let checkcontos = contos.checked();
  let livro = "Insira suas preferências";
  if (suaidade.value() !==""){
    livro = mostrajogo(idade, checkromance, checkficção, checkcontos)
}
    fill("white");
  stroke ("purple");
  textAlign(CENTER, CENTER);
  textSize(27);
  text("MELHOR INDICADOR DE LIVROS 2024", width/2, 30);
  textFont(corpo);
  
  fill("yellow");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(livro, width/2, height/2);
  textFont(titulo);

}

function  mostrajogo(idade, checkromance, checkficção, checkcontos){
  if (isNaN(idade)){
    return "Idade Inválida"
  }
  if (idade < 5){
    return "Já aprendeu a ler? Eu, nessa idade, não sabia."
  } else
    if (idade > 120){
      return "Tá cultivando o hábito de morto-vivo? Dando descanso pros coveiros de plantão KKKKKKKKKK"
    }
  if (idade >= 5 && idade < 10){
    if (checkromance){
      return livros["menor10"]["romance"];
    }
    if (checkficção){
      return livros["menor10"]["ficção"];
    }
    if (checkcontos){
      return livros["menor10"]["contos"]; 
    }
  }
else if (idade >= 10 && idade < 14){
    if (checkromance){
      return livros["entre10e14"]["romance"];
    }
    if (checkficção){
      return livros["entre10e14"]["ficção"];
    }
    if (checkcontos){
      return livros["entre10e14"]["contos"]; 
    }
  }
else if (idade >= 14 && idade < 16){
    if (checkromance){
      return livros["entre14e16"]["romance"];
    }
    if (checkficção){
      return livros["entre14e16"]["ficção"];
    }
    if (checkcontos){
      return livros["entre14e16"]["contos"]; 
    }
  }
else if (idade >= 16 && idade < 18){
    if (checkromance){
      return livros["entre16e18"]["romance"];
    }
    if (checkficção){
      return livros["entre16e18"]["ficção"];
    }
    if (checkcontos){
      return livros["entre16e18"]["contos"]; 
    }
  }
else if (idade >= 18){
    if (checkromance){
      return livros["maior18"]["romance"];
    }
    if (checkficção){
      return livros["maior18"]["ficção"];
    }
    if (checkcontos){
      return livros["maior18"]["contos"]; 
    }
  } return "Coloca Alguma Coisa";
}
