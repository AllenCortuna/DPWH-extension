function getDescription(filePath) {
  return filePath.replace(/^.*\\/, "").replace(/\.[^.]+$/, ""); // Remove "C:\fakepath\" and file extension
}
function getID(filePath) {
  const idRegex = /C:\\fakepath\\([\w]{1,8})(?:-R1)?\s/;
  const match = idRegex.exec(filePath);
  return match ? match[1] : null;
}
function getIDGood(filePath) {
  const gebRegex = /\b\d{2}GEB\d{4}\b/;
  const rfqRegex = /\bRFQ-\d{4}-\d{2}-\d{3}\b/;

  let match;

  // Check for GEB pattern
  match = gebRegex.exec(filePath);
  if (match) {
    return match[0].substring(0, 9);
  }

  // Check for RFQ pattern
  match = rfqRegex.exec(filePath);
  if (match) {
    return match[0];
  }

  return null;
}

// Define the data to fill for each URL
const data = {
  category: "Construction Project",
  region: "321",
  office: "428",
  goodsCategory: "Goods"
};

// Get the current URL
const currentURL = window.location.href;

// CIVIL WORKS
if (currentURL.includes("civil_works/form") || currentURL.includes("https://www.dpwh.gov.ph/dpwh/business/procurement/civil_works/form")) {
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

// GOODS
if (currentURL.includes("goods_services/form") || currentURL.includes("https://www.dpwh.gov.ph/dpwh/business/procurement/goods_services/form")) {
  const categoryInput = document.querySelector("#edit-submitted-category");
  if (categoryInput) {
    categoryInput.value = data.goodsCategory;
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
        contractIDInput.value = getIDGood(fileSubmit.value);
      }
      const office = document.querySelector("#edit-submitted-office");
      if (office) {
        office.value = data.office;
      }
    });
  }
}
