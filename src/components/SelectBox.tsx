export interface ISelectBoxItem {
  key: string
  value: string
  item: any
}

interface ISelectBox {
  title?: string
  description?: string
  updateState: React.Dispatch<React.SetStateAction<ISelectBoxItem>>
  item: ISelectBoxItem
  options: ISelectBoxItem[]
}

export function SelectBox({
  title,
  description,
  updateState,
  item,
  options
}: ISelectBox): JSX.Element {
  // Adpated from here: https://flowbite.com/docs/forms/select/
  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
      {title && title !== '' && <span className="text-gray-700">Select a {title}</span>}
      {description && description !== '' && <div className="text-gray-300">{description}</div>}
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={item.value}
        onChange={(evt) => {
          var newItem = options[evt.target.options.selectedIndex]
          updateState(newItem)
        }}
      >
        {options.map((item: ISelectBoxItem) => {
          return (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          )
        })}
      </select>
    </label>
  )
}
