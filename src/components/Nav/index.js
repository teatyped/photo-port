import React from "react";

function Nav() {
  const categorires = [
    {
      name: "Commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      name: "Portraits",
      decription: "portraits of people in my life",
    },
    {
      name: "Food",
      description: "Delicious delicacies",
    },
    {
      name: "Landscape",
      decription: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>

          {categorires.map((category) => (
            <li className="mx-1" key={category.name}>
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
