
var courseAPI = 'http://localhost:3000/courses';

function start() {
    getCourses(function(courses) {
        renderCourses(courses);
    });

    handleCreateForm();
}



// Function
function getCourses(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCourseBlock = document.querySelector('#list-courses');

    var htmls = courses.map(function(course) {
        return `<li class="course-item-${course.id}">
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                    <button onclick="handleUpdateForm(${course.id})">Update</button>
                </li>`;
    });

    var html = htmls.join('');
    listCourseBlock.innerHTML = html;
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}
function handleUpdateCourse(id, data) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
}
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove(); // delete in DOM
            }
        });
}
function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, function() {
            getCourses(renderCourses);
        });
    }
}
function handleUpdateForm(id) {
    var courseItem = document.querySelector('.course-item-' + id);
    var nameItem = courseItem.querySelector('h4');
    var descriptionItem = courseItem.querySelector('p');
    var btnCreate = document.querySelector('#create');
    var name = document.querySelector('input[name="name"]');
    var description = document.querySelector('input[name="description"]');
    btnCreate.innerText = 'Update';
    name.value = nameItem.innerText;
    description.value = descriptionItem.innerText;
    btnCreate.onclick = function() {
        var formData = {
            name: name.value,
            description: description.value
        }
        nameItem.innerText = name.value;
        description.innerText= description.value;
        handleUpdateCourse(id, formData);
        btnCreate.innerText = 'Create';
        name.value = '';
        description.value = '';
    }
}

start();
