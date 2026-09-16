import type { Question } from '../types';

/**
 * 5문항. 각 선택지는 감각(impressionist) / 구조(classicist) / 실험(abstractionist)
 * 축 중 하나에만 점수를 준다.
 *
 * 문항 구성상 구조형이 4개 문항(q1b·q3b·q4b·q5a)에 등장해 노출이 많으므로,
 * 구조형은 2점 / 감각형·실험형은 3점으로 두어 최대 점수를 8:9:9로 맞춘다.
 * 가중치를 바꾸면 scripts/check-balance.ts 로 분포를 다시 확인할 것.
 */
export const questions: Question[] = [
  {
    id: 'q1',
    text: '새 캔버스 앞에 섰습니다.\n가장 먼저 무엇을 하나요?',
    options: [
      {
        id: 'a',
        label: '떠오르는 느낌대로 일단 칠하기 시작한다',
        scores: { impressionist: 3 },
      },
      {
        id: 'b',
        label: '무엇을 그릴지 정하고 밑그림부터 잡는다',
        scores: { classicist: 2 },
      },
    ],
  },
  {
    id: 'q2',
    text: '색을 고를 때\n당신에게 더 가까운 쪽은?',
    options: [
      {
        id: 'a',
        label: '지금 눈에 끌리는 색을 그때그때 집는다',
        scores: { impressionist: 3 },
      },
      {
        id: 'b',
        label: '아무도 안 쓸 법한 조합을 일부러 고른다',
        scores: { abstractionist: 3 },
      },
    ],
  },
  {
    id: 'q3',
    text: '칠하다가 실수로\n엉뚱한 곳에 물감이 묻었습니다.',
    options: [
      {
        id: 'a',
        label: '그대로 살려서 다른 무언가로 바꿔본다',
        scores: { abstractionist: 3 },
      },
      {
        id: 'b',
        label: '지우고 원래 계획대로 되돌린다',
        scores: { classicist: 2 },
      },
    ],
  },
  {
    id: 'q4',
    text: '그림이 가장 잘 그려지는\n공간은 어디인가요?',
    options: [
      {
        id: 'a',
        label: '창밖이 보이고 음악이 흐르는 곳',
        scores: { impressionist: 3 },
      },
      {
        id: 'b',
        label: '모든 도구가 제자리에 놓인 곳',
        scores: { classicist: 2 },
      },
    ],
  },
  {
    id: 'q5',
    text: '"다 그렸다"고 느끼는\n순간은 언제인가요?',
    options: [
      {
        id: 'a',
        label: '처음 의도한 것이 빠짐없이 담겼을 때',
        scores: { classicist: 2 },
      },
      {
        id: 'b',
        label: '더 건드리면 망칠 것 같을 때',
        scores: { abstractionist: 3 },
      },
    ],
  },
];
