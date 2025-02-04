import { Question } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "Qual é o seu nível de conhecimento sobre criptomoedas?",
    options: [
      { text: "Iniciante – Sei o básico sobre Bitcoin e algumas altcoins.", type: "A" },
      { text: "Intermediário – Já investi antes e acompanho o mercado.", type: "B" },
      { text: "Avançado – Conheço DeFi, NFTs, staking e faço trading.", type: "C" }
    ]
  },
  {
    id: 2,
    question: "Qual é o seu objetivo principal ao investir em cripto?",
    options: [
      { text: "Preservação de capital com crescimento moderado.", type: "A" },
      { text: "Crescimento equilibrado entre segurança e risco.", type: "B" },
      { text: "Alto potencial de valorização, assumindo riscos.", type: "C" }
    ]
  },
  {
    id: 3,
    question: "Quanto tempo você pretende manter seus investimentos?",
    options: [
      { text: "Mais de 5 anos (longo prazo, buy and hold).", type: "A" },
      { text: "De 1 a 5 anos (médio prazo, balanceando segurança e retorno).", type: "B" },
      { text: "Menos de 1 ano (curto prazo, busco oportunidades rápidas).", type: "C" }
    ]
  },
  {
    id: 4,
    question: "Como você reage às quedas do mercado cripto?",
    options: [
      { text: "Me preocupo bastante e penso em vender.", type: "A" },
      { text: "Fico atento, mas sigo minha estratégia.", type: "B" },
      { text: "Vejo como oportunidade de comprar mais.", type: "C" }
    ]
  },
  {
    id: 5,
    question: "Qual porcentagem do seu patrimônio total está investida em cripto?",
    options: [
      { text: "Menos de 10% – Apenas um complemento.", type: "A" },
      { text: "Entre 10% e 40% – Parte significativa, mas equilibrada.", type: "B" },
      { text: "Mais de 40% – Estou all-in no mercado cripto.", type: "C" }
    ]
  },
  {
    id: 6,
    question: "Você já utiliza estratégias como staking ou farming para gerar renda passiva?",
    options: [
      { text: "Não, prefiro investimentos mais simples.", type: "A" },
      { text: "Sim, utilizo staking e algumas estratégias conservadoras.", type: "B" },
      { text: "Sim, estou imerso em DeFi e estratégias avançadas.", type: "C" }
    ]
  },
  {
    id: 7,
    question: "Você se sente confortável investindo em altcoins com baixa capitalização?",
    options: [
      { text: "Não, prefiro projetos consolidados como Bitcoin e Ethereum.", type: "A" },
      { text: "Sim, mas apenas uma pequena parte do meu portfólio.", type: "B" },
      { text: "Sim, busco novas oportunidades de alta valorização.", type: "C" }
    ]
  },
  {
    id: 8,
    question: "Você acompanha as novidades do mercado cripto regularmente?",
    options: [
      { text: "Não muito, invisto passivamente.", type: "A" },
      { text: "Sim, acompanho notícias e análises.", type: "B" },
      { text: "Sim, opero diariamente e sigo tendências de mercado.", type: "C" }
    ]
  },
  {
    id: 9,
    question: "Você prefere segurança ou potencial de valorização?",
    options: [
      { text: "Segurança – Prefiro ativos sólidos como BTC e ETH.", type: "A" },
      { text: "Equilíbrio – Misturo ativos seguros com algumas altcoins.", type: "B" },
      { text: "Valorização – Estou disposto a assumir riscos altos.", type: "C" }
    ]
  },
  {
    id: 10,
    question: "O que você faria se uma moeda do seu portfólio dobrasse de valor em poucos dias?",
    options: [
      { text: "Realizaria lucros rapidamente.", type: "A" },
      { text: "Venderia parte e manteria o restante investido.", type: "B" },
      { text: "Manteria o investimento, esperando valorização maior.", type: "C" }
    ]
  }
];
