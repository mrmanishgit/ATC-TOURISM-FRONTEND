import { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import './DashboardLayout.css'
 
function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
 
  const menuItems = [
 
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },       
{ path: '/dashboard/bookings', label: 'Bookings', icon: '🧾' }, 
{ path: '/dashboard/customers', label: 'Customers', icon: '👥' },
{ path: '/dashboard/destinations', label: 'Destinations', icon: '🌍' }, 
{ path: '/dashboard/packages', label: 'Packages', icon: '📦' }, 
{ path: '/dashboard/Feedback', label: 'Feedback', icon: '⭐' }, 
 
  ]
 
  const handleLogout = () => {
    navigate('/')
  }
 
  return (
    <div className="dashboard-layout">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Aja Tourism</h2>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>
 
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Dashboard</h1>
          </div>
          <div className="header-right">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>
 
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
 
export default DashboardLayout