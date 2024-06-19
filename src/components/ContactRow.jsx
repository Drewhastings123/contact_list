/* eslint-disable react/prop-types */


export default function ContactRow({ setSelectedContactId, contact }) {
  const handleClick = () => {
    setSelectedContactId(contact.id);
  };
  return (
    <tr className="row" onClick={handleClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
