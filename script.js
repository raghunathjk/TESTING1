window.addEventListener("load", () => {
  const form = document.querySelector("#new-track-form");
  const input = document.querySelector("#new-track-input");
  const tracksListElement = document.querySelector("#tracks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const track = input.value;

    if (!track) {
      alert("Please enter a track name!");
      return;
    }

    const trackElement = document.createElement("div");
    trackElement.classList.add("track");

    const trackContentElement = document.createElement("div");
    trackContentElement.classList.add("content");

    trackElement.appendChild(trackContentElement);

    const trackInputElement = document.createElement("input");
    trackInputElement.classList.add("text");
    trackInputElement.type = "text";
    trackInputElement.value = track;
    trackInputElement.setAttribute("readonly", "readonly");

    trackContentElement.appendChild(trackInputElement);

    const trackActionsElement = document.createElement("div");
    trackActionsElement.classList.add("actions");

    const trackEditElement = document.createElement("button");
    trackEditElement.classList.add("edit");
    trackEditElement.innerText = "Edit";

    const trackDeleteElement = document.createElement("button");
    trackDeleteElement.classList.add("delete");
    trackDeleteElement.innerText = "Delete";

    trackActionsElement.appendChild(trackEditElement);
    trackActionsElement.appendChild(trackDeleteElement);

    trackElement.appendChild(trackActionsElement);

    tracksListElement.appendChild(trackElement);

    input.value = "";

    trackEditElement.addEventListener("click", () => {
      if (trackEditElement.innerText.toLowerCase() == "edit") {
        trackInputElement.removeAttribute("readonly");
        trackInputElement.focus();
        trackEditElement.innerText = "Save";
      } else {
        trackInputElement.setAttribute("readonly", "readonly");
        trackEditElement.innerText = "Edit";
      }
    });

    trackDeleteElement.addEventListener("click", () => {
      tracksListElement.removeChild(trackElement);
    });
  });
});
