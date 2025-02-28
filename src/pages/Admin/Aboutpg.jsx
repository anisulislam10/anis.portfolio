import React, { useState, useEffect } from "react";
import axios from "axios";

const Aboutpg = () => {
  const [getData, setGetData] = useState([]); // Store API data
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null); // Store selected file

  const API_BASE = "http://localhost:3000/api/about";

  // Fetch Data from API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE}/get`);
      setGetData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setImage(URL.createObjectURL(uploadedFile)); // Preview
    }
  };

  // Handle Submit (Create/Update)
  const handleSubmit = async () => {
    if (!title || !description) {
      alert("Title and description are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (file) formData.append("image", file);

    try {
      if (selectedItem) {
        // Update existing item
        await axios.put(`${API_BASE}/update/${selectedItem._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Updated Successfully!");
      } else {
        // Create new item
        await axios.post(`${API_BASE}/post`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Added Successfully!");
      }
      resetForm();
      fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    try {
      await axios.delete(`${API_BASE}/delete/${id}`);
      alert("Deleted Successfully!");
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Handle Select Item (Prefill for Update)
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setTitle(item.title);
    setDescription(item.description);
    setImage(item.image); // Assuming API provides image URL
  };

  // Reset Form
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
    setFile(null);
    setSelectedItem(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-xl mb-6 shadow-md">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full p-3 mb-3 border rounded-lg" />

        {/* Show Image Preview */}
        {image && <img src={    `${import.meta.env.VITE_BASE_URL.replace('/api/', '')}${image.replace(/^.*[\\/](uploads[\\/])/, "/uploads/")}`
} alt="Preview" className="w-32 h-32 object-cover rounded-md mb-2" />}

        <button
          onClick={handleSubmit}
          className={`px-4 py-2 rounded text-white ${selectedItem ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          {selectedItem ? "Update" : "Add Item"}
        </button>

        {selectedItem && (
          <button onClick={resetForm} className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Cancel
          </button>
        )}
      </div>

      {/* Display List */}
      <div>
        {getData.length === 0 ? (
          <p className="text-gray-500">No items found.</p>
        ) : (
          getData.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md p-4 mb-4 rounded-lg flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center" onClick={() => handleSelectItem(item)}>
                <img src={    `${import.meta.env.VITE_BASE_URL.replace('/api/', '')}${item.image.replace(/^.*[\\/](uploads[\\/])/, "/uploads/")}`
} alt="Preview" className="w-20 h-20 object-cover rounded-md mr-4" />
                
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleSelectItem(item)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Aboutpg;
