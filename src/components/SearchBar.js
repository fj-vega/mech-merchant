import React from 'react';
import { ProductConsumer } from '../context';


export default () => (
  <ProductConsumer>
    {
      value => {
        const { sortBy, form, switches } = { ...value.productsFilter };
        const { handleFilter, searchQuery, searchProduct } = value;

        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Filters</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#searchBarSupportedContent" aria-controls="searchBarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse py-3 py-lg-0" id="searchBarSupportedContent">
              <form className="navbar-nav mx-auto">
                {/* Filters */}
                <div className="form-group mx-1">
                  <label className="text-muted" htmlFor="sort-by">Sorty by</label>
                  <select value={ sortBy } onChange={ handleFilter } name="sortBy" className="form-control" id="sort-by">
                    <option value="date">Date added</option>
                    <option value="desc">Price descending</option>
                    <option value="asc">Price ascending</option>
                  </select>
                </div>
                <div className="form-group mx-1 ml-lg-5">
                  <label className="text-muted" htmlFor="form-factor">Form Factor</label>
                  <select value={ form } onChange={ handleFilter } name="form" className="form-control" id="form-factor">
                    <option value="all">All</option>
                    <option value="full">Full Size</option>
                    <option value="tkl">TKL</option>
                    <option value="smaller">Smaller</option>
                  </select>
                </div>
                <div className="form-group mx-1">
                  <label className="text-muted" htmlFor="switches">Switches</label>
                  <select value={ switches } onChange={ handleFilter } name="switches" className="form-control" id="switches">
                    <option value="all">All</option>
                    <option value="cherry">Cherry</option>
                    <option value="gateron">Gateron</option>
                    <option value="kailh">Kailh</option>
                    <option value="capacitative">Capacitative</option>
                  </select>
                </div>
              </form>
              {/* Search */}
              <div className="form-group ml-auto">
                <label className="text-muted" htmlFor="switches">Search</label>
                <input className="form-control mr-sm-2" value={ searchQuery } onChange={ searchProduct } type="search" placeholder="Search by Name" aria-label="Search" />
            </div>
            </div>
          </nav>
        )
      }
    }
  </ProductConsumer>
)
