import { NavLink, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <p>Redwood Blog</p>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="activeLink" to={routes.home()}>
                Home
              </NavLink>
              <NavLink activeClassName="activeLink" to={routes.about()}>
                About
              </NavLink>
              <NavLink activeClassName="activeLink" to={routes.contact()}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
