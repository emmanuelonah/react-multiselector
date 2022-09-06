import { Content } from './components/content';
import { Experiment } from './components/experiment';

export default function BasicUsage() {
  return (
    <article>
      <Content
        heading={
          <>
            Using the library with <span className="code">{'<Multiselector.Body/>'}</span>
            <span className="meta-info">and this is how we encourage you to use the library</span>
          </>
        }
        code={`
          import { Multiselector } from 'packages';

            const items = [
              { id: '001', textContent: 'Banana', value: 'Banana' },
              { id: '002', textContent: 'Apple', value: 'Apple' },
              { id: '003', textContent: 'Strawberry', value: 'Strawberry' },
              { id: '004', textContent: 'Watermelon', value: 'Watermelon' },
              { id: '005', textContent: 'Pineapple', value: 'Pineapple' },
              { id: '006', textContent: 'Banana', value: 'Banana' },

              { id: '007', textContent: 'Apple2', value: 'Apple2' },
              { id: '008', textContent: 'Strawberry2', value: 'Strawberry2' },∂
              { id: '009', textContent: 'Watermelon2', value: 'Watermelon2' },
              { id: '010', textContent: 'Pineapple2', value: 'Pineapple2' },

              { id: '011', textContent: 'Banana3', value: 'Banana3' },
              { id: '012', textContent: 'Apple3', value: 'Apple3' },
              { id: '013', textContent: 'Strawberry3', value: 'Strawberry3' },
              { id: '014', textContent: 'Watermelon3', value: 'Watermelon3' },
              { id: '015', textContent: 'Pineapple3', value: 'Pineapple3' },

              { id: '016', textContent: 'Banana4', value: 'Banana4' },
              { id: '017', textContent: 'Apple4', value: 'Apple4' },
              { id: '018', textContent: 'Strawberry4', value: 'Strawberry4' },
              { id: '019', textContent: 'Watermelon4', value: 'Watermelon4' },
              { id: '020', textContent: 'Pineapple4', value: 'Pineapple4' },
            ];

            export function Experiment() {
              return (
                  <Multiselector.Root selectedItems={[]}>
                    <Multiselector.Tag />
                    <Multiselector.Label>Fruits</Multiselector.Label>
                    <Multiselector.Body
                      searchBarPlaceholder="Search fruit"
                      items={items}
                      withMeta
                      onSelectItem={(clickedItem, items) => {
                        console.log(clickedItem, items);
                      }}
                    />
                  </Multiselector.Root>
              );
            }
      `}
        playground={<Experiment />}
      />
    </article>
  );
}
