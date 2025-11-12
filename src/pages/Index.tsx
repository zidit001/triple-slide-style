import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { DonationModal } from "@/components/DonationModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const projects = [
    {
      title: "St. Charles Church Vestry",
      description: "KDU FL contributed to the building of the new vestry at St. Charles Church in Regent, Sierra Leone, supporting the spiritual and community needs of the congregation.",
    },
    {
      title: "Water Well at St. Mark's Church",
      description: "Currently concluding construction of a water well project at St. Mark's Church, Waterloo Village, which will provide clean drinking water to the church, its members, and the surrounding community.",
    },
    {
      title: "Health & Food Outreach",
      description: "Supporting health outreach activities and providing food and sundries for the needy in Freetown and surrounding villages in Sierra Leone.",
    },
    {
      title: "Feeding the Homeless",
      description: "Engaging in regular feeding programs for the homeless community in Jacksonville, Florida, providing meals and support to those in need.",
    },
    {
      title: "Cultural Education Outreach",
      description: "Hosted an outreach picnic in Ormond Beach to educate Krio youth about our culture, traditions, and heritage, strengthening community bonds.",
    },
  ];

  const events = [
    {
      date: "Monthly Meetings",
      title: "First Sunday of Every Month",
      description: "Join us for our regular monthly meetings held on the first Sunday of each month. Video conference details are provided to all members in advance of each meeting.",
    },
    {
      date: "Friday, December 5, 2025 at 6:30pm",
      title: "Promoting and Celebrating Kriodom",
      description: "An evening of documentaries, Krio parables, and raffle. Join us as we celebrate and promote our rich Krio heritage and culture.",
    },
    {
      date: "Sunday, December 7, 2025 at 2:00pm",
      title: "Thanksgiving Service",
      description: "Interfaith Service - Join us for a special thanksgiving service bringing together our community in gratitude and fellowship.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onDonateClick={() => setIsDonationModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-kdu-gradient text-white pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to KDU Florida</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">LEH WI SHAYN</p>
          <HeroSlider />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-primary-green">About Us</h2>
        <div className="text-lg text-muted-foreground space-y-4">
          <p>
            KDU Florida Inc. was founded in 2018 in Jacksonville, Florida. Over the years, we have grown into a vibrant community organization dedicated to making a positive difference both internationally and locally.
          </p>
          <p>
            Funds raised have been used to conduct charitable work in our native Sierra Leone, including supporting health outreach activities and providing food and sundries for the needy in Freetown and surrounding villages. Our team consists of dedicated volunteers, professionals, and community leaders who share a common vision of creating lasting change through collaboration, education, and action.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-primary-green">Our Mission</h2>
        <div className="text-lg text-muted-foreground space-y-4">
          <p>
            We strive to empower individuals and strengthen communities through innovative programs, meaningful partnerships, and unwavering commitment to excellence. Our mission is to create opportunities for growth, foster inclusivity, and inspire positive transformation across our Krio community and beyond.
          </p>
          <p className="font-bold text-foreground mt-6">Our Goals:</p>
          <ul className="space-y-3 ml-6 list-disc">
            <li>Foster unity among Krio people in Florida and preserve our rich history, culture, and heritage</li>
            <li>Promote Krio advocacy, business development, reflection, education, health, and charitable giving</li>
            <li>Pass our cultural heritage to the youth through education and community engagement</li>
            <li>Develop education by providing scholarships, books, and other school materials to identified schools in Freetown and rural communities</li>
            <li>Provide more clean drinking water supply through water well projects to the Krio community</li>
            <li>Continue to support the needs of our local homeless community</li>
            <li>Educate Krio youth about our rich culture and heritage</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-primary-green">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-primary-green">Upcoming Events</h2>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg border-l-4 border-primary">
              <div className="text-primary-green font-bold mb-2">{event.date}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="bg-kdu-gradient text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Support Our Cause</h2>
          <p className="text-xl mb-8">Your contribution helps us continue our vital work in the community. Every donation makes a difference.</p>
          <Button
            onClick={() => setIsDonationModalOpen(true)}
            className="bg-white text-primary font-bold text-xl py-6 px-12 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-4 text-center">
        <p className="mb-4">
          <strong>Contact Us:</strong>{" "}
          <a href="mailto:kdufloridainc@gmail.com" className="text-primary hover:opacity-80">
            kdufloridainc@gmail.com
          </a>
        </p>
        <p>&copy; 2025 KDU Florida Inc. All rights reserved.</p>
      </footer>

      <DonationModal open={isDonationModalOpen} onOpenChange={setIsDonationModalOpen} />
    </div>
  );
};

export default Index;
