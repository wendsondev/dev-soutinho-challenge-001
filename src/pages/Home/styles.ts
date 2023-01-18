import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24rem;
  gap: 2rem;
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.neutral[900]};

  @media (max-width: 640px) {
    padding: 4rem 2rem;
  }
`;

export const GithubLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.primary['050']};

  span {
    display: block;
    font-family: 'Ubuntu Mono', sans-serif;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    font-size: 3rem;

    span {
      font-size: 2.5rem;
    }
  }
`;

type ImageProps = {
  radius: {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
};

const validateValue = (value: string) => {
  if (!value.trim()) return '0';

  return value;
};

export const Image = styled.img<ImageProps>`
  width: 20.5rem;
  height: 20.5rem;
  object-fit: cover;
  border-radius: ${({ radius }) =>
    `
      ${validateValue(radius.topLeft)}px 
      ${validateValue(radius.topRight)}px 
      ${validateValue(radius.bottomRight)}px
      ${validateValue(radius.bottomLeft)}px 
    `};

  @media (max-width: 640px) {
    width: 100%;
    height: auto;
  }
`;

export const BorderRadius = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
