import { Button, FlexBox, Typography } from '@wanteddev/wds';

import { questions } from '../data/questions';

interface Props {
  onStart: () => void;
}

export default function StartScreen({ onStart }: Props) {
  return (
    <div className="page">
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="12px"
        flex="1"
        sx={{ textAlign: 'center' }}
      >
        <img
          src="/images/cover.png"
          alt=""
          width={200}
          height={200}
          style={{
            width: '200px',
            maxWidth: '60%',
            height: 'auto',
            // 픽셀아트라 확대 시 뭉개지지 않도록 보간을 끈다.
            imageRendering: 'pixelated',
          }}
        />

        <Typography variant="display2" weight="bold">
          나는 어떤 화가일까?
        </Typography>

        <Typography variant="body1-reading" className="preline">
          {'붓을 쥐는 방식은 사람마다 다릅니다.\n5개의 질문으로 당신 안에 있는\n화가의 기질을 찾아보세요.'}
        </Typography>

        <Typography variant="caption1" sx={{ marginTop: '4px', opacity: 0.6 }}>
          {`약 1분 소요 · ${questions.length}문항`}
        </Typography>
      </FlexBox>

      <Button
        variant="solid"
        color="primary"
        size="large"
        fullWidth
        onClick={onStart}
      >
        시작하기
      </Button>
    </div>
  );
}
