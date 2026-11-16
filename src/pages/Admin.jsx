import { useState } from "react";
import { addCar, deleteCar, getCars, updateCar } from "../services/carService";
import "../styles/Admin.css";

const emptyForm = {
  brand: "",
  model: "",
  year: 2024,
  type: "Sedan",
  transmission: "Automatic",
  pricePerDay: "",
  image: "",
};

function Admin() {
  const [cars, setCars] = useState(getCars());
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  // Update one field of the form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Read the chosen photo as it is and keep it in the form
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  

  // Add a new car, or save changes to the car being edited
  const handleSubmit = (e) => {
    e.preventDefault();
    const car = {
      ...form,
      year: Number(form.year),
      pricePerDay: Number(form.pricePerDay),
    };

    if (editingId) {
      updateCar({ ...car, id: editingId });
      alert(`${car.brand} ${car.model} was updated.`);
    } else {
      addCar(car);
      alert(`${car.brand} ${car.model} was added.`);
    }

    setCars(getCars());
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleEdit = (car) => {
    setForm(car);
    setEditingId(car.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleDelete = (car) => {
    if (!window.confirm(`Delete ${car.brand} ${car.model}?`)) return;
    deleteCar(car.id);
    setCars(getCars());
    if (editingId === car.id) handleCancel();
    alert(`${car.brand} ${car.model} was deleted.`);
  };

  return (
    <main className="page-full">
      <section className="page-header">
        <h1>
          Admin <span>Panel</span>
        </h1>
        <p>Add, edit and delete the cars shown on the website.</p>
      </section>

      <section className="section">
        <div className="container admin-layout">
          {/* Add / edit form */}
          <form className="car-form" onSubmit={handleSubmit}>
            <h2>{editingId ? "Edit Car" : "Add a New Car"}</h2>

            <div className="car-form-grid">
              <label>
                Brand
                <input name="brand" value={form.brand} onChange={handleChange} required />
              </label>

              <label>
                Model
                <input name="model" value={form.model} onChange={handleChange} required />
              </label>

              <label>
                Year
                <input type="number" name="year" value={form.year} onChange={handleChange} required />
              </label>

              <label>
                Type
                <select name="type" value={form.type} onChange={handleChange}>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Hatchback</option>
                  <option>Luxury</option>
                  <option>Sports</option>
                  <option>Van</option>
                  <option>Electric</option>
                </select>
              </label>


              <label>
                Transmission
                <select name="transmission" value={form.transmission} onChange={handleChange}>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </label>


              <label>
                Price per day ($)
                <input
                  type="number"
                  name="pricePerDay"
                  min="1"
                  value={form.pricePerDay}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Photo
              <input type="file" accept="image/*" onChange={handleImage} />
            </label>

            {form.image && <img className="car-form-preview" src={form.image} alt="Preview" />}

            <div className="car-form-actions">
              <button type="submit" className="btn">
                {editingId ? "Save Changes" : "Add Car"}
              </button>
              {editingId && (
                <button type="button" className="btn btn-outline" onClick={handleCancel}>
                  Cancel
                </button>
              )}
            </div>
          </form>

          {/* Cars table */}
          <div className="admin-list">
            <h2>All Cars ({cars.length})</h2>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Car</th>
                    <th>Type</th>
                    <th>Price/day</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((car) => (
                    <tr key={car.id}>
                      <td>
                        <div className="admin-car">
                          {car.image && <img src={car.image} alt="" />}
                          <div>
                            <strong>
                              {car.brand} {car.model}
                            </strong>
                            <small>{car.year}</small>
                          </div>
                        </div>
                      </td>
                      <td>{car.type}</td>
                      <td>${car.pricePerDay}</td>
                      <td>
                        <div className="admin-actions">
                          <button type="button" className="admin-edit" onClick={() => handleEdit(car)}>
                            Edit
                          </button>
                          <button type="button" className="admin-delete" onClick={() => handleDelete(car)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admin;
