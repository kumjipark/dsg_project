import { Button, FlexBox, Typography } from '@wanteddev/wds';

import { results } from '../data/results';
import type { PainterType } from '../types';

interface Props {
  type: PainterType;
  onRestart: () => void;
}

export default function ResultScreen({ type, onRestart }: Props) {
  const result = results[type];

  return (
    <div className="page">
      <FlexBox
        flexDirection="column"
        alignItems="center"
        gap="16px"
        flex="1"
        sx={{ textAlign: 'center', paddingTop: '8px' }}
      >
        <FlexBox
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            maxWidth: '260px',
            aspectRatio: '1 / 1',
            borderRadius: '20px',
            backgroundColor: result.placeholderColor,
            overflow: 'hidden',
          }}
        >
          <img
            src={result.image}
            alt={`${result.name} 캐릭터 일러스트`}
            width={260}
            height={260}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              // 픽셀아트라 확대 시 뭉개지지 않도록 보간을 끈다.
              imageRendering: 'pixelated',
            }}
          />
        </FlexBox>

        <FlexBox flexDirection="column" gap="4px">
          <Typography variant="caption1" sx={{ opacity: 0.6 }}>
            {result.tagline}
          </Typography>
          <Typography variant="display3" weight="bold">
            {result.name}
          </Typography>
        </FlexBox>

        <Typography
          variant="body1-reading"
          className="preline"
          sx={{ textAlign: 'left' }}
        >
          {result.description}
        </Typography>
      </FlexBox>

      <FlexBox flexDirection="column" gap="8px" sx={{ marginTop: '24px' }}>
        <Button
          variant="solid"
          color="primary"
          size="large"
          fullWidth
          onClick={onRestart}
        >
          다시하기
        </Button>
        {/* 요구사항상 화면만 있으면 되는 버튼. 실제 공유 동작은 연결하지 않았다. */}
        <Button variant="outlined" color="assistive" size="large" fullWidth>
          공유하기
        </Button>
      </FlexBox>
    </div>
  );
}
