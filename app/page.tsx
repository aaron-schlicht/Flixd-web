import Link from "next/link";
import { FaApple } from "react-icons/fa";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#15182D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2.5rem 1rem 1rem 1rem",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes flixdFadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(32px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .flixd-animate {
          opacity: 0;
          animation: flixdFadeSlideUp 0.7s cubic-bezier(0.4,0.2,0.2,1) forwards;
        }
        .flixd-animate-1 { animation-delay: 0.1s; }
        .flixd-animate-2 { animation-delay: 0.3s; }
        .flixd-animate-3 { animation-delay: 0.5s; }
        .flixd-animate-4 { animation-delay: 0.7s; }
        @media (min-width: 640px) {
          .flixd-header {
            margin-top: 4.5rem !important;
          }
          .flixd-logo-title {
            font-size: 4.5rem !important;
          }
          .flixd-h1 {
            font-size: 2.5rem !important;
            margin-bottom: 5rem !important;
          }
          .flixd-desc {
            font-size: 1.35rem !important;
          }
          .flixd-footer-links a, .flixd-footer-links .flixd-privacy-link {
            font-size: 1.15rem !important;
          }
        }
      `}</style>
      <div
        className="flixd-header flixd-animate flixd-animate-1"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.8rem",
          marginBottom: "1rem",
          marginTop: "2.5rem",
        }}
      >
        <img
          src="/AppLogo.png"
          alt="Flixd App Logo"
          style={{
            width: 96,
            height: 96,
            borderRadius: "24px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.22)",
            background: "#23264A",
            objectFit: "cover",
          }}
        />
        <span
          className="flixd-logo-title"
          style={{
            color: "#fff",
            fontSize: "3.5rem",
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1.08,
          }}
        >
          Flixd
        </span>
      </div>
      <h1
        className="flixd-h1 flixd-animate flixd-animate-2"
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "4rem",
          letterSpacing: "-1px",
          textAlign: "center",
        }}
      >
        Your home for movie discovery
      </h1>
      <p
        className="flixd-desc flixd-animate flixd-animate-3"
        style={{
          color: "#B0B3C7",
          fontSize: "1.1rem",
          marginBottom: "2rem",
          textAlign: "center",
          maxWidth: 500,
        }}
      >
        The easiest way to discover movies on your streaming services. Download
        the app now!
      </p>
      <a
        className="flixd-animate flixd-animate-4 transition-transform duration-200 hover:scale-102 hover:shadow-xl"
        href="https://apps.apple.com/us/app/flixd/id6446706371?uo=4"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.7rem",
          background: "#000",
          color: "#fff",
          fontWeight: 600,
          padding: "0.85rem 2.1rem 0.85rem 1.5rem",
          borderRadius: "16px",
          fontSize: "1.13rem",
          textDecoration: "none",
          marginBottom: "2rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          border: "1px solid #222",
        }}
      >
        <FaApple size={24} style={{ marginRight: "0.5rem" }} />
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.13rem",
            letterSpacing: "-0.5px",
          }}
        >
          Download on the App Store
        </span>
      </a>
      <footer
        style={{
          width: "100%",
          position: "absolute",
          left: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem 0 1.2rem 0",
          gap: "0.7rem",
        }}
      >
        <style>{`
          @media (min-width: 640px) {
            .flixd-footer-links {
              flex-direction: row !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
        <div
          className="flixd-footer-links"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.7rem",
          }}
        >
          <span style={{ color: "#B0B3C7", fontSize: "1rem" }}>
            Have questions? Contact{" "}
            <a
              href="mailto:support@flixd.app"
              style={{
                color: "#B0B3C7",
                textDecoration: "underline",
                fontSize: "1rem",
              }}
            >
              support@flixd.app
            </a>
          </span>
          <Link
            href="/privacy-policy"
            className="flixd-privacy-link border border-[#23264A] rounded-lg px-3 py-1 text-[#B0B3C7] transition-colors duration-200 hover:border-[#A3BBD3] hover:text-[#A3BBD3]"
            style={{ fontSize: "0.95rem", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}
