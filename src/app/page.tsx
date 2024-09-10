import Wallpaper from "@/components/wallpaper";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import Information from "@/components/information";
import Footer from "@/components/footer";
import RSVP from "@/components/rsvp";
import Support from "@/components/support";

export default function Home() {
  return (
    <main id="main">
      <Navbar />
      <Wallpaper
        props={{
          background: "bg-sky-100",
          children: <Introduction />,
          height: "cdvh",
        }}
      />
      <Wallpaper
        props={{
          children: <Information />,
        }}
      />
      <Wallpaper
        props={{
          background: "bg-sky-100",
          children: <Support />,
          isUpperOrnamenHidden: true,
        }}
      />
      <Wallpaper
        props={{
          children: <RSVP />,
        }}
      />
      <Footer />
      <iframe
        allow="autoplay"
        className="hidden"
        src="https://www.youtube.com/embed/rtOvBOTyX00?autoplay=1"
        title="YouTube"
      />
    </main>
  );
}
