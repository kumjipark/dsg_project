/** 화가 유형 3종. 감각 / 구조 / 실험 축으로 구성된다. */
export type PainterType = 'impressionist' | 'classicist' | 'abstractionist';

/** 유형별 점수. 선택지가 점수를 주지 않는 유형은 생략한다. */
export type Scores = Partial<Record<PainterType, number>>;

export interface Option {
  id: string;
  label: string;
  scores: Scores;
}

export interface Question {
  id: string;
  text: string;
  options: [Option, Option];
}

export interface Result {
  type: PainterType;
  name: string;
  tagline: string;
  description: string;
  /** 결과 화면에 표시할 이미지 경로. 피그마에서 받은 픽셀아트 캐릭터. */
  image: string;
  /** 이미지 뒤에 깔리는 배경색. */
  placeholderColor: string;
}
