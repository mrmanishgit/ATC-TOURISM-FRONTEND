// import "./DashboardPage.css";
// import { useState } from "react";

// const bookingsData = [
//   { id: "BK-1001", customer: "Rahul Sharma", destination: "Charminar", date: "2025-03-15", status: "Confirmed", amount: 2500 },
//   { id: "BK-1002", customer: "Ayesha Khan", destination: "Chowmahalla Palace", date: "2025-03-18", status: "Pending", amount: 1800 },
//   { id: "BK-1003", customer: "Suresh Reddy", destination: "Golconda Fort", date: "2025-03-20", status: "Cancelled", amount: 3200 },
//   { id: "BK-1004", customer: "Neha Verma", destination: "Ramoji Film City", date: "2025-03-25", status: "Confirmed", amount: 4500 },
// ];

// function BookingsPage() {
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [page, setPage] = useState(1);
//   const pageSize = 3;

//   const filtered = bookingsData.filter(b =>
//     (b.customer.toLowerCase().includes(search.toLowerCase()) ||
//       b.destination.toLowerCase().includes(search.toLowerCase())) &&
//     (statusFilter === "All" || b.status === statusFilter)
//   );

//   const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

//   return (
//     <div className="dashboard-page">
//       <h2>Bookings</h2> 

//       <div className="flex gap-4 mb-4">
//         <input
//           className="border px-3 py-2 rounded"
//           placeholder="Search customer or destination"
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//         />

//         <select
//           className="border px-3 py-2 rounded"
//           value={statusFilter}
//           onChange={e => setStatusFilter(e.target.value)}
//         >
//           <option>All</option>
//           <option>Confirmed</option>
//           <option>Pending</option>
//           <option>Cancelled</option>
//         </select>
//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th>Booking ID</th>
//             <th>Customer</th>
//             <th>Destination</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginated.map(b => (
//             <tr key={b.id}>
//               <td>{b.id}</td>
//               <td>{b.customer}</td>
//               <td>{b.destination}</td>
//               <td>{b.date}</td>
//               <td>{b.status}</td>
//               <td>₹{b.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BookingsPage;
         


// src/pages/booking.jsx
import { useMemo, useState } from "react";

const MOCK_BOOKINGS = [
  { id: "BKG-1001", customer: "Jack", date: "2025-12-01", service: "Consultation", amount: 1500, status: "Confirmed" },
  { id: "BKG-1002", customer: "Priya Sharma",     date: "2025-12-05", service: "Hair Styling", amount: 800,  status: "Pending" },
  { id: "BKG-1003", customer: "John Doe",         date: "2025-12-08", service: "Photography",  amount: 5000, status: "Cancelled" },
  { id: "BKG-1004", customer: "Meera Iyer",       date: "2025-12-10", service: "Consultation", amount: 1500, status: "Confirmed" },
  { id: "BKG-1005", customer: "Aarav Patel",      date: "2025-12-14", service: "Event Setup",  amount: 9000, status: "Pending" },
];

const STATUS_OPTIONS = ["All", "Pending", "Confirmed", "Cancelled"];

export default function Bookings() {
  const [bookings, setBookings] = useState(MOCK_BOOKINGS);
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return bookings
      .filter((b) => (status === "All" ? true : b.status === status))
      .filter(
        (b) =>
          b.customer.toLowerCase().includes(q) ||
          b.id.toLowerCase().includes(q) ||
          b.service.toLowerCase().includes(q)
      )
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0)); // sort by date asc
  }, [bookings, status, query]);

  function addMockBooking() {
    const nextNum = 1000 + bookings.length + 1;
    const newBooking = {
      id: `BKG-${nextNum}`,
      customer: "New Customer",
      date: new Date().toISOString().slice(0, 10),
      service: "Service",
      amount: 1000,
      status: "Pending",
    };
    setBookings((prev) => [newBooking, ...prev]);
  }

  function updateStatus(id, next) {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status: next } : b)));
  }

  function deleteBooking(id) {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <section>
      <div className="page-header">
        <h2>Booking List</h2>
        <div className="header-actions">
          <input
            className="input"
            type="text"
            placeholder="Search by ID, customer or service..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="input"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {/* <button className="btn primary" onClick={addMockBooking}>+ Add</button> */}
        </div>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Service</th>
              <th>Amount (₹)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.customer}</td>
                <td>{b.date}</td>
                <td>{b.service}</td>
                <td>{b.amount.toLocaleString("en-IN")}</td>
                <td>
                  <span className={`badge ${b.status.toLowerCase()}`}>{b.status}</span>
                </td>

                <td>
                  <div className="actions">
                    <select
                      className="input"
                      value={b.status}
                      onChange={(e) => updateStatus(b.id, e.target.value)}
                    >
                      {STATUS_OPTIONS.filter((s) => s !== "All").map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <button className="btn btn btn-danger" onClick={() => deleteBooking(b.id)} style={{color:'black', border: '2px solid black'}}>Delete</button>
                  </div>
                </td>
                
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", padding: "1rem" }}>
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}