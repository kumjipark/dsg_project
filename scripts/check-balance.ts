import { questions } from '../src/data/questions';
import { resolveType, tally } from '../src/lib/score';

const counts: Record<string, number> = {};
const samples: Record<string, string> = {};
const n = questions.length;

for (let mask = 0; mask < 2 ** n; mask++) {
  const answers = questions.map((q, i) => q.options[(mask >> i) & 1].id);
  const type = resolveType(answers);
  counts[type] = (counts[type] ?? 0) + 1;
  if (!samples[type]) samples[type] = answers.join('') + '  ' + JSON.stringify(tally(answers));
}

console.log(`총 ${2 ** n}개 조합\n`);
for (const t of ['impressionist', 'classicist', 'abstractionist']) {
  console.log(`${t.padEnd(16)} ${String(counts[t] ?? 0).padStart(2)}회   예시: ${samples[t] ?? '— 도달 불가!'}`);
}
const missing = ['impressionist','classicist','abstractionist'].filter(t => !counts[t]);
console.log(missing.length ? `\n❌ 도달 불가 유형: ${missing.join(', ')}` : '\n✅ 세 유형 모두 도달 가능');
