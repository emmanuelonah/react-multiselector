import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: ${({ theme }) => theme.fontSize.md};
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        line-height: ${({ theme }) => theme.lineHeight.sm};
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: ${({ theme }) => theme.lineHeight.md};
    }

    img {
        max-width: 100%;
        display: block;
        height: auto;
    }

    ul, ol {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    select,
    button,
    [type="submit"],
    [type="reset"],
    [type="button"]{
        cursor: pointer;
        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`;
