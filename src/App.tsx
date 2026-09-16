import { useState } from 'react';

import { questions } from './data/questions';
import { resolveType } from './lib/score';
import QuestionScreen from './screens/QuestionScreen';
import ResultScreen from './screens/ResultScreen';
import StartScreen from './screens/StartScreen';

type Phase = 'start' | 'question' | 'result';

const emptyAnswers = (): (string | undefined)[] =>
  Array.from({ length: questions.length }, () => undefined);

export default function App() {
  const [phase, setPhase] = useState<Phase>('start');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | undefined)[]>(emptyAnswers);

  const start = () => {
    setAnswers(emptyAnswers());
    setIndex(0);
    setPhase('question');
  };

  /** 선택 즉시 다음 문항으로. 마지막 문항이면 결과로 넘어간다. */
  const select = (optionId: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = optionId;
      return next;
    });

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setPhase('result');
    }
  };

  /** 첫 문항에서 뒤로 가면 시작 화면으로 돌아간다. */
  const back = () => {
    if (index === 0) {
      setPhase('start');
    } else {
      setIndex(index - 1);
    }
  };

  if (phase === 'start') {
    return <StartScreen onStart={start} />;
  }

  if (phase === 'question') {
    return (
      <QuestionScreen
        question={questions[index]}
        index={index}
        total={questions.length}
        selectedOptionId={answers[index]}
        onSelect={select}
        onBack={back}
      />
    );
  }

  return <ResultScreen type={resolveType(answers)} onRestart={start} />;
}
