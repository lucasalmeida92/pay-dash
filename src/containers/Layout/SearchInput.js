import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const Wrapper = styled.div`
  display: flex;
  height: 44px;
  background-color: white;
  border-radius: 50px;
  overflow: hidden;
  transition: all 200ms ease-out;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.grey};
  }
`
const Icon = styled(FiSearch)`
  height: 100%;
  margin-left: 16px;
  margin-right: -2px;
`
const Input = styled.input`
  width: 264px;
  transition: all 200ms ease-out;

  &:focus {
    width: 272px;
  }
`

function SearchInput() {
  return (
    <Wrapper>
      <Icon size="23px" />
      <Input type="text" name="search-input" placeholder="Search" />
    </Wrapper>
  )
}

export default SearchInput
