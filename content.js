function getDescription(filePath) {
  return filePath.replace(/^.*\\/, "").replace(/\.[^.]+$/, ""); // Remove "C:\fakepath\" and file extension
}
function getID(filePath) {
  const idRegex = /\\(\w+)\s/;
  const match = idRegex.exec(filePath);
  return match ? match[1] : "24EB0";
}

// Define the data to fill for each URL
const data = {
  category: "Construction Project",
  region: "321",
  office: "428",
};

// Get the current URL
const currentURL = window.location.href;

// Check if the current URL matches a defined URL
if (currentURL.includes("https://www.dpwh.gov.ph/dpwh/business/procurement/civil_works/form")) {
  const categoryInput = document.querySelector("#edit-submitted-category");
  if (categoryInput) {
    categoryInput.value = data.category;
  }

  const region = document.querySelector("#edit-submitted-region");
  if (region) {
    region.value = data.region;
  }

  const fileSubmit = document.querySelector("#edit-submitted-file-upload");
  if (fileSubmit) {
    fileSubmit.addEventListener("change", function () {
      const description = document.querySelector(
        "#edit-submitted-project-description"
      );
      if (description) {
        description.value = getDescription(fileSubmit.value);
      }
      const contractIDInput = document.querySelector(
        "#edit-submitted-contract-id"
      );
      if (contractIDInput) {
        contractIDInput.value = getID(fileSubmit.value);
      }
      const office = document.querySelector("#edit-submitted-office");
      if (office) {
        office.value = data.office;
      }
    });
  }
}
