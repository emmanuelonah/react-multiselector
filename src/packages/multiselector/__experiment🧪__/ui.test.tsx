import Multiselector from 'packages/multiselector';

const items = [
  { id: '001', textContent: 'Banana', value: 'Banana' },
  { id: '002', textContent: 'Apple', value: 'Apple' },
  { id: '003', textContent: 'Strawberry', value: 'Straw' },
  { id: '004', textContent: 'Watermelon', value: 'Water' },
  { id: '005', textContent: 'Pineapple', value: 'Pineapple' },
];

export function UITest() {
  return (
    <>
      <h1>Multiselector Test</h1>
      <Multiselector.Root selectedItems={[]}>
        <Multiselector.Tag />
        <Multiselector.Label>Fruits</Multiselector.Label>
        <Multiselector.Body searchBarPlaceholder="Search fruit" items={items} />
      </Multiselector.Root>
    </>
  );
}
