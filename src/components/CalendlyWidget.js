import React from "react";

const CalendlyWidget = () => {
  return (
    <>
      <div
        className="calendly-widget"
        data-url="https://calendly.com/your-calendly-link"
        style={{ minWidth: "320px", height: "630px" }}
      ></div>
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
      ></script>
    </>
  );
};

export default CalendlyWidget;
