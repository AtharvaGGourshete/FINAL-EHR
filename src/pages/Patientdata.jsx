import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Patientdata = () => {
  const [formData, setFormData] = useState({
    patient_name: "",
    patient_age: "",
    blood_group: "",
    medical_history: "",
    allergy: "",
    esr: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5175/api/healt-records",
        {
          name: formData.patient_name,
          age: formData.patient_age,
          medicalHistory: formData.medical_history,
          allergies: formData.allergy,
          bloodGroup: formData.blood_group,
          esr: formData.esr,
        }
      );

      alert("Record saved successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error saving record:", error);
      alert("An error occurred while saving the record.");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r/hsl from-indigo-500 to-teal-400">
      <div className="text-4xl font-bold text-center p-5">
        Patient data form
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex justify-center shadow-2xl w-1/2 bg-white p-5 rounded-2xl">
          <form>
            <div className="flex gap-3.5">
              <label for="name" className="text-2xl font-semibold">
                Patient Name
              </label>
              <input
                type="text"
                id="name"
                name="patient_name"
                placeholder="Enter patient name"
                required
                className="border-2 rounded-lg w-96"
              />
            </div>
            <br />
            <div className="flex gap-8.5">
              <label for="age" className="text-2xl font-semibold">
                Patient Age
              </label>
              <input
                type="number"
                id="age"
                name="patient_age"
                placeholder="Enter patient age"
                required
                className="border-2 rounded-lg w-96"
              ></input>
            </div>
            <br />
            <div className="flex gap-6">
              <label for="blood-group" className="text-2xl font-semibold">
                Blood Group
              </label>
              <select
                id="blood-group"
                name="blood_group"
                required
                className="border-2 rounded-lg w-96"
              >
                <option value="" disabled selected>
                  Select blood group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <br />
            <div className="flex gap-4">
              <label for="medical-history" className="text-2xl font-semibold">
                Medical History
              </label>
              <textarea
                id="medical-history"
                name="medical_history"
                rows="4"
                placeholder="Provide medical history"
                className="border-2 rounded-lg w-80"
              ></textarea>
            </div>
            <br />
            <div className="flex gap-20">
              <label for="allergy" className="text-2xl font-semibold">
                Allergies
              </label>
              <textarea
                id="allergy"
                name="allergy"
                rows="3"
                placeholder="Specify any allergies"
                className="border-2 rounded-lg w-96"
              ></textarea>
            </div>
            <br />

            <div className="flex gap-2">
              <label for="esr" className="text-2xl font-semibold">
                ESR (Erythrocyte Sedimentation Rate)
              </label>
              <input
                type="number"
                id="esr"
                name="esr"
                placeholder="Enter ESR value"
                required
                className="border-2 rounded-lg"
              />
            </div>
            <br />
            <div className="flex justify-center">
              <Link to={"/submit"}>
                <button
                  type="button"
                  className="text-gray-900 bg-[#388ef7] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xl px-6 py-3 inline-flex items-center justyify-center"
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Patientdata;
