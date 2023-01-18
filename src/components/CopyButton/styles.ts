import styled from 'styled-components';

export const Button = styled.button`
  margin: 0 auto;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  padding: 0.875rem;
  border: none;
  cursor: pointer;
  font-family: 'Ubuntu Mono', sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary['050']};
  background-color: ${({ theme }) => theme.colors.neutral[600]};
`;
