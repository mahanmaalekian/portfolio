import scheduler from '../images/vanier-scheduler.png';
import filter from '../images/filter.jpg';
import euro from '../images/UEFA-EURO-2024-Germany.jpg';
import robotics from '../images/robotics.png';
import blocks from '../images/blocks.png';

export default [
    {
        title: 'Vanier Exam Scheduler',
        description: `A full-stack web application designed for Vanier College students to efficiently manage their exam schedules. Students can search for their final exams, and seamlessly export
         them to Google Calendar or download a calendar file. 
         Built with Django for the backend and HTML, CSS, and JavaScript for the frontend, the application simplifies
        navigating large exam schedules by providing an intuitive and user-friendly interface.`,
        skills: ['Django\n(Python)', 'HTML', 'CSS', 'PostgreSQL', 'JavaScript'],
        links: {
            github: 'https://github.com/mahanmaalekian/vanier-exam-scheduler'
        },
        image: scheduler
    },
    {
        title: 'Image Filter',
        description : `Developed a C program to apply various filters to BMP images, including grayscale conversion, blurring,
        and edge detection using the Sobel operator. This project involved implementing efficient algorithms for 
        pixel manipulation and image processing, enhancing my understanding of low-level programming
        and memory management. Through this work, I gained hands-on experience
        in working with raw image data, applying mathematical operations for
        visual transformations, and optimizing code performance for processing large files.`,
        skills: ['C', 'Makefile', 'Bash'],
        links: {
            github: 'https://github.com/mahanmaalekian/image-filter'
        },
        image: filter
    },

    {
        title: 'Euro 2024 Database',
        description: `The UEFA Euro 2024 database is a robust solution for tracking the tournament, 
        capturing essential details such as countries, players, managers, stadiums, games, and goals. Built with SQLite,
         it supports efficient CRUD operations and delivers detailed insights into tournament progress. 
         Optimized indexing for player names and countries
         enhances query performance, making it a powerful tool for analyzing teams and players throughout the event.`,
         skills: ['SQL', 'Entity Relationship Diagrams'],
         links: {
            github: 'https://github.com/mahanmaalekian/euro-2024-database'
         },
         image: euro
    },
    {
        title: 'McGill Robotics Mars Rover',
        description: `As a member of the McGill Robotics team  I eveloped a React-based control interface for the rover, enabling real-time robot navigation by displaying GPS
        coordinates, location tracking, and velocity data, while providing manual control capabilities for competition
        environments. I also engineered drive control systems for the rover using ROS in C++ and Python, implementing publishers, servers,
        and control protocols to manage wheel movement and ensure responsive, real-time navigation during competitions`,
        skills: ['ReactJS', 'Python', 'C++', 'ROS', 'Linux'],
        links: {
            github: 'https://github.com/mcgill-robotics/rover-2025'
        },
        image: robotics
    },
    {
        title: 'Colorful Block Game',
        description: ` Created a two-player game featuring a colorful and engaging UI, where opponents compete to create the largest
                    block using a variety of strategic moves. Implemented recursive algorithms to handle the recursive nature of the block configuration`,
        skills: ['Java', 'JUnit', 'Swing'],
        links: {
            github: 'https://github.com/mahanmaalekian/colorful-block-game'
        },
        image: blocks 
    }
]