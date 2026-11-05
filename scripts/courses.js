/*
 * Course list for the Web and Computer Programming certificate.
 * Confirm the course titles/credits against the official course-list file
 * supplied in your WDD 231 assignment. Change completed to true only for
 * courses you have personally completed.
 */
const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false
    }
];

const courseList = document.querySelector("#course-list");
const creditSummary = document.querySelector("#credit-summary");
const filterButtons = document.querySelectorAll(".filter-button");

function displayCourses(courseArray) {
    courseList.innerHTML = "";

    if (courseArray.length === 0) {
        courseList.innerHTML = '<p class="empty-message">No courses found.</p>';
    } else {
        courseArray.forEach((course) => {
            const card = document.createElement("article");
            card.classList.add("course-card");

            if (course.completed) {
                card.classList.add("completed");
            }

            const information = document.createElement("div");

            const code = document.createElement("h3");
            code.classList.add("course-code");
            code.textContent = `${course.subject} ${course.number}`;

            const title = document.createElement("p");
            title.classList.add("course-title");
            title.textContent = course.title;

            information.append(code, title);

            const meta = document.createElement("div");
            meta.classList.add("course-meta");

            const status = document.createElement("span");
            status.classList.add("course-status");
            status.textContent = course.completed ? "Completed" : "Not completed";

            const credits = document.createElement("p");
            credits.classList.add("course-credits");
            credits.textContent = `${course.credits} credits`;

            meta.append(status, credits);
            card.append(information, meta);
            courseList.append(card);
        });
    }

    const totalCredits = courseArray.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    creditSummary.textContent =
        `Credits displayed: ${totalCredits} · ${courseArray.length} courses`;
}

function filterCourses(filter) {
    let filteredCourses = courses;

    if (filter !== "ALL") {
        filteredCourses = courses.filter((course) => course.subject === filter);
    }

    displayCourses(filteredCourses);

    filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === filter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterCourses(button.dataset.filter);
    });
});

// Show all courses when the page first loads.
displayCourses(courses);
