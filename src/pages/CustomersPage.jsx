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


import React, { useState } from "react";

const CustomersPage = () => {
  const initialCustomers = [
    { id: 1, name: "Aarav Patel", email: "aarav.patel@gmail.com", phone: "+91 70001 11111", joined: "25-05-15" },
    { id: 2, name: "Jack", email: "jack@gmail.com", phone: "+91 98765 43210", joined: "24-08-10" },
    { id: 3, name: "John Doe", email: "john.doe@gmail.com", phone: "+91 555-123-456", joined: "24-11-22" },
    { id: 4, name: "Meera Iyer", email: "meera.iyer@gmail.com", phone: "+91 78901 23456", joined: "25-03-01" },
    { id: 5, name: "Priya Sharma", email: "priya.sharma@gmail.com", phone: "+91 90012 34567", joined: "25-01-04" },
    { id: 6, name: "Rohit Sharma", email: "rohit12sharma@gmail.com", phone: "+91 76512 30067", joined: "25-08-16" },
    { id: 7, name: "Ali", email: "ali8899@gmail.com", phone: "+91 8867012167", joined: "25-01-14" },
    { id: 8, name: "James bond", email: "jamesbond007gmail.com", phone: "+91 9988776655", joined: "25-03-25" },
    { id: 9, name: "Abhishek", email: "abhi27@gmail.com", phone: "+91 9012341567", joined: "25-05-19" },
    { id: 10, name: "Anand verma", email: "anandverma01gmail.com", phone: "+91 88908 34567", joined: "25-10-04" },
  ];

  const [customers, setCustomers] = useState(initialCustomers);
  const [blockedCustomers, setBlockedCustomers] = useState([]);
  const [search, setSearch] = useState("");

  /* BLOCK LOGIC */
  const handleBlock = (customer) => {
    setCustomers(customers.filter((c) => c.id !== customer.id));
    setBlockedCustomers([...blockedCustomers, customer]);
  };

  /* UNBLOCK LOGIC */
  const handleUnblock = (customer) => {
    setBlockedCustomers(blockedCustomers.filter((c) => c.id !== customer.id));
    setCustomers([...customers, customer]);
  };

  /* SEARCH ONLY ACTIVE CUSTOMERS */
  const filteredCustomers = customers.filter(
    (c) =>
      c.id.toString().includes(search) ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2 style={styles.title}>Customers List</h2>
        <input
          style={styles.search}
          placeholder="Search by Name or Phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ACTIVE CUSTOMERS TABLE */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Joined</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.length === 0 ? (
            <tr>
              <td colSpan="6" style={styles.noData}>No customers found</td>
            </tr>
          ) : (
            filteredCustomers.map((c, index) => (
              <tr key={c.id}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{c.name}</td>
                <td style={styles.td}>{c.email}</td>
                <td style={styles.td}>{c.phone}</td>
                <td style={styles.td}>{c.joined}</td>
                <td style={styles.td}>
                  <button style={styles.blockBtn} onClick={() => handleBlock(c)}>
                    Block
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* BLOCKED CUSTOMERS SECTION */}
      {blockedCustomers.length > 0 && (
        <>
          <h3 style={styles.blockedTitle}>Blocked Customers List</h3>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {blockedCustomers.map((c, index) => (
                <tr key={c.id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{c.name}</td>
                  <td style={styles.td}>{c.email}</td>
                  <td style={styles.td}>{c.phone}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.unblockBtn}
                      onClick={() => handleUnblock(c)}
                    >
                      Unblock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },

  header: {
    background: "#000",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  title: {
    color: "#fff",
    fontSize: "26px",
  },

  search: {
    padding: "10px",
    borderRadius: "6px",
    width: "300px",
    border: "none",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },

  th: {
    border: "2px solid black",
    background: "#2c3e50",
    color: "#fff",
    padding: "12px",
  },

  td: {
    border: "2px solid black",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },

  blockBtn: {
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "6px 14px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  unblockBtn: {
    background: "#27ae60",
    color: "#fff",
    border: "none",
    padding: "6px 14px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  blockedTitle: {
    marginTop: "40px",
    fontSize: "22px",
    color: "#c0392b",
  },

  noData: {
    padding: "20px",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default CustomersPage;


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

