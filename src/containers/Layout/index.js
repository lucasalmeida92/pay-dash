import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template: 112px 1fr 32px / 112px 1fr 32px;
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
    font-size: 2.5rem;
    font-weight: 700;
  }
`
const Search = styled.div`
  display: grid;
  align-items: center;
  grid-area: search;
  justify-self: start;
`
const NavBar = styled.nav`
  display: grid;
  align-items: center;
  grid-area: navbar;
  justify-self: end;
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
          <span>Search</span>
        </Search>
        <NavBar>NavBar</NavBar>
      </Header>
      <Sidenav />
      <Content>
        { children }
      </Content>
    </Wrapper>
  )
}

export default Layout
