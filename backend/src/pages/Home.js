import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>{/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
          <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="card-body">
                      <h1>Welcome</h1>
                    </div>
                  </div>
                </div>
          </div>
        </section>
      </main>
    </>
  )
}
