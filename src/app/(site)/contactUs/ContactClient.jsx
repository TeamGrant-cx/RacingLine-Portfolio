"use client";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./contactUs.module.css";

export default function ContactClient({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in your name, email, and message.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        country: "",
        message: "",
      });
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  };

  return (
    <>
      <BreadCrumb title1="Contact Us" title2="Home" title3="Contact Us" />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg--500 py-12 md:py-24 text-center md:text-left order-2 md:order-1">
            <h1 className="text-primary font-[700] text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-tight">
              {data?.heroHeading || "Your next big idea deserves the right team."}
            </h1>
            <p className="text-white text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] mt-4">
              {data?.heroDescription || "Whether you need a website, an event, a social strategy, or full marketing support — we're here to help you move forward with clarity and impact."}
            </p>
          </div>

          <div className="flex items-center justify-center py-8 md:py-12 order-1 md:order-2 bg--500 ">
            <div className="relative">
              <Image
                className=""
                src={data?.heroImage?.sizes?.card?.url || data?.heroImage?.url || "/ContactUs/avatar.png"}
                alt={data?.heroImage?.alt || "Avatar Image"}
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className={`${styles.contactCardsContainer}  bg--500`}>
          {/* Send Us a Message Card */}
          <div className={`${styles.card} bg--500 `}>
            <h2 className={styles.cardTitle}>Send Us a Message</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
              <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
              <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} />
              <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
              <textarea name="message" placeholder="How Can We Help You?" rows={4} value={formData.message} onChange={handleChange} required></textarea>

              <label className={styles.fileUpload}>
                <input type="file" className="hidden" />
                <i className={`fa-solid fa-upload ${styles.fileUploadIcon}`}></i>
                <span className={styles.fileUploadText}>
                  Drag Your File Here, Or Click To Browse
                </span>
              </label>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">{errorMsg}</p>
              )}
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">Message sent successfully! We&apos;ll get back to you soon.</p>
              )}

              <button type="submit" className={styles.submitButton} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

          {/* Get in Touch Card */}
          <div className={`${styles.card} bg--500 `}>
            <h2 className={styles.cardTitle}>Get in touch</h2>

            <p className={styles.getInTouchDescription}>
              {data?.getInTouchDescription || "Whether you're ready to start a project, have questions about our services, or just want to chat about your marketing goals, don't hesitate to reach out. We're here to help you succeed."}
            </p>

            <div className={`${styles.officeContainer} h-[%] flex flex-col justify-between bg--500`}>
              {data?.offices?.map((office, index) => {
                return (
                  <div key={index} className={styles.officeCard}>
                    <div className={styles.flagContainer}>
                      <Image
                        className="object-cover w-full h-full"
                        src={"/ContactUs/egypt.jpg"}
                        alt={"Office Flag"}
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className={styles.officeInfo}>
                      <h3 className={styles.officeTitle}>{ "Office Title"}</h3>
                      <p className={styles.officeAddress}>
                        {office?.address || "Office Address"}
                      </p>
                      <p className={styles.officeLabel}>For General Inquiries:</p>
                      <p className={styles.officeContact}>{"info@cremediaeg.com"}</p>
                      <p className={styles.officeContact}>{"Office Phone"}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
