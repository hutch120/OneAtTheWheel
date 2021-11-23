import { Select } from 'react-functional-select'
import { useCallback } from 'react'

export function FilterableList ({ list, onClickItem }) {
  const getOptionValue = useCallback((option) => option.id, [])
  const onOptionChange = useCallback((option) => onClickItem(option.course), [onClickItem])
  const getOptionLabel = useCallback((option) => `${option.course}`, [])

  return (
    <Select
      placeholder='Select Course ...'
      isClearable
      isInvalid={false}
      options={list}
      isDisabled={false}
      onOptionChange={onOptionChange}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
    />
  )
}
