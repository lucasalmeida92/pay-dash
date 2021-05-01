import styled from 'styled-components'
import SearchInput from './SearchInput'
import UserMenu from './UserMenu'
import NotificationsButton from '../../components/NotificationsButton'
import LanguagesMenu from './LanguagesMenu'

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template: 112px 1fr 32px / 112px 1fr 48px;
  grid-template-areas: "header header"
                       "sidenav content";
`
const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template: 100% / 152px auto auto;
  grid-template-areas: "logo search navbar";
`
const Logo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-area: logo;

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 2.5rem;
    font-weight: 800;
    transform: translateY(-4px);
  }
`
const Search = styled.div`
  display: grid;
  align-items: center;
  grid-area: search;
  justify-self: start;
  padding-left: 16px;
`
const NavBar = styled.nav`
  grid-area: navbar;
  justify-self: end;
  display: flex;
  align-items: center;
`
const Sidenav = styled.nav`
  grid-area: sidenav;
`
const Content = styled.main`
  grid-area: content;
  background-color: white;
  border-radius: 60px;
  padding: 48px;
`

function Layout({ children }) {
  return (
    <Wrapper>
      <Header>
        <Logo>
          <h1>Pay</h1>
        </Logo>
        <Search>
          <SearchInput />
        </Search>
        <NavBar>
          <LanguagesMenu />
          <NotificationsButton marginLeft="4px"/>
          <UserMenu />
        </NavBar>
      </Header>
      <Sidenav />
      <Content>
        { children }
      </Content>
    </Wrapper>
  )
}

export default Layout
