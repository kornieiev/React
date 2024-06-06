import React, { useEffect, useState } from 'react';

export default function SkipMountEffect() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }
    console.log(`Fetch data with ${searchTerm}`);
  }, [searchTerm]);

  return (
    <div>
      <h3>SkipMountEffect</h3>

      <div>
        <form
          onSubmit={evt => {
            evt.preventDefault();
            console.log(evt.target.elements);
            setSearchTerm(evt.target.elements.term.value);
          }}
        >
          <input type="text" name="term" />
          <button type="submit">Set search term</button>
        </form>
      </div>
    </div>
  );
}
