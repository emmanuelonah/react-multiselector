/* eslint-disable max-len */

import styled from 'styled-components';

import { Experiment } from 'packages/multiselector/stories/experiment';

const Container = styled.div`
  width: 100%;
`;

const Article = styled.article``;

const Heading = styled.h2`
  font-size: 1rem;
  margin-top: 2rem;

  & .code {
    color: #bd8ce0;
    font-weight: 500;
  }

  & .meta-info {
    font-size: 0.8rem;
    font-weight: 500;
    font-style: italic;
    color: #707070;
  }
`;

const Paragraph = styled.p`
  color: #fed644;
  margin: 1rem 0;
  text-decoration: underline;
`;

export default function BasicUsage() {
  return (
    <Container>
      <Article>
        <section>
          <Heading>
            Using the library with{' '}
            <span className="code">
              {`
                <Multiselector.Body/>
            `}
            </span>
            <span className="meta-info">and this is how we encourage you to use the library</span>
          </Heading>
          <Paragraph>Code snippet 👇</Paragraph>
          <iframe
            title="withoutInfiniteScroller"
            loading="lazy"
            src="https://carbon.now.sh/embed/NFC2RauSO9VICrsYvUsS"
            sandbox="allow-scripts allow-same-origin"
            style={{ width: '100%', height: '400px', border: 0, overflow: 'hidden' }}
          />
          <Paragraph>Playground</Paragraph>
          <Experiment />
        </section>

        <section>
          <Heading>
            Using the library by render props pattern{' '}
            <span className="meta-info">
              this is useful when you want to tap into the data and decide what the user sees
            </span>
          </Heading>
          <Paragraph>Code snippet 👇</Paragraph>
          <iframe
            title="withoutInfiniteScroller"
            loading="lazy"
            src="https://carbon.now.sh/embed/NFC2RauSO9VICrsYvUsS"
            sandbox="allow-scripts allow-same-origin"
            style={{ width: '100%', height: '400px', border: 0, overflow: 'hidden' }}
          />
        </section>
      </Article>
    </Container>
  );
}
