import { Contact } from "../contact/contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.contacts.items);
  const selectFilterContacts = useSelector(
    (state) => state.filters.filters.name
  );

  const filterContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectFilterContacts.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    const action = deleteContact(id);
    dispatch(action);

    console.log(action);
  };

  return (
    <ul className="contact-list">
      {selectFilterContacts === "all" && selectContacts.length > 0 ? (
        selectContacts.map((contact) => (
          <Contact
            key={contact.id}
            onDelete={handleOnDelete}
            contact={contact}
          />
        ))
      ) : filterContacts.length > 0 ? (
        filterContacts.map((contact) => (
          <Contact
            key={contact.id}
            onDelete={handleOnDelete}
            contact={contact}
          />
        ))
      ) : (
        <p>You don`t have a contacts</p>
      )}
    </ul>
  );
};
