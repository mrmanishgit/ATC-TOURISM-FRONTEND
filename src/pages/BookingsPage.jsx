
import React, { useState } from "react";

const BookingPage = () => {
  const initialData = [
    { id: "BKG-1001", customer: "Anil", date: "25-12-01", Packages: "Family package", amount: 4999, status: "Confirmed", phone: "9876543210" },
    { id: "BKG-1002", customer: "Priya Sharma", date: "25-12-05", Packages: "Historical ", amount: 5000, status: "Pending", phone: "9123456780" },
    { id: "BKG-1003", customer: "John Doe", date: "25-12-08", Packages: "Couple package", amount: 8000, status: "Cancelled", phone: "9988776655" },
    { id: "BKG-1004", customer: "Meera Iyer", date: "25-12-10", Packages: "Adventures package", amount: 10000, status: "Confirmed", phone: "9012345678" },
    { id: "BKG-1005", customer: "Aarav Patel", date: "25-12-14", Packages: "Spiritual", amount: 9000, status: "Pending", phone: "9090909090" },
    { id: "BKG-1006", customer: "Anand verma", date: "25-12-19", Packages: "Children package", amount: 7000, status: "Pending", phone: "9091909890" },
    { id: "BKG-1007", customer: "Ali", date: "25-12-14", Packages: "Friends package", amount: 9700, status: "Cancelled", phone: "9012345090" },
    { id: "BKG-1008", customer: "Virat", date: "24-12-11", Packages: "Students package", amount: 8000, status: "Pending", phone: "9090887731" },
    { id: "BKG-1009", customer: "Nandini", date: "25-12-11", Packages: "womens package", amount: 5000, status: "Confirmed", phone: "9090887731" },
    

  ];

  const [data, setData] = useState(initialData);
  const [deletedData, setDeletedData] = useState([]);
  const [bookingHistory, setBookingHistory] = useState(initialData);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed": return { background: "#4CAF50", color: "white" };
      case "Pending": return { background: "#FFC107", color: "black" };
      case "Cancelled": return { background: "#F44336", color: "white" };
      default: return {};
    }
  };

  const moveToDeleted = (booking) => {
    if (deletedData.some((b) => b.id === booking.id)) return;

    setDeletedData((prev) => [...prev, booking]);
    setBookingHistory((prev) =>
      prev.map((b) =>
        b.id === booking.id ? { ...b, historyStatus: "Deleted" } : b
      )
    );
  };

  const deleteFromTable = (id) => {
    const found = data.find((b) => b.id === id);
    if (!found) return;

    moveToDeleted(found);
    setData((prev) => prev.filter((b) => b.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setData((prev) =>
      prev.map((b) => b.id === id ? { ...b, status: newStatus } : b)
    );

    setBookingHistory((prev) =>
      prev.map((b) => b.id === id ? { ...b, status: newStatus } : b)
    );
  };

  const filtered = data.filter((b) => {
    const matchesSearch =
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.customer.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search);

    const matchesStatus =
      filterStatus === "All" || b.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getHistoryState = (booking) => {
    if (booking.historyStatus === "Deleted") return "Deleted";
    if (booking.status === "Confirmed") return "Active";
    if (booking.status === "Cancelled") return "Deactivated";
    if (booking.status === "Pending") return "In Progress";
    return "Unknown";
  };

  return (
    <div style={styles.container}>

      <div style={styles.headerBar}>
        <h2 style={styles.headerTitle}>Bookings List</h2>

        <div style={styles.headerRight}>
          <input
            type="text"
            placeholder="Search by ID or Name "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.headerSearch}
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={styles.headerDropdown}
          >
            <option value="All">All</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Booking ID</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Packages</th>
            <th style={styles.th}>Amount (₹)</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="7" style={styles.noData}>No results found</td>
            </tr>
          ) : (
            filtered.map((b) => (
              <tr key={b.id}>
                <td style={styles.td}>{b.id}</td>
                <td style={styles.td}>{b.customer}</td>
                <td style={styles.td}>{b.date}</td>
                <td style={styles.td}>{b.Packages}</td>
                <td style={styles.td}>{b.amount}</td>
                <td style={styles.td}>
                  <select
                    value={b.status}
                    onChange={(e) => changeStatus(b.id, e.target.value)}
                    style={{ ...styles.dropdown, ...getStatusStyle(b.status) }}
                  >
                    <option>Confirmed</option>
                    <option>Pending</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td style={styles.td}>
                  <button onClick={() => deleteFromTable(b.id)} style={styles.deleteBtn}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h3 style={styles.subHeading}>Bookings History</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Booking ID</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Packages</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>State</th>
          </tr>
        </thead>
        <tbody>
          {bookingHistory.map((b) => (
            <tr key={b.id}>
              <td style={styles.td}>{b.id}</td>
              <td style={styles.td}>{b.customer}</td>
              <td style={styles.td}>{b.Packages}</td>
              <td style={styles.td}>{b.amount}</td>
              <td style={styles.td}>{getHistoryState(b)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: { padding: 20, fontFamily: "Arial" },
  headerBar: {
    background: "#000",
    color: "#fff",
    padding: "20px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },
  headerTitle: { fontSize: "26px", fontWeight: "bold" },
  headerRight: { display: "flex", gap: "15px" },
  headerSearch: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    width: "280px",
    fontSize: "15px",
  },
  headerDropdown: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
  },
  table: { width: "100%", borderCollapse: "collapse", border: "2px solid #000" },
  th: { border: "2px solid #000", padding: "14px", background: "#2c3e50", color: "#fff" },
  td: { border: "2px solid #000", padding: "12px", textAlign: "center", fontWeight: "bold" },
  dropdown: { padding: "6px", borderRadius: "4px" },
  deleteBtn: { background: "#E53935", color: "#fff", padding: "6px 12px", border: "none", borderRadius: "4px", cursor: "pointer" },
  noData: { padding: "20px", textAlign: "center", fontWeight: "bold" },
  subHeading: { marginTop: "30px", fontSize: "22px", fontWeight: "bold" },
};

export default BookingPage;
