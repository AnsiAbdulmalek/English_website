// Simulated student data (In real implementation, this would come from a database)
const students = {
    // 'STD001': {
    //     password: 'pass123',
    //     name: 'John Doe',
    //     level: 'Intermediate',
    //     term: '77',  // Added term number
    //     results: {
    //         attendance: 9,         // out of 10
    //         homework: 8.5,         // out of 10
    //         presentation: 9,       // out of 10
    //         dictation: 8.5,       // out of 10
    //         quiz1: 4.5,           // out of 5
    //         quiz2: 4,             // out of 5
    //         quiz3: 4.5,           // out of 5
    //         storyWritten: 4.5,    // out of 5
    //         storyOral: 4,         // out of 5
    //         finalExam: 32         // out of 35
    //     }
    // },

    // Example of same student in different term
    'STD002': {
        password: 'pass123',
        name: 'John Doe',
        level: 'Advanced',
        term: '78',  // Different term
        results: {
            attendance: 9.5,
            homework: 9,
            presentation: 8.5,
            dictation: 9,
            quiz1: 4.5,
            quiz2: 4.5,
            quiz3: 4.5,
            storyWritten: 4.5,
            storyOral: 4.5,
            finalExam: 33
        }
    },
    
    'EXAMPLE': {
        password: 'example',
        name: 'Ansi_Example',
        level: 'AD-G',
        term: '100',  // Added term number
        results: {
            attendance: 10,         // out of 10
            homework: 10,         // out of 10
            presentation: 10,       // out of 10
            dictation: 10,       // out of 10
            quiz1: 5,           // out of 5
            quiz2: 5,             // out of 5
            quiz3: 5,           // out of 5
            storyWritten: 5,    // out of 5
            storyOral: 5,         // out of 5
            finalExam: 35         // out of 35
        }
    },
    
};

document.getElementById('studentLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (students[studentId] && students[studentId].password === password) {
        // Show dashboard
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');

        // Display student name, level, and term
        document.getElementById('studentName').textContent = students[studentId].name;
        document.getElementById('studentLevel').textContent = students[studentId].level;
        document.getElementById('termNumber').textContent = students[studentId].term;

        const results = students[studentId].results;

        // Display individual scores
        document.getElementById('attendanceScore').textContent = results.attendance;
        document.getElementById('homeworkScore').textContent = results.homework;
        document.getElementById('presentationScore').textContent = results.presentation;
        document.getElementById('dictationScore').textContent = results.dictation;
        document.getElementById('quiz1Score').textContent = results.quiz1;
        document.getElementById('quiz2Score').textContent = results.quiz2;
        document.getElementById('quiz3Score').textContent = results.quiz3;
        document.getElementById('storyWrittenScore').textContent = results.storyWritten;
        document.getElementById('storyOralScore').textContent = results.storyOral;
        document.getElementById('finalScore').textContent = results.finalExam;

        // Calculate total score
        const totalScore =
            results.attendance +
            results.homework +
            results.presentation +
            results.dictation +
            results.quiz1 +
            results.quiz2 +
            results.quiz3 +
            results.storyWritten +
            results.storyOral +
            results.finalExam;

        // Display total score in both formats (91.5 out of 100 - 91.5%)
        document.getElementById('totalScore').textContent = `${totalScore.toFixed(1)} out of 100`;
        document.getElementById('totalPercentage').textContent = `${totalScore.toFixed(1)}%`;
    } else {
        alert('Invalid student ID or password');
    }
});

document.getElementById('logoutBtn').addEventListener('click', function () {
    // Hide dashboard and show login form
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');

    // Clear form
    document.getElementById('studentLoginForm').reset();
});
