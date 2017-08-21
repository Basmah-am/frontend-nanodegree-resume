var bio = {
    "name": "Basmah AlMashari",
    "role": "Front-end developer",
    "contacts": {
        "mobile" : "0540335701",
        "email" : "Basmah.almashari@gmail.com",
        "github" : "https://github.com/Basmah-am",
        "twitter" : "@Basmah_al",
        "location" : "Saudi Arabia"
    },
    "welcomeMessage" : "Hello to my resume",
    "skills" : ['Goal oriented person', 'Self-motivated','Quick learner'],
    "biopic" : "images/logo.jpeg",
    display : function(){
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));
        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        var allskills ="";
        for (var i=0; i < bio.skills.length; i++)
        {
            allskills+= HTMLskills.replace("%data%", bio.skills[i]);

        }
        $("#header").append(HTMLskillsStart);
        $("#skills").append(allskills);
    }

};

var education = {
    "schools" : [
        {
            "name": "King Saud univercity",
            "location": "Saudi Arabia",
            "degree": "bachelor",
            "majors": ["Information technology"],
            "dates": "2015",
        }
    ],
    "onlineCourses" : [ {
        "title": "Programming for Everybody (Getting Started with Python)",
        "school": "coursera",
        "dates": "Dec 2014",
        "url": "https://www.coursera.org/learn/python"
    },{
        "title": "The Complete React Native and Redux Course",
        "school": "udemy",
        "dates": "April 2016",
        "url": "https://www.udemy.com/the-complete-react-native-and-redux-course/"
    },
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "udacity",
            "dates": "in progress",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    display : function(){
        var allshools = "";
        for (var i=0 ; i < education.schools.length; i++){
            allshools += HTMLschoolName.replace("%data%", education.schools[i].name)+
                HTMLschoolDegree.replace("%data%", education.schools[i].degree)+
                HTMLschoolLocation.replace("%data%", education.schools[i].location)+
                HTMLschoolDates.replace("%data%", education.schools[i].dates)+
                HTMLschoolMajor.replace("%data%", education.schools[i].majors);

        }
        $("#education").append(HTMLschoolStart);
        $(".education-entry").append(allshools);
        var allOnlineCourses = "";
        for (var j=0 ; j < education.onlineCourses.length; j++){
            allOnlineCourses += HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title)+
                HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school)+
                HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates)+"<br>";
        }
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:eq(1)").append(allOnlineCourses);
    }
};
var work = {
    "jobs"  : [
        {
            employer: "Tamkeen Technologies",
            title: "Senior Developer",
            location: "Saudi Arabia",
            dates: "APR 2017 - PRESENT",
            description: "Developing the appearance (front-end) and usability of Ajeer web application by utilizing LESS, Bootstrap 3 and JavaScript",
        },{
            employer: "Tamkeen Technologies",
            title: "Research and Development Analyst",
            location: "Saudi Arabia",
            dates: "NOV 2014 - APR 2017",
            description: "Working as R&D giving me the opportunity to find and create new products or services.",
        },{
            employer: "Badir for Biotechnology",
            title: "Summer Trainee",
            location: "Saudi Arabia",
            dates: "JUN 2013 - AUG 2013",
            description: "Building a website application for one of the incubator project",
        }
    ],
    "projects" : [
        {
            title: "Afkar system",
            dates: "May 2016 – Aug 2016",
            description: "Innovation system from idea submission to idea workflow which is one of Nawat initiative",
            images: ["images/afkar.png"],
        },
        {
            title: "Asyeh org",
            dates: "Nov 2016 – Nov 2016",
            description: "Build Asyeh organization website based on their requirements and needs",
            images: ["images/asyah.png"],
        },
        {
            title: "Portfiolio",
            dates: "AUG 2017",
            description: "Nano-degree Portfiolio project",
            images: ["images/Portfiolio.png"],
        }
    ],
    display : function() {
        var alljobs = "";
        for (var i=0 ; i < work.jobs.length ; i++){
            alljobs += HTMLworkEmployer.replace("%data%", work.jobs[i].employer)+
                HTMLworkTitle.replace("%data%", work.jobs[i].title)+
                HTMLworkLocation.replace("%data%", work.jobs[i].location)+
                HTMLworkDates.replace("%data%", work.jobs[i].dates)+
                HTMLworkDescription.replace("%data%", work.jobs[i].description);

        }
        var allprojects = "";
        for (var c=0 ; c < work.projects.length ; c++){
            allprojects += HTMLprojectTitle.replace("%data%", work.projects[c].title)+
                HTMLprojectDates.replace("%data%", work.projects[c].dates)+
                HTMLprojectDescription.replace("%data%", work.projects[c].description);
            var allimages = "";
            for (var j=0 ; j < work.projects[j].images.length ; j++){
                allimages += HTMLprojectImage.replace("%data%",work.projects[c].images[j]);}
            allprojects +=  allimages;
        }

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry").append(alljobs);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry").append(allprojects);
        $(".project-entry").children("img").attr("width","350");
    },
};

bio.display();
education.display();
work.display();
$("#mapDiv").append(googleMap);