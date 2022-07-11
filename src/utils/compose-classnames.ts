export function composeClassNames(...classNames: (string | number | null | undefined)[]) {
  const formattedClassNames = classNames.filter(Boolean).join(' ');
  return formattedClassNames;
}
