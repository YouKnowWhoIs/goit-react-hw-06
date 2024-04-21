import { Contact } from "../contact/contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.contacts.items);
  const dispatch = useDispatch();

  console.log(selectContacts);

  const handleOnDelete = (id) => {
    const action = deleteContact(id);
    dispatch(action);

    console.log(action);
  };

  return (
    <ul className="contact-list">
      {selectContacts.length > 0 ? (
        selectContacts.map((contact) => (
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
