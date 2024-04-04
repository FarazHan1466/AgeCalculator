document.addEventListener("DOMContentLoaded", function () {
  const date = document.querySelector(".dateBox");
  const btn = document.querySelector(".btn");
  const result = document.querySelector(".ageResult");

  btn.addEventListener("click", function () {
    const dobString = date.value;
    if (dobString === "") {
      alert("Please Enter Your Date Of Birth.");
    } else {
      const dobParts = dobString.split("/"); // Split the date string by '/'
      const dobDay = parseInt(dobParts[0]); // Parse the day
      const dobMonth = parseInt(dobParts[1]); // Parse the month
      const dobYear = parseInt(dobParts[2]); // Parse the year

      // Create a new Date object using the parsed year, month, and day
      const dob = new Date(dobYear, dobMonth - 1, dobDay); // Month is zero-based

      const now = new Date();
      const nowYear = now.getFullYear();
      const age = nowYear - dobYear;
      result.textContent = `Your age is ${age} years old`;
    }
  });
});
