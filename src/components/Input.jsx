export const Input = ({value, placeholder, onChange, onKeyDown}) => {
  const css = {
    padding: '4px 8px',
    borderRadius: '4px',
    border: 'none',
    lineHeight: '160%',
    outline: 'none',
    fontSize:'20px',
  }

  return (
    <input value={value} onChange={onChange} style={css} placeholder={placeholder} type={'text'} onKeyDown={onKeyDown}/>
  )
}
