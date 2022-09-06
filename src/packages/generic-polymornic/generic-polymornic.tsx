import React from 'react';

export type PrimitiveElementPropTypes<T extends React.ElementType> = {
  as: T;
};

export type GenericPolymorphicPropTypes<T extends React.ElementType> = {} & Omit<
  React.ComponentPropsWithoutRef<T>,
  keyof PrimitiveElementPropTypes<T>
>;

export function GenericPolymorphic<T extends React.ElementType>({ as, ...restProps }: GenericPolymorphicPropTypes<T>) {
  const Component = as;

  return <Component {...restProps} />;
}
