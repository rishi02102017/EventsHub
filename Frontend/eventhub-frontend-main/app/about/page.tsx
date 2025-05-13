import { Navbar } from "@/components/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-16">
        <h1 className="text-3xl font-bold mb-4">About EventsHub</h1>
        <p className="mb-4 text-lg">
          EventsHub is your one-stop platform for discovering, creating, and
          managing events with ease.
        </p>
        <ul className="list-disc pl-6 mb-6 text-base">
          <li>
            Browse and discover a wide variety of events happening around you.
          </li>
          <li>
            Create and promote your own events, whether personal or
            organizational.
          </li>
          <li>
            Manage event details, attendees, and registrations from your
            dashboard.
          </li>
          <li>
            Seamless authentication and personalized dashboard for both
            individuals and organizations.
          </li>
          <li>Stay connected and never miss out on exciting happenings!</li>
        </ul>
        <p className="text-base">
          You were redirected here from the Navbar. Our goal is to make event
          management and discovery simple, intuitive, and accessible for
          everyone.
        </p>
      </main>
    </>
  );
}
