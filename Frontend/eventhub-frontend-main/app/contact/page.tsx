import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-16 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8 text-lg text-center max-w-xl">
          Have questions, feedback, or need support? Reach out to us and we'll
          get back to you as soon as possible.
        </p>
        <form className="w-full max-w-md bg-white dark:bg-black rounded-lg shadow-md p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-semibold py-2 rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
