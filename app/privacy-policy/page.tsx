import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#15182D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2.5rem 1rem 10rem 1rem",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
          marginBottom: "2rem",
          textDecoration: "none",
          color: "#fff",
        }}
      >
        <img
          src="/AppLogo.png"
          alt="Flixd App Logo"
          style={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            background: "#23264A",
            objectFit: "cover",
          }}
        />
        <span
          style={{
            fontSize: "2.5rem",
            fontWeight: 600,
            letterSpacing: "-0.5px",
          }}
        >
          Flixd
        </span>
      </Link>
      <style>{`
        @media (min-width: 640px) {
          .flixd-privacy-content {
            max-width: 800px !important;
          }
        }
      `}</style>
      <div
        className="flixd-privacy-content"
        style={{
          maxWidth: 600,
          width: "100%",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1.2rem",
            letterSpacing: "-1px",
          }}
        >
          Privacy Policy
        </h2>
        <p
          style={{ color: "#B0B3C7", fontSize: "1.1rem", marginBottom: "2rem" }}
        >
          At Flixd, we take your privacy seriously. This policy explains how we
          collect, use, and protect your data.
        </p>

        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            marginTop: "2rem",
            marginBottom: "0.7rem",
          }}
        >
          Data We Collect
        </h2>
        <ul
          style={{
            color: "#B0B3C7",
            fontSize: "1.05rem",
            marginBottom: "1.5rem",
            paddingLeft: "1.2rem",
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>
            • Account information when you sign up (email, name)
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            • Viewing preferences and watchlist selections
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            • Movie ratings and reviews you provide
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            • Usage data like app interactions and search queries
          </li>
        </ul>

        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            marginTop: "2rem",
            marginBottom: "0.7rem",
          }}
        >
          How We Use Your Data
        </h2>
        <ul
          style={{
            color: "#B0B3C7",
            fontSize: "1.05rem",
            marginBottom: "1.5rem",
            paddingLeft: "1.2rem",
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>
            • To personalize your experience and recommendations
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            • To improve our app and services
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            • To communicate important updates
          </li>
        </ul>

        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            marginTop: "2rem",
            marginBottom: "0.7rem",
          }}
        >
          Data Sharing
        </h2>
        <p
          style={{
            color: "#B0B3C7",
            fontSize: "1.05rem",
            marginBottom: "1.5rem",
          }}
        >
          We don't sell your personal data to any third parties.
        </p>

        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            marginTop: "2rem",
            marginBottom: "0.7rem",
          }}
        >
          Your Rights
        </h2>
        <p
          style={{
            color: "#B0B3C7",
            fontSize: "1.05rem",
            marginBottom: "1.5rem",
          }}
        >
          You can request to access, modify, or delete your personal data at any
          time by contacting us or using the delete account function in the app.
        </p>

        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            marginTop: "2rem",
            marginBottom: "0.7rem",
          }}
        >
          Contact Us
        </h2>
        <p
          style={{
            color: "#B0B3C7",
            fontSize: "1.05rem",
            marginBottom: "1.5rem",
          }}
        >
          If you have any questions about our Terms or Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:support@flixd.app"
            style={{ color: "#A3BBD3", textDecoration: "underline" }}
          >
            support@flixd.app
          </a>
        </p>

        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            marginTop: "2.5rem",
            marginBottom: "0.7rem",
          }}
        >
          Third-Party Services
        </h2>
        <p style={{ color: "#B0B3C7", fontSize: "1.05rem" }}>
          We use information from TMDb and JustWatch to provide movie data and
          streaming availability information. Their use is subject to their own
          terms and privacy policies.
        </p>
      </div>
    </main>
  );
}
