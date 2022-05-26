window.addEventListener("load", () => {
  const form = document.querySelector("#new-track-form");
  const input = document.querySelector("#new-track-input");
  const list_el = document.querySelector("#tracks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const track = input.value;

    if (!track) {
      alert("Please enter a track name!");
      return;
    }

    const track_el = document.createElement("div");
    track_el.classList.add("track");

    const track_content_el = document.createElement("div");
    track_content_el.classList.add("content");
    track_content_el.innerText = track;

    track_el.appendChild(track_content_el);

    const track_input_el = document.createElement("input");
    track_input_el.classList.add("text");
    track_input_el.type = "text";
    track_input_el.value = track;

    track_content_el.appendChild(track_input_el);

    list_el.appendChild(track_el);
  });
});
