import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        '050': string;
        500: string;
        300: string;
      };

      neutral: {
        '050': string;
        900: string;
        400: string;
        600: string;
      };
    };
  }
}
