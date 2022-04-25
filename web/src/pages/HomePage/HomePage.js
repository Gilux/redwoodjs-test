import { Link, NavLink, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
              <NavLink activeClassName="activeLink" to={routes.about()}>
                About
              </NavLink>
              <NavLink activeClassName="activeLink" to={routes.home()}>
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>Home</main>
    </>
  )
}

export default HomePage
