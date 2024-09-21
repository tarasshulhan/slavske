import React from "react";
import Link from "next/link";

const Book = () => {
  return (
    <section id="book" className="book-section">
      <h1>Бронювання</h1>
      <p className="mb-8">
        <a href="tel:+380123456789">+38 (096) 275-54-04</a>
      </p>
      <Link
        href="https://www.booking.com/hotel/ua/kotedzh-4sezoni.html"
        target="_blank"
        rel="noopener noreferrer"
        className="book-button mt-4 flex items-center justify-center"
      >
        Забронювати на Booking.com
      </Link>
      <div className="mt-8 w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8833.15175990709!2d23.423822582919467!3d48.83700746085808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47398b55e668163d%3A0xd37c89d3d34899f1!2s4%20seasons!5e0!3m2!1sen!2sus!4v1726733241124!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Book;
