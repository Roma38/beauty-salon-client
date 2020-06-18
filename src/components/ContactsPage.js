import React from "react";
import { Header } from "semantic-ui-react";

function ContactsPage() {
  return (
    <main className="contacts-page">
      <Header as="h1" textAlign="center" content="Contacts" />
      <p>Phone: <a href="tel:+38097XXXXXXX">+38(097)-XXX-XX-XX</a></p>
      <p>Email: <a href="mailto:beauty.sallon@gmail.com">beauty.sallon@gmail.com</a></p>
      <p>Address: Forest Hills, NY 11375</p>
      <p>Hours: M - F : 10am - 7:30pm</p>
      <p>Sat: 10am - 7:30pm | Sun: 10am - 6:30pm</p>
    </main>
  );
}
export default ContactsPage;
