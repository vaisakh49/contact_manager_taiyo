import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { deleteContact } from "../store/contactsSlice";

const ContactList: React.FC = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts);
  const dispatch = useAppDispatch();

  return (
    <div className="p-4">
      {contacts.length > 0 ? (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li key={contact.id} className="border p-4 rounded">
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <strong>Name:</strong>{" "}
                    {contact.firstName + contact.lastName}
                  </p>
                  <p>
                    <strong>Status:</strong> {contact.status}
                  </p>
                </div>
                <button
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;
