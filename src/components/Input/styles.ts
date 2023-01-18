import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.neutral['050']};
`;

export const Input = styled.input`
  width: 6.25rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.neutral[900]};
  background: ${(props) => props.theme.colors.neutral['050']};
`;
