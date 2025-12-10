import React, { useEffect, useState } from 'react';
import { listApplications } from '../api/api';

export default function Dashboard() {
  const [apps, setApps] = useState([]);

  async function fetchApps() {
    const data = await listApplications();
    setApps(data.sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt)));
  }

  useEffect(() => { fetchApps(); }, []);

  return (
    <section className="card">
      <h2>Applications</h2>
      <table className="apps-table">
        <thead>
          <tr>
            <th>Business</th>
            <th>Classification</th>
            <th>Turnover</th>
            <th>Investment</th>
            <th>Status</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {apps.map(a => (
            <tr key={a.id}>
              <td>{a.businessName}</td>
              <td>{a.classification}</td>
              <td>{a.turnover}</td>
              <td>{a.investment}</td>
              <td>
  <span
    className={`status-pill ${a.decision.status
      .toLowerCase()
      .replace(/\s+/g, '-')}`}
  >
    {a.decision.status}
  </span>
</td>

              <td>{a.decision.reason || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
