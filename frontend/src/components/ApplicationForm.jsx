import React, { useState } from 'react';
import { createApplication } from '../api/api';

export default function ApplicationForm() {
  const [businessName, setBusinessName] = useState('');
  const [turnover, setTurnover] = useState('');
  const [investment, setInvestment] = useState('');
  const [kyc, setKyc] = useState(false);
  const [income, setIncome] = useState(false);
  const [businessProof, setBusinessProof] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);
    try {
      const payload = {
        businessName,
        turnover: Number(turnover),
        investment: Number(investment),
        docs: { kyc, income, businessProof }
      };

      const resp = await createApplication(payload);
      setMessage({ type: 'success', text: `Created: ${resp.decision.status}` });
    } catch (err) {
      setMessage({
        type: 'error',
        text: err?.response?.data?.error || err.message
      });
    }
  }

  return (
    <section className="card">

      <h2>Submit Application</h2>

      <form onSubmit={handleSubmit}>

        <label>
          Business name
          <input
            required
            value={businessName}
            onChange={e => setBusinessName(e.target.value)}
          />
        </label>

        <label>
          Turnover (INR)
          <input
            required
            type="number"
            value={turnover}
            onChange={e => setTurnover(e.target.value)}
          />
        </label>

        <label>
          Investment (INR)
          <input
            required
            type="number"
            value={investment}
            onChange={e => setInvestment(e.target.value)}
          />
        </label>

        <fieldset>
          <legend>Documents submitted</legend>

          <label>
            <input
              type="checkbox"
              checked={kyc}
              onChange={e => setKyc(e.target.checked)}
            />
            KYC
          </label>

          <label>
            <input
              type="checkbox"
              checked={income}
              onChange={e => setIncome(e.target.checked)}
            />
            Income Proof
          </label>

          <label>
            <input
              type="checkbox"
              checked={businessProof}
              onChange={e => setBusinessProof(e.target.checked)}
            />
            Business Proof
          </label>
        </fieldset>

        <button type="submit">Pre-Screen</button>
      </form>

      {message && <div className={`msg ${message.type}`}>{message.text}</div>}

    </section>
  );
}
