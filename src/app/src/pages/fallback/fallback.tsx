import { useLocation } from 'react-router-dom';

export default function Fallback() {
  const location = useLocation();

  return (
    <pre>
      <code>
        {`
        <error>
            <head>
              <meta charSet="UTF-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>WOW, CONGRATULATIONS 👏🏿 YOU JUST BROKE THE APP USING 👉 "${location.pathname}" URL</title>
            </head>
            <body>🧙‍♀️🪄👨‍🔧🚨⛔️🚓💔😭🙅🏿🧹</body>
        </error>
        `}
      </code>
    </pre>
  );
}
