'use client';

import { questions } from '@/data/questions';
import { InvestorProfile } from '@/types/quiz';
import { useState } from 'react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type: 'A' | 'B' | 'C') => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const getResult = (): InvestorProfile => {
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);


    const maxCount = Math.max(...Object.values(counts));
    const mostCommon = Object.keys(counts).find(key => counts[key] === maxCount);

    switch (mostCommon) {
      case 'A': return 'Conservador';
      case 'B': return 'Moderado';
      default: return 'Agressivo';
    }
  };

  const getPortfolio = (profile: InvestorProfile) => {
    switch (profile) {
      case 'Conservador':
        return {
          btc: 60,
          eth: 30,
          stablecoins: 10
        };
      case 'Moderado':
        return {
          btc: 40,
          eth: 30,
          altcoins: 20,
          stablecoins: 10
        };
      case 'Agressivo':
        return {
          btc: 30,
          eth: 20,
          altcoins: 30,
          stablecoins: 20
        };
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const profile = getResult();
    const portfolio = getPortfolio(profile);

    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center dark:text-white">
          Seu Perfil: {profile}
        </h2>
        <div className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Balanceamento Recomendado:</h3>
          <ul className="space-y-2">
            <li className="flex justify-between dark:text-gray-200">
              <span>Bitcoin (BTC):</span>
              <span className="font-bold">{portfolio.btc}%</span>
            </li>
            <li className="flex justify-between dark:text-gray-200">
              <span>Ethereum (ETH):</span>
              <span className="font-bold">{portfolio.eth}%</span>
            </li>
            {portfolio.altcoins && (
              <li className="flex justify-between dark:text-gray-200">
                <span>Altcoins:</span>
                <span className="font-bold">{portfolio.altcoins}%</span>
              </li>
            )}
            <li className="flex justify-between dark:text-gray-200">
              <span>Stablecoins:</span>
              <span className="font-bold">{portfolio.stablecoins}%</span>
            </li>
          </ul>
        </div>
        <button
          onClick={handleRestart}
          className="w-full p-4 text-center bg-indigo-300 hover:bg-indigo-400 text-indigo-950 rounded-lg transition-colors font-semibold"
        >
          Fazer o teste novamente
        </button>
      </div>
    );
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1)); // Remove the last answer
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center dark:text-white">
        Que tipo de criptoinvestidor é você?
      </h1>
      <div className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Questão {currentQuestion + 1} de {questions.length}
          </span>
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="text-sm text-indigo-300 hover:text-indigo-400 transition-colors"
            >
              ← Voltar
            </button>
          )}
        </div>
        <h2 className="text-xl mb-4 dark:text-white text-gray-300">
          {questions[currentQuestion].question}
        </h2>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type)}
              className="w-full p-4 text-left bg-indigo-300 hover:bg-indigo-400 text-indigo-950 rounded-lg transition-colors"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}