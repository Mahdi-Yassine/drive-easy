import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import { getCars } from "../services/carService";
import "../styles/Cars.css";

function Cars() {
  const [searchParams] = useSearchParams();
  const [cars] = useState(getCars());
  // The Home page search can send text in the URL (?search=toyota)
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const term = search.trim().toLowerCase();

  // Filter a copy of the list by brand only. The original list is never changed.
  const visibleCars = cars.filter((c) => c.brand.toLowerCase().includes(term));

  return (
    <main className="page-full">
      <section className="page-header">
        <h1>
          Our <span>Cars</span>
        </h1>
        <p>Find the right car for your trip.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="cars-toolbar">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <p className="cars-count">
            Showing {visibleCars.length} of {cars.length} cars
          </p>

          {visibleCars.length > 0 ? (
            <div className="grid">
              {visibleCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="cars-empty">
              <p>No cars match "{search}".</p>
              <button type="button" className="btn" onClick={() => setSearch("")}>
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Cars;
