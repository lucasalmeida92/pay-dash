import { useState } from 'react'
import styled from 'styled-components'
import {
  BsHouseDoor,
  BsHouseDoorFill,
  BsEnvelope,
  BsEnvelopeFill,
  BsChatDots,
  BsChatDotsFill,
  BsPerson,
  BsFillPersonFill,
  BsGear,
  BsGearFill,
} from "react-icons/bs"
import { IoCloudUploadOutline, IoCloudUpload } from "react-icons/io5"

const LinkText = styled.span`
  max-width: 0;
  overflow: hidden;
  margin-left: 0;
  font-weight: 400;
  white-space: nowrap;
  transition: all 200ms ease-out;
  opacity: 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 112px;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  transition: all 200ms ease-out;

  &:hover {
    padding-left: 32px;
    padding-right: 32px;

    ${LinkText} {
      max-width: 260px;
      margin-left: 16px;
      opacity: 1;
    }
  }
`
const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  transition: all 200ms ease-out;

  ${LinkText} {
    font-weight: ${({ isActive }) => isActive ? '700' : '400'};
  }

  &:hover {
    transform: scale(1.05);
    background-color: rgba(0,0,0,.07);

    ${LinkText} {
      transform: translateX(2px);
    }
  }
`

const links = [
  {
    text: 'Home',
    href: '#',
    icon: BsHouseDoor,
    activeIcon: BsHouseDoorFill,
  },
  {
    text: 'Inbox',
    href: '#',
    icon: BsEnvelope,
    activeIcon: BsEnvelopeFill,
  },
  {
    text: 'Chat',
    href: '#',
    icon: BsChatDots,
    activeIcon: BsChatDotsFill,
  },
  {
    text: 'My account',
    href: '#',
    icon: BsPerson,
    activeIcon: BsFillPersonFill,
  },
  {
    text: 'Statements',
    href: '#',
    icon: IoCloudUploadOutline,
    activeIcon: IoCloudUpload,
  },
  {
    text: 'Settings',
    href: '#',
    icon: BsGear,
    activeIcon: BsGearFill,
  },
]

function SideNav() {
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <Wrapper>
      <ul>
        {links.map(link => {
          const Icon = activeLink === link.text ? link.activeIcon : link.icon

          return (
            <li key={link.text}>
              <Link
                href={link.href}
                title={`${link.text} link`}
                onClick={() => setActiveLink(link.text)}
                isActive={activeLink === link.text}
              >
                <Icon size="28px" />
                <LinkText>{link.text}</LinkText>
              </Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default SideNav
