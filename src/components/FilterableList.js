import React, { useState } from 'react'

export function FilterableList ({ list }) {
  const [filterStr, setfilterStr] = useState('')

  if (!list) return 'Invalid list'
  const filteredList = list.filter(e => e.includes(filterStr))

  return (
    <div>
      <input
        type='text'
        value={filterStr}
        onChange={e => setfilterStr(e.target.value)}
      />
      <ul>
        {(filteredList.length === 0) && <li>No data</li>}
        {filteredList.map(e => <li>{e}</li>)}
      </ul>
    </div>
  )
}
