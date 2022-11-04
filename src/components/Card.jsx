import { useState } from "react";
import { Avatar } from "./Avatar";

export const Card = ({content, user, createAt}) => {
  const [isHover, setIsHover] = useState(false);
  const onIsHover = () => {
    setIsHover(prev => !prev);
  }
  const css = {
    padding: '16px 24px',
    minHeight: '100px',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: isHover ? '#eee' : 'white',
    cursor: isHover ? 'pointer' : 'default',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  }

  return (
    <div onMouseEnter={onIsHover} onMouseLeave={onIsHover} style={css}>
      {content}
      {user && (
        <div style={{display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center'}}>
          <Avatar src={user.imgSrc}/>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <p style={{margin: '0', fontSize: '12px', fontWeight: 'regular',}}>{user.name}</p>
            <p style={{margin: '0', fontSize: '12px', fontWeight: 'regular',}}>{createAt}</p>
          </div>
        </div>
      )}
    </div>
  )
}