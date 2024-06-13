import avatarImage from '@/assets/images/avatar.png';

export const Data = {
  name: 'Deren Luu',
  fullName: 'Luu Uy Danh',
  job: 'Web Developer',
  avatar: avatarImage,
  social: {
    facebook: 'https://www.fb.com/luu.uydanh/',
    github: 'https://github.com/derenluu',
    linked: 'https://www.linkedin.com/in/derenluu/',
  },
  contact: {
    email: 'luuuydanh123c@gmail.com',
    phone: '(+84) 78 382 9068',
    birthDay: 'December 21, 2000',
    location: 'Binh Thanh District, HCM City',
  },
  portfolio: {
    About_Me:
      'In venturing into an industry different from my academic background, I placed a premium on my adaptability. With a knack for rapid learning, I viewed every challenge as a chance for personal growth. Motivated by the desire to acquire new skills and insights, my ultimate goal is to evolve into a proficient Fullstack developer.',
    Resume: {
      Education: {
        school: 'Cao Thang Technical College',
        major: 'Electronics and communication technology',
        gpa: '7.15/10',
        description: [
          'During my college years, I studied, researched and developed new technologies and advanced electronic and telecommunications devices. Learn about global information transmission devices, including transmission systems such as fiber optic cables, satellites and wireless communication systems.',
          'But realized what I liked and started delving deeper into programming using some basic technologies. Outside of college courses, I spend my free time creating several projects, including Android app interfaces, sales web interfaces using pure html and css.',
        ],
      },
      Experience: [
        {
          title: 'Internship in Intel Corporation | Intel Group',
          position: 'Intern Operator Helpdesk',
          time: '1st Quarter 2022',
          description: 'Monitor operation system of chips. Activity threading of chips. Investigate and take part in the process of making of chips.',
        },
        {
          title: 'Web Developer | Vietnam Chingluh Shoes Co., LTD',
          position: 'Engineer 1',
          time: '12/2021 - Now',
          description:
            'Learn about production processes including various separate production processes from many departments. Process data from documents like Excel, PDF,... Choose suitable technologies to present the required information. Learn new technology and generate creative ideas to build a website.',
        },
      ],
      Activities: [
        'Participating in the soccer club.',
        'Supporting to organize outdoor activities at school on November 20th.',
        'Organizing activities, games and rewards for new students.',
      ],
      Certificates: [
        'Certificate of English at college (A2).',
        'Certificate of Informatics at the college.',
        'Certificate of IOT at college (GPA: 8/10).',
      ],
    },
    Skills: {
      TechSkills: {
        Language: 'JavaScript, PHP',
        Database: 'PostgreSQL',
        Platforms_Frameworks: 'NodeJS (Express), ReactJS, NextJS, Bootstrap, TailwindCSS',
        Other: 'CRUD, REST, OOP, MVC, Github, Postman',
      },
      SoftSkills: ['Fast Learner', 'Adaptability', 'Teamwork'],
      Knowledge: ['Python', 'MongoDB', 'Firebase', 'VMware workstation', 'Premiere', 'Arduino (IOT)'],
      Language: ['Vietnamese (Native)', 'English (Reading and understanding documents)'],
    },
    Project: {
      Public: [
        {
          title: 'Personal Portfolio (This Page)',
          tech: ['NextJS', 'Typescript', 'TailwindCSS', 'CSS'],
          source: 'https://github.com/derenluu/personal-portfolio',
          description: 'Portfolio of personal.',
        },
      ],
      Private: [
        {
          title: 'KPI Dashboard',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'ChartJS', 'AmCharts', 'KendoUI', 'FileFond', 'Flatpickr'],
          responsibilities: 'Fullstack',
          source: 'Private (Company Privacy Policy)',
          description:
            'Learn how to calculate different KPIs, apply calculations, build interfaces and databases. Make API calls from the database to the user interface. Develop filtering tools to visualize data and enable export to Excel according to provided templates for archiving purposes and create dashboards as an alternative to original reports using Excel documents.',
        },
        {
          title: 'Sample Shipping Tracking',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'KendoUI', 'FileFond', 'Flatpickr'],
          responsibilities: 'Fullstack',
          source: 'Private (Company Privacy Policy)',
          description:
            'Learn about sample shipping processes and calculate shipping management KPIs. Build the interface and database, implement API calls from the database to the user interface. Create filtering tools for data visualization (combination of timeline tracking and search packages) and enable data export to Excel according to the provided template for reporting purposes.',
        },
        {
          title: 'Risk Assessment',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'ChartJS', 'AmCharts', 'KendoUI', 'FileFond', 'Flatpickr'],
          responsibilities: 'Fullstack',
          source: 'Private (Company Privacy Policy)',
          description:
            "Learn about the process of trying on sample shoes and integrating with the company's IT system. Create database and interface, implement API calls from database to frontend. Develop filtering tools for data visualization. Build decentralized functionality with a directory tree structure to manage security and configuration, allowing personalized access for each user. Incorporates functionality to export data to Excel according to the template provided for reporting purposes and create dashboards for data visualization.",
        },
        {
          title: 'FMEA (Failure Mode and Effects Analysis)',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'KendoUI', 'FileFond'],
          responsibilities: 'Fullstack',
          source: 'Private (Company Privacy Policy)',
          description:
            'Learn the working processes of related departments. Build database and user interface, combine search package, image upload and data upload functions. Implement the function to export data to Excel according to the template provided for reporting purposes.',
        },
        {
          title: 'Change Management',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'KendoUI', 'Flatpickr'],
          responsibilities: 'Fullstack',
          source: 'Private (Company Privacy Policy)',
          description:
            'Learn about the change management process. Develop database and user interface with search functions, create tickets, delete tickets and update ticket data. Deploy employee hierarchical folder tree, signing tool, automatic Outlook email sending feature when there is a data update, and data export function to Excel according to the provided template for reporting purposes.',
        },
        {
          title: 'DRAR (Defective Rate Analysis Report)',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'KendoUI', 'Flatpickr'],
          responsibilities: 'Fullstack',
          source: 'Private (Company Privacy Policy)',
          description:
            'Learn about the material mold inspection process. Database and user interface development with features including package management, sample search, image upload, quantity entry. Build decentralized functionality with a directory tree structure for configuration and security management, allowing personalization of access and data updates for each user. Function to export data to Excel in a sample format from the supplier for reporting purposes.',
        },
        {
          title: 'Attendance Report',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'KendoUI', 'Flatpickr'],
          responsibilities: 'Fullstack',
          source: 'Private (Company Privacy Policy)',
          description:
            "Learn about the timekeeping process from the company's system. Develop sample download files to upload to the system. Build functions to calculate employee check-in and check-out times. Develop database and user interface with search and edit function of each person's data by working day. Implement folder trees to classify employees (maternity, leave,...), tools to export data to Excel for reporting, and create dashboards to visualize data.",
        },
      ],
    },
  },
} as const;
