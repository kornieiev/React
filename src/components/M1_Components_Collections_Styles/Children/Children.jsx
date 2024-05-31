import { ChildrenH3 } from './Children.styled';

export default function Children({ children }) {
  return (
    <>
      <h2>Передача сhildren в компонент:</h2>
      <ChildrenH3>{children}</ChildrenH3>
    </>
  );
}
