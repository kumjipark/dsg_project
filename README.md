# 나는 어떤 화가일까?

5문항으로 자신의 화가 유형을 알아보는 웹 테스트입니다.

## 화면

| 화면 | 내용 |
|---|---|
| 시작 | 소개 문구, 소요 시간(약 1분 · 5문항), 시작 버튼 |
| 질문 | 한 번에 한 문항, 선택지 2개, 진행률 표시, 이전으로 돌아가기 |
| 결과 | 3가지 유형 중 하나, 캐릭터 이미지, 설명, 다시하기 · 공유하기 |

결과 유형은 **인상주의자**(감각) · **고전주의자**(구조) · **추상주의자**(실험) 세 가지입니다.

## 기술

- **Vite + React 19 + TypeScript** — 서버·DB·라우터 없는 순수 클라이언트 앱. 화면 전환은 `useState` 상태 머신이며, 새로고침하면 결과는 사라집니다.
- **[몽타주 디자인시스템](https://github.com/wanteddev/montage-web)** (`@wanteddev/wds`) — `Button`, `Typography`, `ProgressIndicator`, `FlexBox`, `TopNavigation`
- 폰트 **Pretendard** (CDN)
- 캐릭터 이미지는 피그마에서 추출한 픽셀아트

### 몽타주를 vendor 로 포함한 이유

`@wanteddev/wds`는 공개 npm이 아닌 **GitHub Package Registry**에만 배포되어 있어 설치에 인증 토큰이 필요합니다. 토큰 없이도 `npm install` 한 번으로 재현되도록, 공개 저장소를 클론해 빌드한 결과물을 `vendor/` 에 포함하고 `file:` 의존성으로 연결했습니다.

업스트림 갱신이 필요하면 [montage-web](https://github.com/wanteddev/montage-web)을 클론해 `pnpm --filter "@wanteddev/wds..." run build` 후 각 패키지의 `dist`와 `package.json`을 `vendor/` 에 복사하고, `workspace:*` 를 `file:../<패키지>` 로 바꾸면 됩니다.

## 실행

```bash
npm install
npm run dev
```

## 문항·유형 수정

문구와 채점 가중치는 화면 코드와 분리되어 있습니다.

- `src/data/questions.ts` — 5문항, 선택지, 유형별 가중치
- `src/data/results.ts` — 유형 이름·설명·이미지·배경색
- `src/lib/score.ts` — 합산 및 동점 처리(결정론적)

가중치를 바꾼 뒤에는 32가지 답변 조합을 모두 돌려 세 유형이 전부 도달 가능한지 확인하세요.

```bash
npx tsx scripts/check-balance.ts
```

## 만들지 않은 것

결과 저장 · 회원가입 · 통계 · 공유 버튼의 실제 동작(화면만 존재)
