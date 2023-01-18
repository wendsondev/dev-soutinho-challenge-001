import devSoutinho from '@assets/devSoutinho.png';
import github from '@assets/github-logo.svg';
import { CopyButton } from '@components/CopyButton';
import { Input } from '@components/Input';
import { useState } from 'react';
import {
  BorderRadius,
  Container,
  GithubLink,
  Image,
  InputContainer,
  Title,
} from './styles';

export function Home() {
  const [topLeft, setTopLeft] = useState('0');
  const [topRight, setTopRight] = useState('0');
  const [bottomLeft, setBottomLeft] = useState('0');
  const [bottomRight, setBottomRight] = useState('0');

  const validateValue = (value: string) => {
    if (!value.trim()) return '0';

    return `${value}px`;
  };

  return (
    <Container>
      <GithubLink
        href="https://github.com/wendson13/dev-soutinho-challenge-001"
        target="_blank"
        title="Repository"
      >
        <img src={github} alt="Github logo" />
      </GithubLink>

      <Title>
        [Previewer] <span>border-radius:</span>
      </Title>

      <CopyButton>
        {`border-radius: ${validateValue(topLeft)} ${validateValue(
          topRight
        )} ${validateValue(bottomLeft)} ${validateValue(bottomRight)};`}
      </CopyButton>

      <BorderRadius>
        <InputContainer>
          <Input
            label="Top Left"
            value={topLeft}
            onChange={(env) => setTopLeft(env.target.value.trim())}
          />

          <Input
            label="Top Right"
            value={topRight}
            onChange={(env) => setTopRight(env.target.value.trim())}
          />
        </InputContainer>

        <Image
          radius={{ topLeft, topRight, bottomLeft, bottomRight }}
          src={devSoutinho}
          alt="dev Soutinho"
        />

        <InputContainer>
          <Input
            label="Bottom Left"
            value={bottomLeft}
            onChange={(env) => setBottomLeft(env.target.value.trim())}
          />

          <Input
            label="Button Right"
            value={bottomRight}
            onChange={(env) => setBottomRight(env.target.value.trim())}
          />
        </InputContainer>
      </BorderRadius>
    </Container>
  );
}
