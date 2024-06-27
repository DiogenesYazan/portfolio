import hiddenEndity from '../assets/img/01hiddenEndity.png';
import javaGPT from '../assets/img/02javaGPT.gif';
import APIRest from '../assets/img/03apiRest.png';
import crudFirebase from '../assets/img/04CRUD.png';
import rpgDeTexto from '../assets/img/05CRPG.png';
import snakePy from '../assets/img/06SnakePY.png';
import cadastro from '../assets/img/07cadastro.png';
import yazanBank from '../assets/img/08bank.jpeg';
import pokedex from '../assets/img/09pokedex.png';
import todo from '../assets/img/10to-do.png';
import reactNative from '../assets/img/11reactApp.jpeg';
import portfolio from '../assets/img/12meuPort.png';

const allProjects = [
  {
    id: 12,
    name: 'Hidden Endity',
    moduleCourse: 'Game Development',
    img: hiddenEndity,
    linkGitHub: 'https://github.com/DiogenesYazan/HiddenEndity',
    linkPage: 'https://diogenesyazan.itch.io/hidden-endity',
    linkVideo: hiddenEndity,
    technologies: 'Unity, C#',
    text: 'Esse jogo foi feito na unity em 20 dias dedicando 2 a 3 horas por dia, usando C# como linguagem de programação.'
  },

  {
    id: 11,
    name: 'Java-GPT',
    moduleCourse: 'Java',
    img: javaGPT,
    linkGitHub: 'https://github.com/DiogenesYazan/Java-GPT',
    linkPage: 'https://github.com/DiogenesYazan/Java-GPT/releases/download/v1/app.jar',
    linkVideo: javaGPT,
    technologies: 'Java, Gemini',
    text: 'Olá, esse é um projetinho de uma interface gráfica de ChatGPT usando Gradle/Java e a API do Google Gemini.'
  },

  {
    id: 10,
    name: 'Meu primeiro API-Rest',
    moduleCourse: 'Back-end',
    img: APIRest,
    linkGitHub: 'https://github.com/DiogenesYazan/meu_primeiro_API-Rest',
    linkPage: 'https://github.com/DiogenesYazan/meu_primeiro_API-Rest',
    linkVideo: APIRest,
    technologies: 'React, Typescript, Node.js, Express, MongoDB',
    text: 'Este é um Projeto de autenticação CRUD usando mongoDB, express, node & Typerscript.'
  },
  
  {
    id: 9,
    name: 'CRUD Firebase',
    moduleCourse: 'Back-end',
    img: crudFirebase,
    linkGitHub: 'https://github.com/DiogenesYazan/Back-End_Firebase',
    linkPage: 'https://github.com/DiogenesYazan/Back-End_Firebase',
    linkVideo: crudFirebase,
    technologies: 'React, JSX, Firebase',
    text: 'Primeiro projeto Back-End usando React e o SaaS Firebase como o back-end.'
  },
  
  {
    id: 8,
    name: 'RPG de Texto',
    moduleCourse: 'Back-end',
    img: rpgDeTexto,
    linkGitHub: 'https://github.com/DiogenesYazan/RPG-de-Texto',
    linkPage: 'https://github.com/DiogenesYazan/RPG-de-Texto',
    linkVideo: rpgDeTexto,
    technologies: 'C#',
    text: 'Um rpg de texto pelo prompt do console usando C#.'
  },

  {
    id: 7,
    name: 'Snake Py',
    moduleCourse: 'Python',
    img: snakePy,
    linkVideo: snakePy,
    linkGitHub: 'https://github.com/DiogenesYazan/Jogo-Snake/',
    linkPage: 'https://github.com/DiogenesYazan/Jogo-Snake/',
    technologies: 'Python, TKinter',
    text: 'Jogo Snake feito em Python com TKinter.'
  },

  {
    id: 6,
    name: 'CadastroClientes',
    moduleCourse: 'Desktop',
    img: cadastro,
    linkVideo: cadastro,
    linkGitHub: 'https://github.com/DiogenesYazan/CadastroClientes',
    linkPage: 'https://github.com/DiogenesYazan/CadastroClientes',
    technologies: 'C#',
    text: 'Este app foi feito em C# usando Visual Studio. O objetivo do projeto era desenvolver uma interface de cadastro de clientes.'
  },

  {
    id: 5,
    name: 'Yazan Bank',
    moduleCourse: 'Mobile',
    img: yazanBank,
    linkVideo: yazanBank,
    linkGitHub: 'https://github.com/DiogenesYazan/yazan-bank',
    linkPage: 'https://github.com/DiogenesYazan/yazan-bank',
    technologies: 'Flutter, Dart',
    text: 'Projeto Mobile feito no Flutter e Dart. O objetivo do projeto era desenvolver uma interface de aplicação de conta bancária usando o FlutterFlow.'
  },

  {
    id: 4,
    name: 'Pokedex',
    moduleCourse: 'Front-end',
    img: pokedex,
    linkVideo: pokedex,
    linkGitHub: 'https://github.com/DiogenesYazan/Pokedex',
    linkPage: 'https://diogenesyazan.github.io/Pokedex/',
    technologies: 'JavaScript, CSS3, HTML5',
    text: 'Projeto do bloco de front-end, foi utilizada manipulação de DOM e Javascript para criar uma aplicação onde e possível fazer uma busca de pokemons.'
  },

  {
    id: 3,
    name: 'To-do List',
    moduleCourse: 'Front-end',
    img: todo,
    linkVideo: todo,
    linkGitHub: 'https://github.com/DiogenesYazan/To-do-List',
    linkPage: 'https://diogenesyazan.github.io/To-do-List/',
    technologies: 'JavaScript, CSS3, HTML5',
    text: 'Projeto do bloco de front-end, foi utilizada manipulação de DOM e Javascript para criar uma aplicação onde e possível fazer uma lista de tarefas.'
  },

  {
    id: 2,
    name: 'Meu Primeiro App React Native',
    moduleCourse: 'Mobile',
    img: reactNative,
    linkVideo: reactNative,
    linkGitHub: 'https://github.com/DiogenesYazan/yuri-app-react-native',
    linkPage: 'https://github.com/DiogenesYazan/yuri-app-react-native',
    technologies: 'React Native, CSS3, HTML5',
    text: 'Primeiro projeto mobile feito em React Native.'
  },

  {
    id: 1,
    name: 'Primeiro portfólio',
    moduleCourse: 'Fundamentos',
    img: portfolio,
    linkVideo: portfolio,
    linkGitHub: 'https://github.com/DiogenesYazan/diogenes-yuri',
    linkPage: 'https://diogenesyazan.github.io/diogenes-yuri',
    technologies: 'CSS3, HTML5',
    text: 'Primeiro projeto e primeiro portfólio, esta foi minha primeira experiência com algo relacionado a programação'
  }
];


export default allProjects;