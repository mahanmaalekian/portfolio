import scheduler from '../images/vanier-scheduler.png';
import filter from '../images/filter.jpg';
import euro from '../images/UEFA-EURO-2024-Germany.jpg';
import robotics from '../images/robotics.png';
import blocks from '../images/blocks.png';
import chip8 from '../images/chip8.png';
import snitchMaxxing from '../images/snitchmaxxing.gif';
import bullsAi from '../images/bullsai.png';

export default [
	{
		title:'CHIP-8 Emulator',
		description: 'Developed a CHIP-8 emulator in C++ for an STM32 microcontroller, integrating a lightweight keypad and OLED display to create a portable retro gaming console that can run any CHIP-8 game. Programmed drivers in C for the both the keypad and OLED display and integrated them into the emulator code to allow for real-time input from the keypad and output to the OLED display.',
		skills: ['C', 'C++', 'STM32'],
		links: {
			github: 'https://github.com/mahanmaalekian/stm32-chip8-emulator'
		},
		image: chip8
	},
    {
        title: 'Vanier Exam Scheduler',
        description: `Designed and deployed a final exam scheduling tool that is used by 150+ Vanier College students every semester to effortlessly search for their final exams, add them to their schedules, and export them to their preferred calendar. Built using Django for the backend and vanilla HTML/CSS + JavaScript for the frontend.`,
        skills: ['Django\n(Python)', 'HTML', 'CSS', 'PostgreSQL', 'JavaScript'],
        links: {
            github: 'https://github.com/mahanmaalekian/Vanier-Scheduler'
        },
        image: scheduler
    },
{
        title: 'McGill Robotics Mars Rover',
        description: `Developed a React-based control interface for the rover, enabling real-time robot navigation by displaying GPS coordinates, location tracking, and velocity data, while providing manual control capabilities for competition environments. Also engineered drive control systems for the rover using ROS in C++ and Python, implementing publishers, servers, and control protocols to manage responsive wheel movement during competitions.`,
        skills: ['React', 'Python', 'C++', 'ROS', 'Linux'],
        links: {
            github: 'https://github.com/mcgill-robotics/rover-2025'
        },
        image: robotics
    },
	{
		title:'SnitchMaxxing',
		description: `A computer vision anti-cheating tool that can be used by teachers to automatically detect if students are looking at other students' papers and cheating  during exams. The program analyzes the faces of students and is able to figure out in what direction the face is pointing and in what direction the eyes are looking. It is then able to assess whether the student is looking away from their exam, and notifies the teacher if that is the case.`,
		skills: ['Python', 'Opencv', 'Mediapipe'],
		links: {
			github: 'https://devpost.com/software/snitchmaxxing'
		},
		image: snitchMaxxing
	},
{
		title:'BullsAI',
		description: `A web application that predicts the behaviour of different stocks during periods of high volatility. Provides the user with data and figures of different stock prices during high volalitilty periods in the past, and then uses a Long Short-Term Memory AI model to predict the behvaiour of those stocks in the near future based on the data from the high volatility periods that have passed.`,
		skills: ['Python', 'Dash', 'Google-Collab', 'Pandas', 'Numpy', 'Tensorflow'],
		links: {
			github: 'https://devpost.com/software/bullsai'
		},
		image: bullsAi
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
