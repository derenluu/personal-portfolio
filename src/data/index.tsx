import avatarImage from '@/assets/images/avatar.png';

export const Data = {
  name: 'Deren Luu',
  fullName: 'Luu Uy Danh',
  job: 'Web Developer',
  avatar: avatarImage,
  social: {
    facebook: 'https://www.facebook.com/luu.uydanh/',
    github: 'https://github.com/derenluu',
    linked: 'https://www.linkedin.com/in/l%C6%B0u-uy-danh-082140277/',
  },
  contact: {
    phone: '(+84) 78 382 9068',
    email: 'luuuydanh123c@gmail.com',
    location: 'Binh Thanh District, HCM City',
    birthDay: 'December 21, 2000',
  },
  portfolio: {
    About_Me:
      'I choose to constantly seek opportunities to expand my horizons. I approach every challenge as a chance to learn and develop, driven by a desire to acquire new skills and insights. My passion for learning boosts my motivation to excel and embrace lifelong learning.',
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
          title: 'Internship in Intel Corporation',
          position: 'Intern Operator Helpdesk',
          time: '1st Quarter 2022',
          description: 'Monitor operation system of chips. Activity threading of chips. Investigate and take part in the process of making of chips.',
        },
        {
          title: 'Web Developer',
          position: 'Engineer 1',
          time: '12/2021 - Now',
          description:
            'Learn about production processes including various separate production processes from many departments. Process data from documents like Excel, PDF,... Choose suitable technologies to present the required information. Learn new technology and generate creative ideas to build a website.',
        },
      ],
    },
    Skills: {
      TechSkills: {
        Language: 'JavaScript, PHP (pure)',
        Database: 'PostgreSQL, MongoDB',
        Framework: 'NodeJS, NextJS, ReactJS',
        Other: 'Git, Postman',
      },
      SoftSkills: ['Fast Learner', 'Adaptability'],
      Knowledge: ['Python', 'Firebase', 'Postman', 'VMware workstation', 'Premiere', 'Arduino (IOT)'],
      Language: ['Vietnamese (Native)', 'English (Reading and understanding documents)'],
    },
    Project: {
      Private: [
        {
          title: 'KPI Dashboard',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'Chartjs', 'AmCharts', 'Kendojs', 'FileFond', 'Flatpickr'],
          source: 'Private (Company commitment)',
          description: [
            'Learn how to calculate various types of KPIs on the current system and apply calculations, build interfaces and databases.',
            'Build website tools to display data on the website and support exporting data to Excel file format for reporting.',
          ],
        },
        {
          title: 'Sample Shipping Tracking',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'Kendojs', 'FileFond', 'Flatpickr'],
          source: 'Private (Company commitment)',
          description: [
            'Learn about the sample transportation process and how to calculate KPIs for those in charge of sample transportation.',
            'Build database, user interface (search package, timeline tracking, ...) and function to export data to Excel file format for reporting.',
          ],
        },
        {
          title: 'Risk Assessment',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'Chartjs', 'AmCharts', 'Kendojs', 'FileFond', 'Flatpickr'],
          source: 'Private (Company commitment)',
          description: [
            "Learn about the process of trying on sample shoes and how to link with the company's IT system.",
            'Build database, user interface (search package, timeline tracking, image upload, ...), data export function to Excel file format for reporting and dashboard to display data display.',
          ],
        },
        {
          title: 'FMEA (Failure Mode and Effects Analysis)',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'Kendojs', 'FileFond'],
          source: 'Private (Company commitment)',
          description: [
            "Learn about other departments' processes.",
            'Build database, user interface (search package, image upload, data upload ...), data export function to Excel file format for reporting.',
          ],
        },
        {
          title: 'Change Management',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'Kendojs', 'Flatpickr'],
          source: 'Private (Company commitment)',
          description: [
            'Learn about the change management process.',
            'Build database, user interface (search for tickets, create new tickets, ...), employee hierarchical directory tree, signing tool, email sending feature (outlook) and data export function data into Excel file format for reporting.',
          ],
        },
        {
          title: 'DRAR (Defective Rate Analysis Report)',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'Kendojs', 'Flatpickr'],
          source: 'Private (Company commitment)',
          description: [
            'Learn about the material mold inspection process.',
            'Build database and user interface (package management, model search, upload images, fill in quantities, ...), employee hierarchical directory tree, function to export data to sample Excel file format from the supplier for reporting.',
          ],
        },
        {
          title: 'Attendance Report',
          tech: ['PHP', 'PostgreSQL', 'jQuery', 'Bootstrap', 'Kendojs', 'Flatpickr'],
          source: 'Private (Company commitment)',
          description: [
            "Learn about timekeeping from the company's system.",
            'Create a sample file to upload files to the system, build a function to calculate check-in and check-out times of employee to know how to calculate time, build a function to export data to Excel file format for reporting.',
          ],
        },
      ],
      Public: [
        {
          title: 'Personal Portfolio',
          tech: 'NextJS, Typescript, TailwindCSS',
          source: 'https://github.com/derenluu/my-portfolio',
          description: 'Personal portfolio',
        },
      ],
    },
    Achievements: {
      Certificates: ['Certificate of English at school (A2).', 'Certificate of Informatics at the school.', 'Certificate of IOT at school (8/10).'],
      Activities: [
        'Participating in the soccer club.',
        'Supporting to organize outdoor activities at school on November 20th.',
        'Organizing activities, games and rewards for new students.',
      ],
    },
  },
} as const;
