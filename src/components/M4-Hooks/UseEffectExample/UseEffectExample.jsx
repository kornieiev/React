import { useState, useEffect } from 'react';

export default function UseEffectExample() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('document.title', document.title);
    document.title = `You clicked ${value} times`;
  });

  return (
    <div>
      <p>You clicked {value} times</p>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
}
