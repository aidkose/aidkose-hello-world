import headshot from "./images/headshot.jpg";
import "./App.css";

const wrapper = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  minHeight: "200px",
  width: "400px",
  backgroundColor: "#A9CBB7",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "flex-start",
  padding: "20px",
  boxSizing: "border-box",
  margin: "0 auto",
};

const imageDimensions = {
  width: "350px",
  height: "auto",
  margin: "0 auto",
};

const name = {
  marginBottom: "1rem",
};

const desc = {
  marginTop: "0",
};

function App() {
  return (
    <div style={wrapper}>
      <div style={card}>
        <img
          src={headshot}
          style={imageDimensions}
          alt="God of Wark: Ragnarok"
        />
        <h1 style={name}>Aiden Kosegi</h1>
        <p style={desc}>
          My name is Aiden Kosegi and I am a web development major from IUPUI. I
          work as a TA for Todd in N115 as well as the IUPUI web office. I like
          watches, video games, D&D, and have also recently gotten into playing
          Warhammer. My future goals are to become a freelance web developer and
          start my own creative studio. I am currently playing God of Wark:
          Ragnarok, and I highly reccomend it.
        </p>
      </div>
    </div>
  );
}

export default App;
