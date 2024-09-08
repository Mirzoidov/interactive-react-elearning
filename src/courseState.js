// import images
import react from "./img/react1.jpg";
import react2 from "./img/react2.jpg";
import js from "./img/js1.jpg";
import js2 from "./img/js2.jpg";
import soon from "./img/soon1.jpg";
import soon2 from "./img/soon2.jpg";

export const CourseState = () => {
  return [
    {
      title: "Interaktive React va Redux",
      mainImg: react,
      secondaryImg: react2,
      url: "/courses/react",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
      ],
    },
    {
      title: "Tez kunda",
      mainImg: soon,
      secondaryImg: soon2,
      url: "/courses/soon",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
      ],
    },
    {
      title: "Interaktive JavaScript",
      mainImg: js,
      secondaryImg: js2,
      url: "/courses/javascript",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
      ],
    },
  ];
};
