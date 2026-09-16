import {
  Button,
  FlexBox,
  ProgressIndicator,
  TopNavigation,
  TopNavigationButton,
  Typography,
} from '@wanteddev/wds';

import type { Question } from '../types';

interface Props {
  question: Question;
  index: number;
  total: number;
  /** 뒤로 돌아왔을 때 이전 선택을 강조 표시하기 위해 사용한다. */
  selectedOptionId: string | undefined;
  onSelect: (optionId: string) => void;
  onBack: () => void;
}

export default function QuestionScreen({
  question,
  index,
  total,
  selectedOptionId,
  onSelect,
  onBack,
}: Props) {
  const percent = ((index + 1) / total) * 100;

  return (
    <div className="page">
      <TopNavigation
        leadingContent={
          <TopNavigationButton variant="text" onClick={onBack}>
            이전
          </TopNavigationButton>
        }
        sx={{ marginBottom: '8px' }}
      />

      <FlexBox flexDirection="column" gap="8px">
        <ProgressIndicator percent={percent} />
        <Typography variant="caption1" sx={{ opacity: 0.6 }}>
          {`${index + 1} / ${total}`}
        </Typography>
      </FlexBox>

      {/* 문항을 진행률 바로 아래에 붙여 읽는 순서를 자연스럽게 하고,
          남는 여백은 아래쪽(선택지 위)으로 몰아 둔다. */}
      <FlexBox
        flexDirection="column"
        justifyContent="flex-start"
        flex="1"
        sx={{ paddingTop: '48px' }}
      >
        <Typography variant="title2" weight="bold" className="preline">
          {question.text}
        </Typography>
      </FlexBox>

      <FlexBox flexDirection="column" gap="12px">
        {question.options.map((option) => {
          const selected = option.id === selectedOptionId;
          return (
            <Button
              key={option.id}
              variant={selected ? 'solid' : 'outlined'}
              color={selected ? 'primary' : 'assistive'}
              size="large"
              fullWidth
              aria-pressed={selected}
              onClick={() => onSelect(option.id)}
              sx={{ whiteSpace: 'normal', textAlign: 'left', minHeight: '60px' }}
            >
              {option.label}
            </Button>
          );
        })}
      </FlexBox>
    </div>
  );
}
