import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";

export const Contacts = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contacts Management</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};
