function toggle(title, content, name1, name2, phone1, phone2, register) {
  const blur = document.querySelector("#blur");
  blur.classList.toggle("active");
  const popup = document.querySelector("#pop");
  const h2 = document.querySelector(".event_heading");
  const cont = document.querySelector(".event_content");
  h2.innerHTML = title;
  cont.innerText = content;
  popup.classList.toggle("new_active");

  const aboutBtn = document.querySelector(".about-button");
  const organiserBtn = document.querySelector(".organiser-button");
  const eventContent = document.querySelector(".event_content");
  const organiserPage = document.querySelector(".org");

  const organiser1name = document.querySelector(".org1-name");
  const organiser2name = document.querySelector(".org2-name");

  const organiser1phone = document.querySelector(".org1-phone");
  const organiser2phone = document.querySelector(".org2-phone");

  const registerLink = document.querySelector(".regi");
  registerLink.href = `https://${register}`;

  organiser1name.innerHTML = name1;
  organiser2name.innerHTML = name2;
  organiser1phone.innerHTML = phone1;
  organiser2phone.innerHTML = phone2;

  organiserBtn.addEventListener("click", () => {
    eventContent.classList.add("hide");
    organiserPage.classList.remove("hide");
  });

  aboutBtn.addEventListener("click", () => {
    eventContent.classList.remove("hide");
    organiserPage.classList.add("hide");
  });
}
