import { Contact } from "../contact/contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.contacts.items);
  const test = useSelector((state) => state.filters.filters.name);

  const filterContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(test.toLowerCase())
  );
  const dispatch = useDispatch();

  // console.log(filterContact);

  const handleOnDelete = (id) => {
    const action = deleteContact(id);
    dispatch(action);

    console.log(action);
  };

  return (
    <ul className="contact-list">
      {filterContacts.length > 0 ? (
        filterContacts.map((contact) => (
          <Contact
            key={contact.id}
            onDelete={handleOnDelete}
            contact={contact}
          />
        ))
      ) : (
        <p>You don`t have a contakts</p>
      )}
    </ul>
  );
};
