import './styles.css'

export const TextInput = ({ handleChange, searchValue }) => {
    return(
        <input 
        type="search"
        value={searchValue}
        onChange={handleChange}
        className="text-input"
        placeholder="Type your search"
      />
    )
}