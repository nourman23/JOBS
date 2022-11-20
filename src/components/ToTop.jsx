import React from "react";

export const ToTop = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("toTop").style.display = "block";
    } else {
      document.getElementById("toTop").style.display = "none";
    }
  }

  React.useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      className="flex align-items-center justify-content-center"
      id="toTop"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      style={{
        position: "fixed",
        // padding: "5px",
        fontSize: "30px",
        width: "40px",
        bottom: "40px",
        zIndex: 99,
        right: "40px",
        backgroundColor: "#1976d2",
        borderRadius: "50%",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <ion-icon name="arrow-up-outline"></ion-icon>
    </button>
  );
};
