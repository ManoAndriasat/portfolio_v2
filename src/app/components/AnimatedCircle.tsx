import React, { useEffect, useState } from "react";
import "../styles/AnimatedCircle.css";

const AnimatedCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => { // Define the event type here
      const { clientX, clientY } = event;

      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const textElement = document.querySelector(".text");
    let text = textElement.innerText.replace(/-/g, " - ");
    const characters = text.split("");

    while (characters.length < 30) {
      text += " " + textElement.innerText.replace(/-/g, " - ");
    }

    const updatedCharacters = text.split("");
    const arcLength = 355;
    const charAngle = arcLength / updatedCharacters.length;

    textElement.innerHTML = updatedCharacters
      .map(
        (char, i) =>
          `<span style="transform:rotate(${
            -arcLength / 2 + i * charAngle
          }deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div
      className="circle"
      style={{
        transform: `translate(${position.x - 500}px, ${position.y - 500}px)`, // Déplacement ajusté
        position: "absolute", // Retour à 'absolute' pour le suivi de la position
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="logo"></div>
      <div className="text">
        Full stack developer - spring boot - react - react native - python -
      </div>
    </div>
  );
};

export default AnimatedCircle;
