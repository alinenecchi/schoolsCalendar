import Graduation from "../components/icons/Graduation";
import Blackboards from "../components/icons/Blackboards";
import Telescope from "../components/icons/Telescope";

export const dataCard = [
  {
    icon: <Graduation />,
    title: "Aprendizagem Criativa",
    text: "Educamos para formar cidadãos que sejam indivíduos que convivam bem em sociedade, respeitando o próximo, cumprindo com suas obrigações e desfrutando de seus direitos.",
    text2: "Consideramos que o estudante é competente quando alia seu conhecimento à prática, sendo capaz de tomar decisões sobre um assunto que domina. A forma como ele estabelece relações com esse conhecimento deve ser ética e pautada pelo respeito a si e ao outro. Esperamos que o estudante tenha condições de conhecer e de transitar por diversas realidades, sendo livre para atuar naquela em que desejar."
  },
  {
    icon: <Blackboards />,
    title: "Inglês a língua do mundo",
    text: "Para a atividade Extracurricular de Inglês, o Colégio conta com a parceria da Escola de Idiomas CCAA. A franquia de escolas de inglês possui mais de 50 anos de atuação.",
    text2: "O ensino de idiomas oferece diferentes modalidades para os alunos do Colégio. As aulas são ministradas por uma equipe do CCAA, em uma sala de aula própria para as atividades nas nossas instalações, com turmas pequenas e atendimento personalizado. As aulas ocorrem no Colégio na sala de idiomas em diversos horários. Para maiores informações, entre em contato com a secretaria da escola.",
  },
  {
    icon: <Telescope />,
    title: "Competências socioemocionais",
    text: "Valores como Bom Relacionamento; Busca pela Excelência; Disciplina e Organização; Eficiência e Empreendedorismo e Compromisso com a Sustentabilidade permeiam os projetos. ",
    text2: "Dessa forma, o Colégio mantém-se fiel à visão de ser referência nacional em Educação, buscando constantemente aliar tradição e inovação em práticas que preparam o estudante para ser cidadão do mundo contemporâneo. Acreditamos que a educação deve promover a transformação concreta na sociedade através da comunicação.",
  },
];

export const whoWeAre = {
  title : "Quem somos",
  text : "Destaca-se por uma educação integral com valores e princípios, vivenciados em um ambiente propício à construção de conhecimentos e produção dos saberes escolares.",
  image : "/images/image-who-we-are.png",
  alt : "Estudante"
}

export const dataInfo  = {
  title : "Informações",
  text : "Sentimo-nos fortalecidos por acreditar, cada vez mais, na educação e, assim, exercitar nossa autonomia repensando a prática e apontando caminhos.",
  dataCard : [
    {
      icon: <Graduation />,
      title: "Matrículas",
      text: "Para saber mais sobre o processo de matrícula e rematrícula, favor clicar abaixo.",
      href: "/images/Volta às aulas.jpg",
      buttonName: "Saiba mais"
    },
    {
      icon: <Blackboards />,
      title: "Calendário Escolar",
      text: "Para saber mais sobre as datas gerais e férias, favor clicar abaixo.",
      href: "/images/Calendário Anual.jpg", 
      buttonName: "Saiba mais"
    },
    {
      icon: <Telescope />,
      title: "Lista de Materiais Escolar",
      text: "Para saber mais sobre o processo de matrícula e rematrícula, favor clicar abaixo.",
      href: "/images/Lista Material Escolar.jpg",
      buttonName: "Saiba mais"
    },
  ]
}

export const dataContact = {
  title : "Fale Conosco",
  text : "Endereço: R. Quinze de Novembro, 1146 – Vila Dubus, Pres. Prudente – SP",
  buttonName: "Como chegar",
  href: "/who-we-are",
}