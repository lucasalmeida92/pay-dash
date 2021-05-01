import { useState } from 'react'
import styled from 'styled-components'
import DropdownMenu from '../../components/DrowpdownMenu'
import { RiArrowDownSLine } from "react-icons/ri"

const OpenButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 120ms ease-out;

  &:hover {
    transform: scale(1.07);
    background-color: rgba(0,0,0,.07);
  }
`
const Icon = styled(RiArrowDownSLine)`
  margin-left: 4px;
  transition: all 200ms ease-out;
  transform: rotate(${({ isOpen }) => isOpen ? '180deg' : 0});
`

const languages = [
  {
    title: 'English (EN)',
    value: 'EN',
  },
  {
    title: 'Español (ES)',
    value: 'ES',
  },
  {
    title: 'Português (PT)',
    value: 'PT',
  },
]

function LanguagesMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('EN')

  return (
    <DropdownMenu
      openButton={
        <OpenButton>
          <span>{currentLanguage}</span>
          <Icon size="18" isOpen={isOpen} />
        </OpenButton>
      }
      onClickOpen={(openStatus) => setIsOpen(openStatus)}
    >
      {languages.map(lang => (
        <li key={lang.value}>
          <button
            onClick={() => setCurrentLanguage(lang.value)}
          >
            {lang.title}
          </button>
        </li>
      ))}
    </DropdownMenu>
  )
}

export default LanguagesMenu
