"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const { fullName, email, subject, message } = formData;
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        alert("Email sent successfully");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      }
    } else {
      console.log("Form validation failed");
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    };

    // Simple validation for demonstration purposes
    if (formData.fullName.trim() === "") {
      errors.fullName = "Please enter your full name";
      isValid = false;
    }

    if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.subject.trim() === "") {
      errors.subject = "Please enter a subject";
      isValid = false;
    }

    if (formData.message.trim() === "") {
      errors.message = "Please enter a message";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmail = (email: string) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-5 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <SunIcon className="mx-auto h-12 w-12 text-orange-500" />
          <h1 className="mt-2 text-5xl font-bold">Contact us</h1>
          <p className="mt-4 text-gray-600">
            Nunc mollis sit amet elit at tempor. Maecenas scelerisque molestie
            mauris, sed lobortis risus consequat vitae. Donec gravida fermentum
            molestie.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Address</h2>
            <p className="mb-4">
              Duis nisl nisl, luctus at metus vel, dignissim rhoncus tellus.
              Proin id nisl dui. Nullam commodo mollis eros, sed condimentum.
            </p>
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <p className="flex items-center">
              <PhoneIcon className="mr-2 h-4 w-4" />
              +1 000 0000 000
            </p>
            <p className="flex items-center">
              <MailboxIcon className="mr-2 h-4 w-4" />
              mailus@prototehink.com
            </p>
          </div>
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                placeholder="Full name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {formErrors.fullName && (
                <span className="text-red-500">{formErrors.fullName}</span>
              )}
              <Input
                placeholder="Your email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <span className="text-red-500">{formErrors.email}</span>
              )}
              <Input
                placeholder="Type a subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {formErrors.subject && (
                <span className="text-red-500">{formErrors.subject}</span>
              )}
              <Textarea
                placeholder="Type a message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {formErrors.message && (
                <span className="text-red-500">{formErrors.message}</span>
              )}
              <Button type="submit" className="mt-4">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailboxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}
