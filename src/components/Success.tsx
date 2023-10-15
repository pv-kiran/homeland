import { Player } from "@lottiefiles/react-lottie-player";

function Success() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Player
        src={
          "https://lottie.host/c14a4935-a85a-4c0c-b15e-aeece681c6f1/9e8KsYdKLA.json"
        }
        loop
        autoplay
        style={{ height: "40rem" }}></Player>
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#1BBCB2",
          fontWeight: "500",
        }}>
        Your inquiry has been successfully submitted
      </h1>
    </div>
  );
}

export default Success;
