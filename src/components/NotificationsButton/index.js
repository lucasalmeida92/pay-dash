import { useState } from 'react'
import styled from 'styled-components'
import { VscBell } from "react-icons/vsc"

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 120ms ease-out;
  border-radius: 56px;
  width: 48px;
  height: 48px;

  &:after {
    content: '';
    position: absolute;
    transform:  scale(${({ hasNotifications }) => hasNotifications ? 1 : 0});
    top: calc(50% - 14px);
    right: calc(50% - 11px);
    width: 10px;
    height: 10px;
    border-radius: 16px;
    background-color: #db503b;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.lightGrey1};
    transition: all 200ms ease-out;
  }

  &:hover {
    transform: scale(1.07);
    background-color: rgba(0,0,0,.07);
  }
`

function NotificationsButton() {
  const [hasNotifications, setHasNotifications] = useState(true)

  return (
    <Wrapper
      href="#"
      title="Notifications"
      hasNotifications={hasNotifications}
      onClick={() => setHasNotifications(!hasNotifications)}
    >
      <VscBell size="24" />
    </Wrapper>
  )
}

export default NotificationsButton
