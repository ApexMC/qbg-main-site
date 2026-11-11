export default function SocialCard({ logoSrc }: { logoSrc: string }) {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#fff7fb",
        color: "#18181b",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "64px 86px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          border: "2px solid rgba(236, 72, 153, 0.2)",
          borderRadius: "42px",
          boxShadow: "0 30px 90px rgba(157, 23, 77, 0.14)",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "48px 64px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "650px" }}>
          <div
            style={{
              color: "#db2777",
              display: "flex",
              fontSize: "25px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Education in motion
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "62px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              marginTop: "22px",
            }}
          >
            Quantum Beauty Group
          </div>
          <div
            style={{
              color: "#52525b",
              display: "flex",
              fontSize: "27px",
              lineHeight: 1.35,
              marginTop: "24px",
            }}
          >
            Modern education and practical tools for beauty professionals.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.88)",
            borderRadius: "999px",
            display: "flex",
            height: "310px",
            justifyContent: "center",
            marginLeft: "42px",
            width: "310px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Quantum Beauty Group logo"
            height={250}
            src={logoSrc}
            style={{ objectFit: "contain" }}
            width={250}
          />
        </div>
      </div>
    </div>
  );
}
