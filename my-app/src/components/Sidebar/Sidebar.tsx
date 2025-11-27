interface SidebarProps {
  menuItems: string[]
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  if (!menuItems || menuItems.length === 0) {
    return null
  }

  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
