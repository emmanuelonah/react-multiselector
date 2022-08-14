import styled from 'styled-components';

import { Multiselector } from 'packages';

const Container = styled.div`
  background-color: #e2bffc;
  border-radius: 20px;
  border: solid 1px #959595;
  padding: 1rem;

  & h1 {
    font-size: 1rem;
    padding-bottom: 1rem;
    font-weight: 500;
  }

  & .multiselector-imp {
    width: 100%;
    max-width: 350px;

    & .multiselector-tag {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 1rem;

      & .multiselector-tag-item {
        margin-right: 5px;
        margin-bottom: 5px;

        & section {
          border-radius: 10px;
          background-color: #fff;
          display: flex;
          align-items: center;
          border: solid 1px #999;
          padding: 2px 20px;
          font-size: 0.9rem;

          & .multiselector-tag-item__text-content {
            padding-right: 7px;
          }

          & .multiselector-tag-item__cancel-icon {
            cursor: pointer;
          }
        }
      }
    }

    & .multiselector-label {
      margin-right: 10px;
      width: 30%;
    }

    & .multiselector-search-bar {
      padding: 0.5rem;
      border: solid 1px #999;
      border-radius: 10px;
      width: calc(100% - 30%);

      &.multiselector-search-bar--visually-focused {
        border: 2px dashed crimson;
        border-radius: 3px;
        outline: none;
      }
    }

    & .multiselector-listbox {
      border-radius: 10px;
      background-color: #fff;
      margin-top: 10px;
      width: calc(100% - 30%);
      margin-left: 15%;
      padding: 0.5rem;

      & .multiselector-listbox__option {
        font-size: 0.9rem;
        color: #333;
        border-bottom: solid 1px #eee;
        padding: 10px 5px;

        &:hover {
          cursor: pointer;
          background: ${({ theme }) => theme.colors.background};
        }

        &.multiselector-listbox__option--selected {
          color: #a605a6;

          & .with-meta {
            color: #a7a5a5;
            font-size: 0.6rem;
            font-style: italic;
            display: block;
          }
        }
      }

      .multiselector-listbox__option--visually-focused {
        border: 2px dashed crimson;
        border-radius: 3px;
        outline: none;
      }
    }

    & .multiselector-infinite-scroller {
    }
  }
`;

const items = [
  { id: '001', textContent: 'Banana', value: 'Banana' },
  { id: '002', textContent: 'Apple', value: 'Apple' },
  { id: '003', textContent: 'Strawberry', value: 'Strawberry' },
  { id: '004', textContent: 'Watermelon', value: 'Watermelon' },
  { id: '005', textContent: 'Pineapple', value: 'Pineapple' },
  { id: '006', textContent: 'Banana', value: 'Banana' },

  { id: '007', textContent: 'Apple2', value: 'Apple2' },
  { id: '008', textContent: 'Strawberry2', value: 'Strawberry2' },
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
    <Container>
      <h1>Multiselector Experiment 🧪</h1>
      <Multiselector.Root selectedItems={[]}>
        <Multiselector.Tag />
        <Multiselector.Label>Fruits</Multiselector.Label>
        <Multiselector.Body
          withMeta
          searchBarPlaceholder="Search fruit"
          items={items}
          onSelectItem={(clickedItem, items) => {
            console.log(clickedItem, items);
          }}
        />
      </Multiselector.Root>
    </Container>
  );
}
