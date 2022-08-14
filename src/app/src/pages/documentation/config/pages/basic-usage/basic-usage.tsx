import styled from 'styled-components';

import { Content } from './components/content';
import { Experiment } from './components/experiment';

const Article = styled.article`
  padding-bottom: 2rem;
`;

export default function BasicUsage() {
  return (
    <Article>
      <Content
        heading={
          <>
            Using the library with <span className="code">{'<Multiselector.Body/>'}</span>
            <span className="meta-info">and this is how we encourage you to use the library</span>
          </>
        }
        iframeProps={{ src: 'https://carbon.now.sh/embed/NFC2RauSO9VICrsYvUsS' }}
        playground={<Experiment />}
      />
    </Article>
  );
}
