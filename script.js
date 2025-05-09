import { generateInterviewPrep } from "./api/perplexity.js";

document.getElementById("studentRegistration").addEventListener("submit", async function(e) {
  e.preventDefault();

  const resumeInput = this.querySelector('input[type="file"]');
  const file = resumeInput.files[0];

  if (!file) {
    alert("Please upload your resume.");
    return;
  }

  const reader = new FileReader();
  reader.onload = async function(event) {
    const resumeText = event.target.result;

    const loadingMsg = document.createElement("p");
    loadingMsg.textContent = "Generating your interview prep...";
    document.body.appendChild(loadingMsg);

    const aiResponse = await generateInterviewPrep(resumeText);
    alert("📄 AI Interview Prep:\n\n" + aiResponse);

    loadingMsg.remove();
  };

  reader.readAsText(file);
});
