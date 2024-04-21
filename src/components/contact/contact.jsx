export const Contact = ({ onDelete, contact }) => {
  return (
    <li className="contact-conteiner">
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button className="contact-delete" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};
