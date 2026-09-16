import { questions } from '../data/questions';
import type { PainterType, Scores } from '../types';

/**
 * 동점일 때 앞쪽 유형이 이긴다. 같은 답이면 항상 같은 결과가 나오도록
 * 무작위 없이 결정론적으로 처리한다.
 */
const TIE_BREAK_ORDER: PainterType[] = [
  'impressionist',
  'classicist',
  'abstractionist',
];

/**
 * 답안(문항 index -> 선택한 option id)을 받아 유형별 합계를 낸다.
 * 아직 답하지 않은 문항은 건너뛴다.
 */
export function tally(answers: (string | undefined)[]): Record<PainterType, number> {
  const total: Record<PainterType, number> = {
    impressionist: 0,
    classicist: 0,
    abstractionist: 0,
  };

  questions.forEach((question, index) => {
    const optionId = answers[index];
    if (!optionId) return;
    const option = question.options.find((o) => o.id === optionId);
    if (!option) return;
    for (const [type, points] of Object.entries(option.scores) as [
      keyof Scores,
      number,
    ][]) {
      total[type] += points;
    }
  });

  return total;
}

/** 합계가 가장 높은 유형을 고른다. 동점은 TIE_BREAK_ORDER 로 해소. */
export function resolveType(answers: (string | undefined)[]): PainterType {
  const total = tally(answers);
  return TIE_BREAK_ORDER.reduce((best, type) =>
    total[type] > total[best] ? type : best,
  );
}
