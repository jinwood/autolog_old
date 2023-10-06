import { useState, type FormEvent, type ChangeEvent } from "react";
import { manufacturers } from "~/types";

export default function Page() {
  const [formData, setFormData] = useState({
    manufacturer: "",
    model: "",
    year: "",
    engineSize: "",
    registration: "",
    colour: "",
    fuelType: "",
    ownerId: "",
  });
  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const body = JSON.stringify(formData);

    fetch("/api/vehicles/add", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response data as needed
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" min-h-screen items-center justify-center rounded bg-slate-800 px-8 pb-8 pt-6 text-white shadow-md">
      <h2>Add a vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="gird-cols-1 c-white-400 mb-4 grid gap-4 pt-6 md:grid-cols-3">
          <div className="mb-4">
            <label
              htmlFor="manufacturer"
              className="mb-2 block text-sm font-bold "
            >
              Manufacturer
            </label>
            <select
              name="manufacturer"
              id="manufacturer"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              onChange={handleChange}
              value={formData.manufacturer}
            >
              <option value="">Select Manufacturer</option>
              {manufacturers.map((manufacturer, index) => (
                <option key={index} value={manufacturer}>
                  {manufacturer}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="model" className="mb-2 block text-sm font-bold ">
              Model
            </label>
            <input
              type="text"
              name="model"
              id="model"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
              onChange={handleChange}
              value={formData.model}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="mb-2 block text-sm font-bold ">
              Year
            </label>
            <input
              type="number"
              name="year"
              id="year"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
              onChange={handleChange}
              value={formData.year}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="engineSize"
              className="mb-2 block text-sm font-bold "
            >
              Engine Size
            </label>
            <input
              type="number"
              name="engineSize"
              id="engineSize"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
              onChange={handleChange}
              value={formData.engineSize}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="registration"
              className="mb-2 block text-sm font-bold "
            >
              Registration
            </label>
            <input
              type="text"
              name="registration"
              id="registration"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
              onChange={handleChange}
              value={formData.registration}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="colour" className="mb-2 block text-sm font-bold ">
              Colour
            </label>
            <input
              type="text"
              name="colour"
              id="colour"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
              onChange={handleChange}
              value={formData.colour}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fuelType" className="mb-2 block text-sm font-bold ">
              Fuel Type
            </label>
            <input
              type="text"
              name="fuelType"
              id="fuelType"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
              onChange={handleChange}
              value={formData.fuelType}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ownerId" className="mb-2 block text-sm font-bold ">
              Owner ID
            </label>
            <input
              type="text"
              name="ownerId"
              id="ownerId"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
              onChange={handleChange}
              value={formData.ownerId}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
