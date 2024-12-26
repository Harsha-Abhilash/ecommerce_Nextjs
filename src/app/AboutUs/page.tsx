import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */
export default function AboutUs() {
  return (
    <div>
      <div>
        <Image
          src="/images/about.jpg"
          alt="About Us"
          width={1600}
          height={200}
        />
      </div>

      <p>
        Welcome to our About Us page! We are passionate about providing the best
        service and delivering excellent quality to our customers. We believe in
        the values of honesty, integrity, and dedication, and we work hard every
        day to uphold those principles in everything we do.
      </p>

      <p>
        Our team is a group of professionals with diverse backgrounds and
        expertise. We collaborate to ensure that we can offer the most effective
        solutions to meet your needs. Whether you're a first-time customer or a
        long-time client, we’re here to help and support you in every step of
        the journey.
      </p>

      <p>
        At our core, we are committed to delivering exceptional results. We take
        pride in our work and strive to go beyond expectations in everything we
        do. Thank you for visiting our About Us page – we look forward to
        working with you!
      </p>
    </div>
  );
}
