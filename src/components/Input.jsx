export const Input = (props) => {
  const css = {
    padding: '4px 8px',
    borderRadius: '4px',
    border: 'none',
    lineHeight: '160%',
    outline: 'none',
    fontSize:'20px',
  }

  return (
    <input style={css} type={'text'} {...props}/>
  )
}
