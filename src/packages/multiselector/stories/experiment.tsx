import styled from 'styled-components';

import { Multiselector } from 'packages';

const Container = styled.div`
  padding: 1rem;

  & h1 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
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
  { id: '003', textContent: 'Strawberry', value: 'Straw' },
  { id: '004', textContent: 'Watermelon', value: 'Water' },
  { id: '005', textContent: 'Pineapple', value: 'Pineapple' },
];

export function Experiment() {
  return (
    <Container>
      <h1>Multiselector Experiment 🧪</h1>
      <Multiselector.Root selectedItems={[]}>
        <Multiselector.Tag />
        <Multiselector.Label>Fruits</Multiselector.Label>
        <Multiselector.Body searchBarPlaceholder="Search fruit" items={items} withMeta />
      </Multiselector.Root>
    </Container>
  );
}
