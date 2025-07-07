import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard-root">
      <header className="dashboard-header">
        Customer Segmentation Analysis Dashboard
      </header>
      <section className="dashboard-summary">
        <div className="summary-card">
          <div className="summary-title">Total Customers</div>
          <div className="summary-value">4320</div>
        </div>
        <div className="summary-card">
          <div className="summary-title">Total Revenue</div>
          <div className="summary-value">$1,028,700</div>
        </div>
        <div className="summary-card">
          <div className="summary-title">Avg Recency</div>
          <div className="summary-value">33.6 days</div>
        </div>
        <div className="summary-card">
          <div className="summary-title">Avg Frequency</div>
          <div className="summary-value">4.59</div>
        </div>
        <div className="summary-card">
          <div className="summary-title">Avg Monetary</div>
          <div className="summary-value">$237</div>
        </div>
      </section>
      <section className="dashboard-charts">
        <div className="chart-box">
          <div className="chart-title">Customers by Country</div>
          <div className="chart-placeholder">나라별 지표를 파이차트로</div>
        </div>
        <div className="chart-box">
          <div className="chart-title">Revenue Trend</div>
          <div className="chart-placeholder">월별 매출 추이 라인차트</div>
        </div>
        <div className="chart-box">
          <div className="chart-title">Top 5 Best-Selling Products</div>
          <div className="chart-placeholder">가장 많이 팔리는 상품 5개 수치 비교 그래프</div>
        </div>
        <div className="chart-box">
          <div className="chart-title">RFM Chart</div>
          <div className="chart-placeholder">사용자가 자유롭게 x축/y축 R,F,M 중 선택해서 차트</div>
        </div>
      </section>
    </div>
  );
}

export default App;
