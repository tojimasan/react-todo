export const Todo = (props) => {
  const css = {
    height: 'fi',
    width: '300px',
    borderRadius: '8px',
    margin: '100px auto',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
  }

  return (
    <div style={css}>
      {props.children}
    </div>
  )
}