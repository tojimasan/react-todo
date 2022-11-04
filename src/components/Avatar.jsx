export const Avatar = ({src}) => {
  const css = {
    width: '40px',
    height: '40px',
    borderRadius: '100%',
  }

  return (
    <img src={src} style={css}></img>
  )
}