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
    // task_content_el.innerText = track;

    track_el.appendChild(track_content_el);

    const track_input_el = document.createElement("input");
    track_input_el.classList.add("text");
    track_input_el.type = "text";
    track_input_el.value = track;
    track_input_el.setAttribute("readOnly", "readOnly");

    track_content_el.appendChild(track_input_el);

    const track_actions_el = document.createElement("div");
    track_actions_el.classList.add("actions");

    const track_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    track_edit_el.innerText = "Edit";

    const track_delete_el = document.createElement("button");
    track_delete_el.classList.add("delete");
    track_delete_el.innerText = "Delete";

    track_actions_el.appendChild(track_edit_el);
    track_actions_el.appendChild(track_delete_el);

    track_el.appendChild(track_actions_el);

    list_el.appendChild(track_el);

    input.value = "";

    track_edit_el.addEventListener("click", () => {
      if (track_edit_el.innerText.toLowerCase() == "edit") {
        track_input_el.removeAttribute("readOnly");
        track_input_el.focus();
        track_edi_el.innerText = "Save";
      } else {
        track_input_el.setAttribute("readOnly", "readOnly");
        track_input_el.innerText = "Edit";
      }
    });

    track_delete_el.addEventListener("click", () => {
      list_el.removeChild(track_el);
    });
  });
});
