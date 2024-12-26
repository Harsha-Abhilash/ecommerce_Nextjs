import Image from "next/image";

export default function ContactUs() {

  return (
    <>
    <div>
       <div >
                      <Image
                          src="/images/contact.avif"
                          alt="About Us"
                          
                          width={1600}  // Set an appropriate width to define the aspect ratio
                          height={200}  // Set an appropriate height to define the aspect ratio
                      />
                  </div>






                  <div className="">
      {/* Contact Us Heading */}
      <h1 className="text-center">Contact Us</h1>

      {/* Address Section */}
      <div className="text-center">
        <h3>Our Address</h3>
        <p>
          123 Business St.<br />
          Suite 400<br />
          City, State, 12345<br />
          Country
        </p>

        <h3>Phone</h3>
        <p>+1 (123) 456-7890</p>

        <h3>Email</h3>
        <p>
          <a href="mailto:info@shopify.com">info@example.com</a>
        </p>
      </div>

      
    </div>
    </div>
    </>
  );
}
