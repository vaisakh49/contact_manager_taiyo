// src/components/ContactForm.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addContact } from "../store/contactsSlice";

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addContact({
        firstName,
        lastName,
        status: isActive ? "Active" : "Inactive",
      })
    );
    setFirstName("");
    setLastName("");
    setIsActive(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block">First Name</label>
        <input
          className="border p-2 w-full"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block">Last Name</label>
        <input
          className="border p-2 w-full"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center">
        <label className="mr-2">Active</label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
