// import './DashboardPage.css'

// function CustomersPage() {
//   return (
//     <div className="dashboard-page">
//       <h2>Customers</h2>
//       <p>Coming Soon</p>
//     </div>
//   )
// }

// export default CustomersPage

// src/pages/customer.jsx
import { useMemo, useState } from "react";

const MOCK_CUSTOMERS = [
  { id: 1, name: "jack", email: "jack@example.com", phone: "+91 98765 43210", joined: "2024-08-10" },
  { id: 2, name: "Priya Sharma", email: "priya.sharma@example.com", phone: "+91 90012 34567", joined: "2025-01-04" },
  { id: 3, name: "John Doe", email: "john.doe@example.com", phone: "+91 555-123-456", joined: "2024-11-22" },
  { id: 4, name: "Meera Iyer", email: "meera.iyer@example.com", phone: "+91 78901 23456", joined: "2025-03-01" },
  { id: 5, name: "Aarav Patel", email: "aarav.patel@example.com", phone: "+91 70001 11111", joined: "2025-05-15" },
];

export default function Customers() {
  const [query, setQuery] = useState("");
  const [customers, setCustomers] = useState(MOCK_CUSTOMERS);
  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState("asc"); // 'asc' | 'desc'

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const rows = customers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q)
    );
    const dir = sortDir === "asc" ? 1 : -1;
    return rows.sort((a, b) => {
      const av = String(a[sortKey]).toLowerCase();
      const bv = String(b[sortKey]).toLowerCase();
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  }, [query, customers, sortKey, sortDir]);

  function toggleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function addMockCustomer() {
    const nextId = customers.length ? Math.max(...customers.map((c) => c.id)) + 1 : 1;
    const newCust = {
      id: nextId,
      name: `New Customer ${nextId}`,
      email: `new${nextId}@example.com`,
      phone: "+91 80000 00000",
      joined: new Date().toISOString().slice(0, 10),
    };
    setCustomers((prev) => [newCust, ...prev]);
  }

  function deleteCustomer(id) {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section>
      <div className="page-header">
        <h2>Customer List</h2><br />
        <div className="header-actions">
          <input
            className="input"
            type="text"
            placeholder="Search by name, email, or phone..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* <button className="btn primary" onClick={addMockCustomer}>+ Add</button> */}
        </div>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => ("id")}>ID</th>
              <th onClick={() => ("name")}>Name {/*{sortKey === "name" ? (sortDir === "asc" ? "▲" : "▼") : ""}*/} </th>
              <th onClick={() => ("email")}>Email</th>
              <th onClick={() => ("phone")}>Phone</th>
              <th onClick={() => ("joined")}>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.joined}</td>
                <td>
                  <button className="btn btn btn-info me-2" onClick={() => alert(`Edit ${c.name}`)} style={{ color:'black', border: '2px solid black'}}>Edit</button>
                  
                  <button className="btn btn btn-danger" onClick={() => deleteCustomer(c.id)} style={{ color:'black', border: '2px solid black'}}>Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "1rem" }}>
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
