import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductAdd() {
    return (
      <>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Add New Product</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">add-new-product</li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}
          <section className="section dashboard">
           <div className="card p-5">
                <div className="card-body">
                    <form className="row g-3">
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Product Name" />
                    </div>
                    <div className="col-12">
                        <textarea type="text" className="form-control" placeholder="Description" />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Size" />
                    </div>
                    <div className="col-md-4">
                        <select id="inputState" className="form-select">
                        <option selected>Type</option>
                        <option>Apartment</option>
                        <option>Flat</option>
                        <option>Rent</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input type="number" className="form-control" placeholder="Prize" />
                    </div>
                    <div className="text-center my-4">
                        <button type="submit" className="btn btn-primary mx-2">
                        Add
                        </button>
                        <button type="reset" className="btn btn-secondary">
                        Reset
                        </button>
                    </div>
                    </form>
                </div>
            </div>

          </section>
        </main>
      </>
    );
}
