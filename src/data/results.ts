import type { PainterType, Result } from '../types';

export const results: Record<PainterType, Result> = {
  impressionist: {
    type: 'impressionist',
    name: '인상주의자',
    tagline: '빛을 좇는 사람',
    description:
      '계획보다 지금 이 순간의 느낌을 믿습니다. 무엇을 그릴지보다 그때의 공기와 색이 먼저 다가오는 편이에요.\n\n덕분에 당신의 그림에는 설명하기 어려운 분위기가 남습니다. 다만 마음이 식기 전에 손을 움직여야 해서, 붙잡아 둘 기록 하나쯤은 곁에 두면 좋겠습니다.',
    image: '/images/impressionist.png',
    placeholderColor: '#FFE3B8',
  },
  classicist: {
    type: 'classicist',
    name: '고전주의자',
    tagline: '완성을 향해 쌓는 사람',
    description:
      '기초와 균형을 중요하게 여깁니다. 밑그림부터 차근차근 쌓아 올려 끝내 완성에 도달하는 힘이 있어요.\n\n당신의 그림은 오래 봐도 흐트러지지 않습니다. 다만 가끔은 계획에서 벗어난 얼룩 하나를 그냥 남겨두는 것도, 생각보다 나쁘지 않습니다.',
    image: '/images/classicist.png',
    placeholderColor: '#D6E4F5',
  },
  abstractionist: {
    type: 'abstractionist',
    name: '추상주의자',
    tagline: '규칙을 지우는 사람',
    description:
      '정해진 틀을 먼저 의심합니다. 남들이 실수라 부르는 자리에서 오히려 새로운 걸 발견하는 사람이에요.\n\n당신의 그림은 쉽게 잊히지 않습니다. 다만 모두가 단번에 알아보진 못하니, 설명을 덧붙일 여유도 함께 챙기면 좋겠습니다.',
    image: '/images/abstractionist.png',
    placeholderColor: '#E7DBF7',
  },
};
