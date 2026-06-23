import React from "react";

const Gallery = () => {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
    "/images/image9.png",
    "/images/image10.png",
    "/images/image11.png",
    "/images/image12.png",
    "/images/image13.png",
    "/images/image14.png",
    "/images/image15.png",
    "/images/image16.png",
    "/images/image17.png",
    "/images/image18.png",
    //"/images/image19.png",
    
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          color: "#b8860b",
          marginBottom: "15px",
        }}
      >
        Our Memories 📸
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "50px",
          fontSize: "1.1rem",
        }}
      >
        A glimpse of our beautiful journey together
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={image}
              alt={`Wedding ${index + 1}`}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;