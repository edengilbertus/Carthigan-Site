export interface CourseWeek {
  week: string
  topics: string[]
}

export interface CourseMaterial {
  id: string
  title: string
  type: 'pdf' | 'video' | 'document' | 'slides' | 'code'
  size: string
  url: string
  week?: string
  uploadedAt: string
}

export interface Course {
  id: string
  title: string
  category: 'electrical' | 'mechanical' | 'computer' | 'software' | 'design' | 'writing' | 'music' | 'language' | 'creative-software'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  format: string
  price: number
  priceDisplay: string
  description: string
  outline: CourseWeek[]
  instructor: string
  rating: number
  students: number
  image: string
  tags: string[]
  featured?: boolean
  materials?: CourseMaterial[]
}

export const COURSES: Course[] = [
  // ELECTRICAL ENGINEERING COURSES
  {
    id: 'ee101',
    title: 'Circuit Analysis Fundamentals',
    category: 'electrical',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'Master basic electrical concepts, Ohm\'s law, Kirchhoff\'s laws, AC circuits, and power calculations.',
    outline: [
      { week: 'Week 1-2', topics: ['Basic electrical concepts', 'Ohm\'s law', 'Kirchhoff\'s laws'] },
      { week: 'Week 3-4', topics: ['Series and parallel circuits', 'voltage/current dividers'] },
      { week: 'Week 5-6', topics: ['Network theorems (Thevenin, Norton, Superposition)'] },
      { week: 'Week 7-8', topics: ['AC circuits', 'phasors', 'complex impedance'] },
      { week: 'Week 9-10', topics: ['Power calculations', 'power factor correction'] },
      { week: 'Week 11-12', topics: ['Resonance', 'filters', 'frequency response'] }
    ],
    instructor: 'Dr. Sarah Mukasa',
    rating: 4.8,
    students: 1247,
    image: '/images/courses/circuit-analysis.jpg',
    tags: ['Electronics', 'Circuit Analysis', 'Electrical Engineering'],
    featured: true
  },
  {
    id: 'ee102',
    title: 'Digital Electronics & Logic Design',
    category: 'electrical',
    level: 'Intermediate',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 350000,
    priceDisplay: 'UGX 350,000',
    description: 'Learn digital logic design, Boolean algebra, sequential circuits, and microprocessor basics.',
    outline: [
      { week: 'Week 1-2', topics: ['Number systems', 'Boolean algebra', 'logic gates'] },
      { week: 'Week 3-4', topics: ['Combinational logic circuits', 'multiplexers', 'decoders'] },
      { week: 'Week 5-6', topics: ['Sequential logic', 'flip-flops', 'counters'] },
      { week: 'Week 7-8', topics: ['Memory devices', 'registers', 'state machines'] },
      { week: 'Week 9-10', topics: ['Microprocessor basics', 'interfacing'] }
    ],
    instructor: 'Eng. Michael Ssemakula',
    rating: 4.7,
    students: 892,
    image: '/images/courses/digital-electronics.jpg',
    tags: ['Digital Logic', 'Boolean Algebra', 'Microprocessors']
  },
  {
    id: 'ee103',
    title: 'Power Systems Engineering',
    category: 'electrical',
    level: 'Advanced',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 450000,
    priceDisplay: 'UGX 450,000',
    description: 'Comprehensive power systems including generation, transmission, distribution, and renewable energy.',
    outline: [
      { week: 'Week 1-2', topics: ['Power generation principles', 'generators'] },
      { week: 'Week 3-4', topics: ['Transmission lines', 'power flow analysis'] },
      { week: 'Week 5-6', topics: ['Transformers', 'power distribution systems'] },
      { week: 'Week 7-8', topics: ['Motor control', 'drives', 'protection systems'] },
      { week: 'Week 9-10', topics: ['Power electronics', 'converters', 'inverters'] },
      { week: 'Week 11-12', topics: ['Renewable energy systems', 'grid integration'] },
      { week: 'Week 13-14', topics: ['Power quality', 'harmonics', 'safety codes'] }
    ],
    instructor: 'Dr. Grace Namukasa',
    rating: 4.9,
    students: 634,
    image: '/images/courses/power-systems.jpg',
    tags: ['Power Engineering', 'Renewable Energy', 'Grid Systems']
  },
  {
    id: 'ee104',
    title: 'Microcontroller Programming',
    category: 'electrical',
    level: 'Beginner',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'Arduino programming, sensors, communication protocols, and IoT integration projects.',
    outline: [
      { week: 'Week 1-2', topics: ['Arduino basics', 'IDE setup', 'basic programming'] },
      { week: 'Week 3-4', topics: ['Digital I/O', 'analog sensors', 'PWM'] },
      { week: 'Week 5-6', topics: ['Serial communication', 'displays', 'motors'] },
      { week: 'Week 7-8', topics: ['Advanced projects', 'IoT integration'] }
    ],
    instructor: 'Eng. David Mukiibi',
    rating: 4.8,
    students: 1456,
    image: '/images/courses/microcontroller.jpg',
    tags: ['Arduino', 'IoT', 'Embedded Systems'],
    featured: true,
    materials: [
      {
        id: 'ee104-mat-01',
        title: 'Arduino IDE Setup Guide',
        type: 'pdf',
        size: '2.5 MB',
        url: '/materials/ee104/arduino-ide-setup.pdf',
        week: 'Week 1-2',
        uploadedAt: '2024-01-15T10:30:00Z'
      },
      {
        id: 'ee104-mat-02',
        title: 'Programming Fundamentals Slides',
        type: 'slides',
        size: '8.2 MB',
        url: '/materials/ee104/programming-fundamentals.pptx',
        week: 'Week 1-2',
        uploadedAt: '2024-01-15T14:20:00Z'
      },
      {
        id: 'ee104-mat-03',
        title: 'Digital IO Examples Code',
        type: 'code',
        size: '125 KB',
        url: '/materials/ee104/digital-io-examples.zip',
        week: 'Week 3-4',
        uploadedAt: '2024-01-22T09:15:00Z'
      },
      {
        id: 'ee104-mat-04',
        title: 'Sensor Integration Guide',
        type: 'pdf',
        size: '4.1 MB',
        url: '/materials/ee104/sensor-integration-guide.pdf',
        week: 'Week 3-4',
        uploadedAt: '2024-01-22T16:45:00Z'
      },
      {
        id: 'ee104-mat-05',
        title: 'Serial Communication Tutorial',
        type: 'video',
        size: '156 MB',
        url: '/materials/ee104/serial-communication-tutorial.mp4',
        week: 'Week 5-6',
        uploadedAt: '2024-01-29T11:30:00Z'
      },
      {
        id: 'ee104-mat-06',
        title: 'IoT Project Templates',
        type: 'code',
        size: '2.8 MB',
        url: '/materials/ee104/iot-project-templates.zip',
        week: 'Week 7-8',
        uploadedAt: '2024-02-05T13:20:00Z'
      }
    ]
  },
  {
    id: 'ee105',
    title: 'Signal Processing & Communications',
    category: 'electrical',
    level: 'Advanced',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'Digital signal processing, filter design, communication systems, and wireless technologies.',
    outline: [
      { week: 'Week 1-2', topics: ['Analog signal processing', 'amplifiers', 'filters'] },
      { week: 'Week 3-4', topics: ['Digital signal processing', 'sampling', 'quantization'] },
      { week: 'Week 5-6', topics: ['Fourier transforms', 'frequency domain analysis'] },
      { week: 'Week 7-8', topics: ['Filter design', 'FIR and IIR filters'] },
      { week: 'Week 9-10', topics: ['Communication systems', 'modulation techniques'] },
      { week: 'Week 11-12', topics: ['Wireless communications', 'antenna basics'] }
    ],
    instructor: 'Dr. James Kiwanuka',
    rating: 4.7,
    students: 523,
    image: '/images/courses/signal-processing.jpg',
    tags: ['DSP', 'Communications', 'Wireless']
  },
  {
    id: 'ee106',
    title: 'FPGA Programming (Verilog/VHDL)',
    category: 'electrical',
    level: 'Advanced',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'FPGA architecture, Verilog HDL, synthesis, timing analysis, and advanced digital design.',
    outline: [
      { week: 'Week 1-2', topics: ['FPGA architecture', 'development tools'] },
      { week: 'Week 3-4', topics: ['Verilog HDL basics', 'syntax', 'data types'] },
      { week: 'Week 5-6', topics: ['Combinational and sequential logic design'] },
      { week: 'Week 7-8', topics: ['Testbenches', 'simulation', 'debugging'] },
      { week: 'Week 9-10', topics: ['Advanced topics', 'synthesis', 'timing analysis'] }
    ],
    instructor: 'Dr. Patricia Nalwanga',
    rating: 4.9,
    students: 287,
    image: '/images/courses/fpga.jpg',
    tags: ['FPGA', 'Verilog', 'Digital Design']
  },

  // MECHANICAL ENGINEERING COURSES
  {
    id: 'me101',
    title: 'Thermodynamics & Heat Transfer',
    category: 'mechanical',
    level: 'Intermediate',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Laws of thermodynamics, heat transfer modes, refrigeration cycles, and heat exchanger design.',
    outline: [
      { week: 'Week 1-2', topics: ['First law of thermodynamics', 'energy balance'] },
      { week: 'Week 3-4', topics: ['Second law', 'entropy', 'heat engines'] },
      { week: 'Week 5-6', topics: ['Refrigeration cycles', 'heat pumps'] },
      { week: 'Week 7-8', topics: ['Heat transfer modes', 'conduction analysis'] },
      { week: 'Week 9-10', topics: ['Convection', 'forced and natural convection'] },
      { week: 'Week 11-12', topics: ['Radiation', 'heat exchanger design'] }
    ],
    instructor: 'Dr. Robert Kiggundu',
    rating: 4.8,
    students: 756,
    image: '/images/courses/thermodynamics.jpg',
    tags: ['Thermodynamics', 'Heat Transfer', 'Energy Systems']
  },
  {
    id: 'me102',
    title: 'Fluid Mechanics',
    category: 'mechanical',
    level: 'Intermediate',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'Fluid properties, flow analysis, Bernoulli\'s equation, pipe flow, and pump systems.',
    outline: [
      { week: 'Week 1-2', topics: ['Fluid properties', 'pressure', 'hydrostatics'] },
      { week: 'Week 3-4', topics: ['Fluid kinematics', 'continuity equation'] },
      { week: 'Week 5-6', topics: ['Bernoulli\'s equation', 'energy equation'] },
      { week: 'Week 7-8', topics: ['Pipe flow', 'friction losses', 'pump systems'] },
      { week: 'Week 9-10', topics: ['Open channel flow', 'aerodynamics basics'] }
    ],
    instructor: 'Eng. Mary Namusoke',
    rating: 4.6,
    students: 543,
    image: '/images/courses/fluid-mechanics.jpg',
    tags: ['Fluid Dynamics', 'Pumps', 'Hydraulics']
  },
  {
    id: 'me103',
    title: 'Mechanics of Materials',
    category: 'mechanical',
    level: 'Intermediate',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 450000,
    priceDisplay: 'UGX 450,000',
    description: 'Stress and strain analysis, material properties, beam bending, and finite element introduction.',
    outline: [
      { week: 'Week 1-2', topics: ['Stress and strain concepts', 'material properties'] },
      { week: 'Week 3-4', topics: ['Axial loading', 'torsion of shafts'] },
      { week: 'Week 5-6', topics: ['Bending of beams', 'shear and moment diagrams'] },
      { week: 'Week 7-8', topics: ['Combined loading', 'Mohr\'s circle'] },
      { week: 'Week 9-10', topics: ['Column buckling', 'fatigue analysis'] },
      { week: 'Week 11-12', topics: ['Finite element analysis introduction'] }
    ],
    instructor: 'Dr. Emmanuel Kawooya',
    rating: 4.7,
    students: 621,
    image: '/images/courses/mechanics-materials.jpg',
    tags: ['Structural Analysis', 'Material Science', 'FEA']
  },
  {
    id: 'me104',
    title: 'Manufacturing Processes',
    category: 'mechanical',
    level: 'Beginner',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 350000,
    priceDisplay: 'UGX 350,000',
    description: 'Machining, casting, welding, quality control, and modern 3D printing technologies.',
    outline: [
      { week: 'Week 1-2', topics: ['Machining processes', 'turning', 'milling'] },
      { week: 'Week 3-4', topics: ['Casting', 'forging', 'forming processes'] },
      { week: 'Week 5-6', topics: ['Welding', 'joining techniques'] },
      { week: 'Week 7-8', topics: ['Quality control', 'metrology', '3D printing'] }
    ],
    instructor: 'Eng. Samuel Mugisha',
    rating: 4.5,
    students: 789,
    image: '/images/courses/manufacturing.jpg',
    tags: ['Manufacturing', '3D Printing', 'Quality Control']
  },
  {
    id: 'me105',
    title: 'Machine Design & CAD',
    category: 'mechanical',
    level: 'Intermediate',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 450000,
    priceDisplay: 'UGX 450,000',
    description: 'Machine design principles, SolidWorks CAD, 3D modeling, and stress analysis.',
    outline: [
      { week: 'Week 1-2', topics: ['Machine design principles', 'factor of safety'] },
      { week: 'Week 3-4', topics: ['Fasteners', 'springs', 'power transmission'] },
      { week: 'Week 5-6', topics: ['Bearings', 'shafts', 'couplings'] },
      { week: 'Week 7-8', topics: ['Gears', 'gear trains', 'mechanical advantage'] },
      { week: 'Week 9-10', topics: ['CAD software introduction (SolidWorks)'] },
      { week: 'Week 11-12', topics: ['3D modeling', 'assemblies', 'drawings'] },
      { week: 'Week 13-14', topics: ['Simulation', 'stress analysis', 'optimization'] }
    ],
    instructor: 'Eng. Joyce Nabirye',
    rating: 4.8,
    students: 456,
    image: '/images/courses/machine-design.jpg',
    tags: ['CAD', 'SolidWorks', 'Machine Design'],
    featured: true
  },
  {
    id: 'me106',
    title: 'HVAC Systems Design',
    category: 'mechanical',
    level: 'Advanced',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'HVAC fundamentals, load calculations, air distribution, and energy efficiency.',
    outline: [
      { week: 'Week 1-2', topics: ['HVAC fundamentals', 'psychrometrics'] },
      { week: 'Week 3-4', topics: ['Load calculations', 'heating and cooling'] },
      { week: 'Week 5-6', topics: ['Air distribution systems', 'ductwork design'] },
      { week: 'Week 7-8', topics: ['Refrigeration systems', 'heat pumps'] },
      { week: 'Week 9-10', topics: ['Controls', 'energy efficiency', 'sustainability'] }
    ],
    instructor: 'Dr. Peter Byamukama',
    rating: 4.6,
    students: 234,
    image: '/images/courses/hvac.jpg',
    tags: ['HVAC', 'Energy Efficiency', 'Building Systems']
  },

  // COMPUTER ENGINEERING COURSES
  {
    id: 'ce101',
    title: 'Computer Architecture',
    category: 'computer',
    level: 'Intermediate',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Computer organization, CPU architecture, memory hierarchy, and parallel processing.',
    outline: [
      { week: 'Week 1-2', topics: ['Computer organization', 'CPU architecture'] },
      { week: 'Week 3-4', topics: ['Instruction sets', 'assembly language'] },
      { week: 'Week 5-6', topics: ['Memory hierarchy', 'cache design'] },
      { week: 'Week 7-8', topics: ['Input/output systems', 'interrupts'] },
      { week: 'Week 9-10', topics: ['Pipelining', 'superscalar processors'] },
      { week: 'Week 11-12', topics: ['Multicore systems', 'parallel processing'] }
    ],
    instructor: 'Dr. Francis Wasswa',
    rating: 4.7,
    students: 445,
    image: '/images/courses/computer-architecture.jpg',
    tags: ['Computer Architecture', 'CPU Design', 'Assembly'],
    featured: true
  },
  {
    id: 'ce102',
    title: 'Embedded Systems Design',
    category: 'computer',
    level: 'Advanced',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 450000,
    priceDisplay: 'UGX 450,000',
    description: 'Embedded system basics, real-time operating systems, and IoT applications.',
    outline: [
      { week: 'Week 1-2', topics: ['Embedded system basics', 'microcontrollers'] },
      { week: 'Week 3-4', topics: ['Real-time operating systems', 'scheduling'] },
      { week: 'Week 5-6', topics: ['Hardware-software co-design'] },
      { week: 'Week 7-8', topics: ['Communication protocols', 'networking'] },
      { week: 'Week 9-10', topics: ['IoT applications', 'system integration'] }
    ],
    instructor: 'Eng. Rose Nakimera',
    rating: 4.6,
    students: 332,
    image: '/images/courses/embedded-systems.jpg',
    tags: ['Embedded Systems', 'RTOS', 'IoT']
  },
  {
    id: 'ce103',
    title: 'VLSI Design',
    category: 'computer',
    level: 'Advanced',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'CMOS technology, VLSI design flow, synthesis, and system-on-chip design.',
    outline: [
      { week: 'Week 1-2', topics: ['CMOS technology', 'device physics'] },
      { week: 'Week 3-4', topics: ['Logic design', 'gate-level design'] },
      { week: 'Week 5-6', topics: ['Verilog HDL', 'behavioral modeling'] },
      { week: 'Week 7-8', topics: ['Synthesis', 'place and route'] },
      { week: 'Week 9-10', topics: ['Timing analysis', 'power optimization'] },
      { week: 'Week 11-12', topics: ['Memory design', 'system-on-chip'] },
      { week: 'Week 13-14', topics: ['Testing', 'verification', 'design for test'] }
    ],
    instructor: 'Dr. Allan Kiconco',
    rating: 4.8,
    students: 198,
    image: '/images/courses/vlsi-design.jpg',
    tags: ['VLSI', 'Chip Design', 'CMOS']
  },
  {
    id: 'ce104',
    title: 'Digital Signal Processing',
    category: 'computer',
    level: 'Advanced',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 450000,
    priceDisplay: 'UGX 450,000',
    description: 'Discrete-time signals, Z-transform, digital filters, and DSP applications.',
    outline: [
      { week: 'Week 1-2', topics: ['Discrete-time signals and systems'] },
      { week: 'Week 3-4', topics: ['Z-transform', 'frequency domain analysis'] },
      { week: 'Week 5-6', topics: ['Digital filter design', 'FIR and IIR'] },
      { week: 'Week 7-8', topics: ['FFT algorithms', 'spectral analysis'] },
      { week: 'Week 9-10', topics: ['Multirate signal processing'] },
      { week: 'Week 11-12', topics: ['DSP applications', 'implementation'] }
    ],
    instructor: 'Dr. Christine Nabunya',
    rating: 4.5,
    students: 267,
    image: '/images/courses/dsp.jpg',
    tags: ['DSP', 'Digital Filters', 'Signal Processing']
  },
  {
    id: 'ce105',
    title: 'Computer Networks & Security',
    category: 'computer',
    level: 'Intermediate',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'Network fundamentals, TCP/IP, security, and wireless networks.',
    outline: [
      { week: 'Week 1-2', topics: ['Network fundamentals', 'OSI model'] },
      { week: 'Week 3-4', topics: ['TCP/IP protocol suite', 'routing'] },
      { week: 'Week 5-6', topics: ['Network security', 'cryptography'] },
      { week: 'Week 7-8', topics: ['Firewalls', 'intrusion detection'] },
      { week: 'Week 9-10', topics: ['Wireless networks', 'mobile computing'] },
      { week: 'Week 11-12', topics: ['Network management', 'troubleshooting'] }
    ],
    instructor: 'Dr. Henry Kayongo',
    rating: 4.6,
    students: 389,
    image: '/images/courses/networks-security.jpg',
    tags: ['Networking', 'Security', 'TCP/IP']
  },

  // SOFTWARE ENGINEERING COURSES  
  {
    id: 'se101',
    title: 'Programming Fundamentals (Python)',
    category: 'software',
    level: 'Beginner',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Python basics, control structures, functions, OOP, and best practices for beginners.',
    outline: [
      { week: 'Week 1-2', topics: ['Python basics', 'variables', 'data types', 'control structures'] },
      { week: 'Week 3-4', topics: ['Functions', 'modules', 'file handling'] },
      { week: 'Week 5-6', topics: ['Object-oriented programming', 'classes', 'inheritance'] },
      { week: 'Week 7-8', topics: ['Exception handling', 'debugging', 'best practices'] }
    ],
    instructor: 'Dr. Janet Nakato',
    rating: 4.9,
    students: 2156,
    image: '/images/courses/python.jpg',
    tags: ['Python', 'Programming', 'OOP'],
    featured: true
  },
  {
    id: 'se102',
    title: 'Data Structures & Algorithms',
    category: 'software',
    level: 'Intermediate',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'Arrays, trees, graphs, sorting algorithms, dynamic programming, and complexity analysis.',
    outline: [
      { week: 'Week 1-2', topics: ['Arrays', 'linked lists', 'stacks', 'queues'] },
      { week: 'Week 3-4', topics: ['Trees', 'binary search trees', 'heaps'] },
      { week: 'Week 5-6', topics: ['Hash tables', 'graphs', 'graph algorithms'] },
      { week: 'Week 7-8', topics: ['Sorting algorithms', 'searching algorithms'] },
      { week: 'Week 9-10', topics: ['Dynamic programming', 'greedy algorithms'] },
      { week: 'Week 11-12', topics: ['Algorithm analysis', 'complexity theory'] }
    ],
    instructor: 'Dr. Moses Okello',
    rating: 4.7,
    students: 987,
    image: '/images/courses/algorithms.jpg',
    tags: ['Algorithms', 'Data Structures', 'Problem Solving']
  },
  {
    id: 'se103',
    title: 'Web Development Full Stack',
    category: 'software',
    level: 'Intermediate',
    duration: '16 weeks (48 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'HTML5, CSS3, React.js, Node.js, databases, APIs, testing, and deployment.',
    outline: [
      { week: 'Week 1-2', topics: ['HTML5', 'CSS3', 'responsive design'] },
      { week: 'Week 3-4', topics: ['JavaScript fundamentals', 'DOM manipulation'] },
      { week: 'Week 5-6', topics: ['React.js', 'component-based architecture'] },
      { week: 'Week 7-8', topics: ['Node.js', 'Express.js', 'server-side development'] },
      { week: 'Week 9-10', topics: ['Database design', 'MongoDB', 'SQL'] },
      { week: 'Week 11-12', topics: ['RESTful APIs', 'authentication', 'security'] },
      { week: 'Week 13-14', topics: ['Testing', 'deployment', 'cloud services'] },
      { week: 'Week 15-16', topics: ['Final project', 'portfolio development'] }
    ],
    instructor: 'Eden Gilbert Kiseka',
    rating: 4.9,
    students: 1567,
    image: '/images/courses/web-development.jpg',
    tags: ['React', 'Node.js', 'Full Stack'],
    featured: true
  },
  {
    id: 'se104',
    title: 'Machine Learning & AI',
    category: 'software',
    level: 'Advanced',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'ML fundamentals, neural networks, computer vision, NLP, model deployment, and AI ethics.',
    outline: [
      { week: 'Week 1-2', topics: ['ML fundamentals', 'statistics', 'Python libraries'] },
      { week: 'Week 3-4', topics: ['Supervised learning', 'regression', 'classification'] },
      { week: 'Week 5-6', topics: ['Unsupervised learning', 'clustering', 'dimensionality reduction'] },
      { week: 'Week 7-8', topics: ['Neural networks', 'deep learning basics'] },
      { week: 'Week 9-10', topics: ['Computer vision', 'image processing'] },
      { week: 'Week 11-12', topics: ['Natural language processing', 'text analysis'] },
      { week: 'Week 13-14', topics: ['Model deployment', 'MLOps', 'ethics in AI'] }
    ],
    instructor: 'Dr. Patricia Achan',
    rating: 4.8,
    students: 789,
    image: '/images/courses/machine-learning.jpg',
    tags: ['Machine Learning', 'AI', 'Deep Learning'],
    featured: true
  },
  {
    id: 'se105',
    title: 'Mobile App Development',
    category: 'software',
    level: 'Intermediate',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'React Native development, navigation, state management, API integration, and app deployment.',
    outline: [
      { week: 'Week 1-2', topics: ['Mobile development overview', 'React Native setup'] },
      { week: 'Week 3-4', topics: ['Navigation', 'user interface design'] },
      { week: 'Week 5-6', topics: ['State management', 'data handling'] },
      { week: 'Week 7-8', topics: ['API integration', 'networking'] },
      { week: 'Week 9-10', topics: ['Device features', 'camera', 'location services'] },
      { week: 'Week 11-12', topics: ['Testing', 'debugging', 'app store deployment'] }
    ],
    instructor: 'Eng. Rebecca Namuli',
    rating: 4.6,
    students: 654,
    image: '/images/courses/mobile-dev.jpg',
    tags: ['React Native', 'Mobile Apps', 'iOS/Android']
  },
  {
    id: 'se106',
    title: 'Advanced Programming (Java)',
    category: 'software',
    level: 'Advanced',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 200000,
    priceDisplay: 'UGX 200,000',
    description: 'Java fundamentals, collections, multithreading, Spring framework, and enterprise applications.',
    outline: [
      { week: 'Week 1-2', topics: ['Java fundamentals', 'OOP concepts'] },
      { week: 'Week 3-4', topics: ['Collections framework', 'generics'] },
      { week: 'Week 5-6', topics: ['Multithreading', 'concurrency'] },
      { week: 'Week 7-8', topics: ['Java frameworks (Spring, Hibernate)'] },
      { week: 'Week 9-10', topics: ['Enterprise applications', 'web services'] }
    ],
    instructor: 'Dr. Andrew Kaggwa',
    rating: 4.5,
    students: 432,
    image: '/images/courses/java.jpg',
    tags: ['Java', 'Spring Framework', 'Enterprise']
  },
  {
    id: 'se107',
    title: 'Database Systems & Design',
    category: 'software',
    level: 'Intermediate',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Database fundamentals, SQL, normalization, stored procedures, and NoSQL databases.',
    outline: [
      { week: 'Week 1-2', topics: ['Database fundamentals', 'relational model'] },
      { week: 'Week 3-4', topics: ['SQL queries', 'joins', 'subqueries'] },
      { week: 'Week 5-6', topics: ['Database design', 'normalization'] },
      { week: 'Week 7-8', topics: ['Stored procedures', 'triggers', 'views'] },
      { week: 'Week 9-10', topics: ['NoSQL databases', 'big data concepts'] }
    ],
    instructor: 'Eng. Grace Kyomuhendo',
    rating: 4.4,
    students: 567,
    image: '/images/courses/database.jpg',
    tags: ['SQL', 'Database Design', 'NoSQL']
  },
  {
    id: 'se108',
    title: 'Cloud Computing & DevOps',
    category: 'software',
    level: 'Advanced',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'AWS basics, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code.',
    outline: [
      { week: 'Week 1-2', topics: ['Cloud computing fundamentals', 'AWS basics'] },
      { week: 'Week 3-4', topics: ['Virtual machines', 'containers', 'Docker'] },
      { week: 'Week 5-6', topics: ['Kubernetes', 'container orchestration'] },
      { week: 'Week 7-8', topics: ['CI/CD pipelines', 'automation'] },
      { week: 'Week 9-10', topics: ['Infrastructure as Code', 'monitoring'] },
      { week: 'Week 11-12', topics: ['Security', 'compliance', 'cost optimization'] }
    ],
    instructor: 'Dr. Kevin Sserwadda',
    rating: 4.7,
    students: 345,
    image: '/images/courses/cloud-devops.jpg',
    tags: ['AWS', 'Docker', 'DevOps']
  },
  {
    id: 'se109',
    title: 'Cybersecurity Fundamentals',
    category: 'software',
    level: 'Intermediate',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Security principles, cryptography, network security, web security, and incident response.',
    outline: [
      { week: 'Week 1-2', topics: ['Security principles', 'threat landscape'] },
      { week: 'Week 3-4', topics: ['Cryptography', 'encryption', 'digital signatures'] },
      { week: 'Week 5-6', topics: ['Network security', 'firewalls', 'VPNs'] },
      { week: 'Week 7-8', topics: ['Web application security', 'OWASP'] },
      { week: 'Week 9-10', topics: ['Incident response', 'forensics', 'compliance'] }
    ],
    instructor: 'Dr. Susan Nalwoga',
    rating: 4.6,
    students: 678,
    image: '/images/courses/cybersecurity.jpg',
    tags: ['Cybersecurity', 'Cryptography', 'Network Security']
  },

  // UI/UX DESIGN COURSES
  {
    id: 'ux101',
    title: 'User Experience Design Fundamentals',
    category: 'design',
    level: 'Beginner',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 350000,
    priceDisplay: 'UGX 350,000',
    description: 'UX principles, user research, personas, wireframing, prototyping, and usability testing.',
    outline: [
      { week: 'Week 1-2', topics: ['UX principles', 'user-centered design process'] },
      { week: 'Week 3-4', topics: ['User research', 'personas', 'user journey mapping'] },
      { week: 'Week 5-6', topics: ['Information architecture', 'wireframing'] },
      { week: 'Week 7-8', topics: ['Prototyping', 'usability testing'] },
      { week: 'Week 9-10', topics: ['Accessibility', 'inclusive design', 'portfolio development'] }
    ],
    instructor: 'Grace Namusoke',
    rating: 4.8,
    students: 567,
    image: '/images/courses/ux-design.jpg',
    tags: ['UX Design', 'User Research', 'Prototyping'],
    featured: true
  },
  {
    id: 'ux102',
    title: 'User Interface Design',
    category: 'design',
    level: 'Beginner',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 350000,
    priceDisplay: 'UGX 350,000',
    description: 'Design principles, color theory, typography, layout, and responsive design.',
    outline: [
      { week: 'Week 1-2', topics: ['Design principles', 'color theory', 'typography'] },
      { week: 'Week 3-4', topics: ['Layout', 'grid systems', 'visual hierarchy'] },
      { week: 'Week 5-6', topics: ['Design systems', 'component libraries'] },
      { week: 'Week 7-8', topics: ['Responsive design', 'mobile-first approach'] }
    ],
    instructor: 'Eng. Diana Kigozi',
    rating: 4.7,
    students: 423,
    image: '/images/courses/ui-design.jpg',
    tags: ['UI Design', 'Visual Design', 'Typography']
  },
  {
    id: 'ux103',
    title: 'Advanced Prototyping & Tools',
    category: 'design',
    level: 'Intermediate',
    duration: '6 weeks (18 hours)',
    format: '3 hours/week',
    price: 250000,
    priceDisplay: 'UGX 250,000',
    description: 'Figma mastery, interactive prototyping, micro-interactions, and developer collaboration.',
    outline: [
      { week: 'Week 1-2', topics: ['Figma mastery', 'advanced features'] },
      { week: 'Week 3-4', topics: ['Interactive prototyping', 'micro-interactions'] },
      { week: 'Week 5-6', topics: ['Design handoff', 'developer collaboration'] }
    ],
    instructor: 'James Okwi',
    rating: 4.6,
    students: 289,
    image: '/images/courses/prototyping.jpg',
    tags: ['Figma', 'Prototyping', 'Design Tools']
  },
  {
    id: 'ux104',
    title: 'Design Research & Strategy',
    category: 'design',
    level: 'Advanced',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 200000,
    priceDisplay: 'UGX 200,000',
    description: 'Research methodologies, usability testing, data analysis, and design strategy.',
    outline: [
      { week: 'Week 1-2', topics: ['Research methodologies', 'quantitative vs qualitative'] },
      { week: 'Week 3-4', topics: ['Interviews', 'surveys', 'usability testing'] },
      { week: 'Week 5-6', topics: ['Data analysis', 'insights', 'recommendations'] },
      { week: 'Week 7-8', topics: ['Design strategy', 'business alignment'] }
    ],
    instructor: 'Dr. Martha Nambi',
    rating: 4.5,
    students: 234,
    image: '/images/courses/design-research.jpg',
    tags: ['Design Research', 'Strategy', 'User Testing']
  },
  {
    id: 'ux105',
    title: 'Mobile UX Design',
    category: 'design',
    level: 'Intermediate',
    duration: '6 weeks (18 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Mobile design principles, touch interfaces, gestures, and app store optimization.',
    outline: [
      { week: 'Week 1-2', topics: ['Mobile design principles', 'iOS vs Android'] },
      { week: 'Week 3-4', topics: ['Touch interfaces', 'gestures', 'navigation'] },
      { week: 'Week 5-6', topics: ['App store optimization', 'mobile analytics'] }
    ],
    instructor: 'Eng. Peter Ssali',
    rating: 4.4,
    students: 345,
    image: '/images/courses/mobile-ux.jpg',
    tags: ['Mobile UX', 'iOS', 'Android']
  },

  // LANGUAGE COURSES
  {
    id: 'en101',
    title: 'English Beginner',
    category: 'language',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Basic greetings, present tense, vocabulary, simple conversations, and travel English.',
    outline: [
      { week: 'Week 1-2', topics: ['Basic greetings', 'introductions', 'alphabet'] },
      { week: 'Week 3-4', topics: ['Present tense', 'basic vocabulary (family, numbers)'] },
      { week: 'Week 5-6', topics: ['Simple questions', 'daily routines'] },
      { week: 'Week 7-8', topics: ['Past tense', 'describing experiences'] },
      { week: 'Week 9-10', topics: ['Future tense', 'making plans'] },
      { week: 'Week 11-12', topics: ['Basic conversation', 'travel English'] }
    ],
    instructor: 'Dr. Janet Nakato',
    rating: 4.8,
    students: 1234,
    image: '/images/courses/english.jpg',
    tags: ['English', 'Language Learning', 'Communication']
  },
  {
    id: 'en102',
    title: 'English Intermediate',
    category: 'language',
    level: 'Intermediate',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 400000,
    priceDisplay: 'UGX 400,000',
    description: 'Complex sentence structures, business English, academic writing, and presentation skills.',
    outline: [
      { week: 'Week 1-2', topics: ['Complex sentence structures', 'conjunctions'] },
      { week: 'Week 3-4', topics: ['Conditional sentences', 'hypotheticals'] },
      { week: 'Week 5-6', topics: ['Passive voice', 'reported speech'] },
      { week: 'Week 7-8', topics: ['Business English', 'formal communication'] },
      { week: 'Week 9-10', topics: ['Academic writing', 'essay structure'] },
      { week: 'Week 11-12', topics: ['Idiomatic expressions', 'cultural context'] },
      { week: 'Week 13-14', topics: ['Presentation skills', 'public speaking'] }
    ],
    instructor: 'Prof. Sarah Wilson',
    rating: 4.7,
    students: 987,
    image: '/images/courses/english-intermediate.jpg',
    tags: ['English', 'Business English', 'Academic Writing']
  },
  {
    id: 'fr101',
    title: 'French Beginner',
    category: 'language',
    level: 'Beginner',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 350000,
    priceDisplay: 'UGX 350,000',
    description: 'French alphabet, pronunciation, basic vocabulary, present tense, and travel French.',
    outline: [
      { week: 'Week 1-2', topics: ['French alphabet', 'pronunciation', 'basic greetings'] },
      { week: 'Week 3-4', topics: ['Articles', 'gender', 'basic vocabulary'] },
      { week: 'Week 5-6', topics: ['Present tense verbs', 'être and avoir'] },
      { week: 'Week 7-8', topics: ['Numbers', 'time', 'dates', 'weather'] },
      { week: 'Week 9-10', topics: ['Family', 'descriptions', 'adjectives'] },
      { week: 'Week 11-12', topics: ['Food', 'shopping', 'directions'] },
      { week: 'Week 13-14', topics: ['Travel', 'hotels', 'transportation'] }
    ],
    instructor: 'Prof. Marie Dubois',
    rating: 4.7,
    students: 523,
    image: '/images/courses/french.jpg',
    tags: ['French', 'Language Learning', 'Culture']
  },
  {
    id: 'sp101',
    title: 'Spanish Beginner',
    category: 'language',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Spanish alphabet, pronunciation, basic vocabulary, and travel conversations.',
    outline: [
      { week: 'Week 1-2', topics: ['Spanish alphabet', 'pronunciation', 'greetings'] },
      { week: 'Week 3-4', topics: ['Articles', 'gender', 'basic vocabulary'] },
      { week: 'Week 5-6', topics: ['Present tense', 'ser vs estar'] },
      { week: 'Week 7-8', topics: ['Numbers', 'time', 'family vocabulary'] },
      { week: 'Week 9-10', topics: ['Food', 'restaurants', 'shopping'] },
      { week: 'Week 11-12', topics: ['Travel', 'directions', 'basic conversations'] }
    ],
    instructor: 'Prof. Carlos Martinez',
    rating: 4.6,
    students: 456,
    image: '/images/courses/spanish.jpg',
    tags: ['Spanish', 'Language Learning', 'Travel']
  },

  // CREATIVE WRITING COURSES
  {
    id: 'cw101',
    title: 'Fiction Writing Fundamentals',
    category: 'writing',
    level: 'Beginner',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 250000,
    priceDisplay: 'UGX 250,000',
    description: 'Story structure, character development, dialogue, and creative writing techniques.',
    outline: [
      { week: 'Week 1-2', topics: ['Story structure', 'plot development'] },
      { week: 'Week 3-4', topics: ['Character development', 'dialogue'] },
      { week: 'Week 5-6', topics: ['Setting', 'world-building', 'description'] },
      { week: 'Week 7-8', topics: ['Point of view', 'narrative voice'] },
      { week: 'Week 9-10', topics: ['Revision', 'editing', 'workshop critique'] }
    ],
    instructor: 'Prof. Jane Lubega',
    rating: 4.7,
    students: 334,
    image: '/images/courses/fiction-writing.jpg',
    tags: ['Creative Writing', 'Fiction', 'Storytelling'],
    featured: true
  },
  {
    id: 'cw102',
    title: 'Non-Fiction & Essay Writing',
    category: 'writing',
    level: 'Intermediate',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 250000,
    priceDisplay: 'UGX 250,000',
    description: 'Essay structure, research methods, argumentation, and memoir writing.',
    outline: [
      { week: 'Week 1-2', topics: ['Essay structure', 'thesis development'] },
      { week: 'Week 3-4', topics: ['Research methods', 'citation styles'] },
      { week: 'Week 5-6', topics: ['Argumentation', 'persuasive writing'] },
      { week: 'Week 7-8', topics: ['Personal narrative', 'memoir writing'] }
    ],
    instructor: 'Dr. Timothy Wambuzi',
    rating: 4.5,
    students: 223,
    image: '/images/courses/essay-writing.jpg',
    tags: ['Non-Fiction', 'Essays', 'Research Writing']
  },
  {
    id: 'cw103',
    title: 'Content Creation & Copywriting',
    category: 'writing',
    level: 'Intermediate',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Content strategy, blog writing, social media content, and conversion copywriting.',
    outline: [
      { week: 'Week 1-2', topics: ['Content strategy', 'audience analysis'] },
      { week: 'Week 3-4', topics: ['Blog writing', 'SEO optimization'] },
      { week: 'Week 5-6', topics: ['Social media content', 'brand voice'] },
      { week: 'Week 7-8', topics: ['Sales copy', 'email marketing', 'conversion writing'] }
    ],
    instructor: 'Eng. Sarah Namirembe',
    rating: 4.8,
    students: 567,
    image: '/images/courses/copywriting.jpg',
    tags: ['Copywriting', 'Content Marketing', 'Digital Marketing']
  },
  {
    id: 'cw104',
    title: 'Poetry & Literary Arts',
    category: 'writing',
    level: 'Beginner',
    duration: '6 weeks (18 hours)',
    format: '3 hours/week',
    price: 250000,
    priceDisplay: 'UGX 250,000',
    description: 'Poetic forms, literary devices, imagery, and contemporary poetry.',
    outline: [
      { week: 'Week 1-2', topics: ['Poetic forms', 'meter', 'rhyme schemes'] },
      { week: 'Week 3-4', topics: ['Imagery', 'metaphor', 'literary devices'] },
      { week: 'Week 5-6', topics: ['Contemporary poetry', 'publication strategies'] }
    ],
    instructor: 'Prof. Agnes Nakanjako',
    rating: 4.6,
    students: 189,
    image: '/images/courses/poetry.jpg',
    tags: ['Poetry', 'Literary Arts', 'Creative Expression']
  },
  {
    id: 'cw105',
    title: 'Screenwriting & Script Writing',
    category: 'writing',
    level: 'Advanced',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 250000,
    priceDisplay: 'UGX 250,000',
    description: 'Screenplay format, story structure, character arcs, and visual storytelling.',
    outline: [
      { week: 'Week 1-2', topics: ['Screenplay format', 'industry standards'] },
      { week: 'Week 3-4', topics: ['Three-act structure', 'story beats'] },
      { week: 'Week 5-6', topics: ['Character arcs', 'dialogue writing'] },
      { week: 'Week 7-8', topics: ['Scene construction', 'visual storytelling'] },
      { week: 'Week 9-10', topics: ['Genre conventions', 'spec scripts'] },
      { week: 'Week 11-12', topics: ['Pitching', 'marketing', 'industry networking'] }
    ],
    instructor: 'Dr. Michael Ssebuufu',
    rating: 4.7,
    students: 156,
    image: '/images/courses/screenwriting.jpg',
    tags: ['Screenwriting', 'Film', 'Visual Storytelling']
  },
  {
    id: 'cw106',
    title: 'Technical Writing',
    category: 'writing',
    level: 'Intermediate',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 550000,
    priceDisplay: 'UGX 550,000',
    description: 'Technical documentation, user manuals, API documentation, and proposal writing.',
    outline: [
      { week: 'Week 1-2', topics: ['Technical writing principles', 'audience analysis'] },
      { week: 'Week 3-4', topics: ['Documentation', 'user manuals', 'procedures'] },
      { week: 'Week 5-6', topics: ['API documentation', 'software guides'] },
      { week: 'Week 7-8', topics: ['Proposal writing', 'grant applications'] }
    ],
    instructor: 'Eng. Patricia Nalubega',
    rating: 4.4,
    students: 278,
    image: '/images/courses/technical-writing.jpg',
    tags: ['Technical Writing', 'Documentation', 'Communication']
  },
  {
    id: 'cw107',
    title: 'Journalism & News Writing',
    category: 'writing',
    level: 'Intermediate',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 700000,
    priceDisplay: 'UGX 700,000',
    description: 'News writing, interviewing techniques, investigative journalism, and media ethics.',
    outline: [
      { week: 'Week 1-2', topics: ['News writing fundamentals', 'lead writing'] },
      { week: 'Week 3-4', topics: ['Interviewing techniques', 'source verification'] },
      { week: 'Week 5-6', topics: ['Feature writing', 'investigative journalism'] },
      { week: 'Week 7-8', topics: ['Digital journalism', 'multimedia storytelling'] },
      { week: 'Week 9-10', topics: ['Ethics', 'media law', 'publication strategies'] }
    ],
    instructor: 'Prof. Robert Ssekandi',
    rating: 4.6,
    students: 345,
    image: '/images/courses/journalism.jpg',
    tags: ['Journalism', 'News Writing', 'Media']
  },

  // MUSIC PRODUCTION COURSES
  {
    id: 'mp101',
    title: 'Audio Engineering Fundamentals',
    category: 'music',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 900000,
    priceDisplay: 'UGX 900,000',
    description: 'Audio theory, recording techniques, mixing, and mastering fundamentals.',
    outline: [
      { week: 'Week 1-2', topics: ['Audio theory', 'acoustics', 'studio setup'] },
      { week: 'Week 3-4', topics: ['Microphones', 'recording techniques'] },
      { week: 'Week 5-6', topics: ['Mixing console', 'signal flow'] },
      { week: 'Week 7-8', topics: ['EQ', 'compression', 'effects processing'] },
      { week: 'Week 9-10', topics: ['Mixing techniques', 'automation'] },
      { week: 'Week 11-12', topics: ['Mastering', 'final output', 'formats'] }
    ],
    instructor: 'Eng. Daniel Kayiwa',
    rating: 4.8,
    students: 267,
    image: '/images/courses/audio-engineering.jpg',
    tags: ['Audio Engineering', 'Recording', 'Mixing'],
    featured: true
  },
  {
    id: 'mp102',
    title: 'Digital Audio Workstation Mastery',
    category: 'music',
    level: 'Intermediate',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 750000,
    priceDisplay: 'UGX 750,000',
    description: 'Pro Tools, MIDI programming, virtual instruments, and advanced DAW techniques.',
    outline: [
      { week: 'Week 1-2', topics: ['DAW comparison', 'Pro Tools basics'] },
      { week: 'Week 3-4', topics: ['MIDI programming', 'virtual instruments'] },
      { week: 'Week 5-6', topics: ['Audio editing', 'time-stretching', 'pitch correction'] },
      { week: 'Week 7-8', topics: ['Mixing workflow', 'plugin management'] },
      { week: 'Week 9-10', topics: ['Advanced techniques', 'collaboration tools'] }
    ],
    instructor: 'Prof. Mary Akello',
    rating: 4.7,
    students: 198,
    image: '/images/courses/daw-mastery.jpg',
    tags: ['DAW', 'Pro Tools', 'MIDI']
  },
  {
    id: 'mp103',
    title: 'Music Theory & Composition',
    category: 'music',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 700000,
    priceDisplay: 'UGX 700,000',
    description: 'Music theory fundamentals, harmony, melody writing, and composition techniques.',
    outline: [
      { week: 'Week 1-2', topics: ['Scales', 'intervals', 'chord construction'] },
      { week: 'Week 3-4', topics: ['Harmonic progression', 'voice leading'] },
      { week: 'Week 5-6', topics: ['Melody writing', 'song structure'] },
      { week: 'Week 7-8', topics: ['Rhythm', 'time signatures', 'groove'] },
      { week: 'Week 9-10', topics: ['Arrangement', 'orchestration'] },
      { week: 'Week 11-12', topics: ['Genre-specific composition techniques'] }
    ],
    instructor: 'Dr. Joseph Ssekamate',
    rating: 4.6,
    students: 234,
    image: '/images/courses/music-theory.jpg',
    tags: ['Music Theory', 'Composition', 'Harmony']
  },
  {
    id: 'mp104',
    title: 'Electronic Music Production',
    category: 'music',
    level: 'Intermediate',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 650000,
    priceDisplay: 'UGX 650,000',
    description: 'Synthesis, drum programming, sound design, and electronic music genres.',
    outline: [
      { week: 'Week 1-2', topics: ['Synthesis basics', 'oscillators', 'filters'] },
      { week: 'Week 3-4', topics: ['Sampling', 'drum programming'] },
      { week: 'Week 5-6', topics: ['Electronic genres', 'sound design'] },
      { week: 'Week 7-8', topics: ['Live performance', 'DJ techniques'] }
    ],
    instructor: 'Eng. Brian Mutamba',
    rating: 4.5,
    students: 345,
    image: '/images/courses/electronic-music.jpg',
    tags: ['Electronic Music', 'Synthesis', 'Sound Design']
  },
  {
    id: 'mp105',
    title: 'Advanced Mixing & Mastering',
    category: 'music',
    level: 'Advanced',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 850000,
    priceDisplay: 'UGX 850,000',
    description: 'Advanced mixing techniques, mastering chain, and streaming optimization.',
    outline: [
      { week: 'Week 1-2', topics: ['Advanced mixing techniques', 'parallel processing'] },
      { week: 'Week 3-4', topics: ['Vocal production', 'automation'] },
      { week: 'Week 5-6', topics: ['Stem mixing', 'recalls', 'mix revisions'] },
      { week: 'Week 7-8', topics: ['Mastering chain', 'multiband processing'] },
      { week: 'Week 9-10', topics: ['Streaming optimization', 'delivery formats'] }
    ],
    instructor: 'Dr. Grace Nakabugo',
    rating: 4.8,
    students: 156,
    image: '/images/courses/mixing-mastering.jpg',
    tags: ['Mixing', 'Mastering', 'Audio Post-Production']
  },
  {
    id: 'mp106',
    title: 'Film Scoring & Sound Design',
    category: 'music',
    level: 'Advanced',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 1000000,
    priceDisplay: 'UGX 1,000,000',
    description: 'Film music composition, sound design, sync to picture, and industry standards.',
    outline: [
      { week: 'Week 1-2', topics: ['Film music history', 'scoring techniques'] },
      { week: 'Week 3-4', topics: ['Spotting', 'timing', 'sync to picture'] },
      { week: 'Week 5-6', topics: ['Orchestration for film', 'virtual instruments'] },
      { week: 'Week 7-8', topics: ['Sound design', 'foley', 'atmosphere'] },
      { week: 'Week 9-10', topics: ['Dialogue editing', 'ADR', 'mixing for picture'] },
      { week: 'Week 11-12', topics: ['Delivery formats', 'industry standards'] }
    ],
    instructor: 'Prof. Anthony Kiwanuka',
    rating: 4.7,
    students: 89,
    image: '/images/courses/film-scoring.jpg',
    tags: ['Film Scoring', 'Sound Design', 'Composition']
  },
  {
    id: 'mp107',
    title: 'Live Sound Engineering',
    category: 'music',
    level: 'Intermediate',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 700000,
    priceDisplay: 'UGX 700,000',
    description: 'Live sound fundamentals, PA systems, monitor mixing, and venue acoustics.',
    outline: [
      { week: 'Week 1-2', topics: ['Live sound fundamentals', 'PA systems'] },
      { week: 'Week 3-4', topics: ['Microphone placement', 'monitor mixing'] },
      { week: 'Week 5-6', topics: ['Digital consoles', 'wireless systems'] },
      { week: 'Week 7-8', topics: ['Troubleshooting', 'venue acoustics'] }
    ],
    instructor: 'Eng. Paul Ssemwogerere',
    rating: 4.4,
    students: 178,
    image: '/images/courses/live-sound.jpg',
    tags: ['Live Sound', 'PA Systems', 'Concert Audio']
  },

  // MORE LANGUAGE COURSES
  {
    id: 'en103',
    title: 'English Advanced',
    category: 'language',
    level: 'Advanced',
    duration: '16 weeks (48 hours)',
    format: '3 hours/week',
    price: 650000,
    priceDisplay: 'UGX 650,000',
    description: 'Advanced grammar, literary analysis, professional communication, and test preparation.',
    outline: [
      { week: 'Week 1-2', topics: ['Advanced grammar', 'complex structures'] },
      { week: 'Week 3-4', topics: ['Academic writing', 'research papers'] },
      { week: 'Week 5-6', topics: ['Literary analysis', 'critical thinking'] },
      { week: 'Week 7-8', topics: ['Professional communication', 'networking'] },
      { week: 'Week 9-10', topics: ['Debate and argumentation'] },
      { week: 'Week 11-12', topics: ['Creative writing', 'storytelling'] },
      { week: 'Week 13-14', topics: ['Test preparation (TOEFL/IELTS)'] },
      { week: 'Week 15-16', topics: ['Certification exam', 'portfolio review'] }
    ],
    instructor: 'Prof. Elizabeth Namugga',
    rating: 4.8,
    students: 345,
    image: '/images/courses/english-advanced.jpg',
    tags: ['English', 'Academic English', 'Professional Communication']
  },
  {
    id: 'en104',
    title: 'Business English Specialist',
    category: 'language',
    level: 'Intermediate',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 600000,
    priceDisplay: 'UGX 600,000',
    description: 'Business correspondence, meeting management, presentations, and international business.',
    outline: [
      { week: 'Week 1-2', topics: ['Business correspondence', 'emails'] },
      { week: 'Week 3-4', topics: ['Meeting management', 'negotiations'] },
      { week: 'Week 5-6', topics: ['Presentations', 'public speaking'] },
      { week: 'Week 7-8', topics: ['Financial English', 'reports'] },
      { week: 'Week 9-10', topics: ['International business', 'cultural awareness'] }
    ],
    instructor: 'Dr. Richard Kiwanuka',
    rating: 4.6,
    students: 234,
    image: '/images/courses/business-english.jpg',
    tags: ['Business English', 'Professional Skills', 'Communication']
  },
  {
    id: 'fr102',
    title: 'French Intermediate',
    category: 'language',
    level: 'Intermediate',
    duration: '16 weeks (48 hours)',
    format: '3 hours/week',
    price: 200000,
    priceDisplay: 'UGX 200,000',
    description: 'Past tenses, subjunctive mood, French culture, and DELF preparation.',
    outline: [
      { week: 'Week 1-2', topics: ['Past tenses', 'passé composé', 'imparfait'] },
      { week: 'Week 3-4', topics: ['Future tenses', 'conditional mood'] },
      { week: 'Week 5-6', topics: ['Subjunctive mood', 'complex expressions'] },
      { week: 'Week 7-8', topics: ['Formal vs informal communication'] },
      { week: 'Week 9-10', topics: ['French culture', 'literature introduction'] },
      { week: 'Week 11-12', topics: ['Business French', 'professional contexts'] },
      { week: 'Week 13-14', topics: ['French media', 'current events'] },
      { week: 'Week 15-16', topics: ['DELF preparation', 'certification exam'] }
    ],
    instructor: 'Prof. Sylvie Moreau',
    rating: 4.7,
    students: 156,
    image: '/images/courses/french-intermediate.jpg',
    tags: ['French', 'DELF', 'French Culture']
  },
  {
    id: 'it101',
    title: 'Italian Beginner',
    category: 'language',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Italian pronunciation, basic grammar, food culture, and travel Italian.',
    outline: [
      { week: 'Week 1-2', topics: ['Italian pronunciation', 'basic greetings'] },
      { week: 'Week 3-4', topics: ['Articles', 'gender', 'basic vocabulary'] },
      { week: 'Week 5-6', topics: ['Present tense', 'essere and avere'] },
      { week: 'Week 7-8', topics: ['Numbers', 'time', 'daily routines'] },
      { week: 'Week 9-10', topics: ['Food culture', 'dining', 'shopping'] },
      { week: 'Week 11-12', topics: ['Travel Italian', 'cultural immersion'] }
    ],
    instructor: 'Prof. Marco Rossi',
    rating: 4.5,
    students: 123,
    image: '/images/courses/italian.jpg',
    tags: ['Italian', 'Culture', 'Travel']
  },
  {
    id: 'he101',
    title: 'Modern Hebrew Beginner',
    category: 'language',
    level: 'Beginner',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Hebrew alphabet, vowels, basic vocabulary, and Israeli culture.',
    outline: [
      { week: 'Week 1-2', topics: ['Hebrew alphabet', 'vowels', 'pronunciation'] },
      { week: 'Week 3-4', topics: ['Basic vocabulary', 'greetings', 'introductions'] },
      { week: 'Week 5-6', topics: ['Present tense', 'basic sentence structure'] },
      { week: 'Week 7-8', topics: ['Numbers', 'time', 'calendar', 'holidays'] },
      { week: 'Week 9-10', topics: ['Family', 'daily life', 'Israeli culture'] },
      { week: 'Week 11-12', topics: ['Food', 'shopping', 'practical conversations'] },
      { week: 'Week 13-14', topics: ['Travel Hebrew', 'cultural immersion'] }
    ],
    instructor: 'Dr. Rachel Cohen',
    rating: 4.6,
    students: 87,
    image: '/images/courses/hebrew.jpg',
    tags: ['Hebrew', 'Israeli Culture', 'Middle Eastern Languages']
  },

  // CREATIVE SOFTWARE COURSES
  {
    id: 'ad101',
    title: 'Adobe Photoshop Complete',
    category: 'creative-software',
    level: 'Beginner',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 200000,
    priceDisplay: 'UGX 200,000',
    description: 'Photoshop interface, tools, layers, retouching, and digital painting.',
    outline: [
      { week: 'Week 1-2', topics: ['Interface', 'tools', 'layers', 'basic editing'] },
      { week: 'Week 3-4', topics: ['Selection tools', 'masking', 'compositing'] },
      { week: 'Week 5-6', topics: ['Color correction', 'adjustment layers'] },
      { week: 'Week 7-8', topics: ['Retouching', 'healing', 'content-aware tools'] },
      { week: 'Week 9-10', topics: ['Digital painting', 'effects', 'output optimization'] }
    ],
    instructor: 'Eng. Alice Namara',
    rating: 4.8,
    students: 456,
    image: '/images/courses/photoshop.jpg',
    tags: ['Photoshop', 'Photo Editing', 'Digital Art'],
    featured: true
  },
  {
    id: 'ad102',
    title: 'Adobe Illustrator Complete',
    category: 'creative-software',
    level: 'Intermediate',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 250000,
    priceDisplay: 'UGX 250,000',
    description: 'Vector graphics, logo design, typography, and brand identity creation.',
    outline: [
      { week: 'Week 1-2', topics: ['Interface', 'drawing tools', 'shapes', 'paths'] },
      { week: 'Week 3-4', topics: ['Typography', 'text effects', 'layout'] },
      { week: 'Week 5-6', topics: ['Color theory', 'gradients', 'patterns'] },
      { week: 'Week 7-8', topics: ['Logo design', 'branding', 'print preparation'] }
    ],
    instructor: 'Dr. Kevin Ssemaganda',
    rating: 4.7,
    students: 289,
    image: '/images/courses/illustrator.jpg',
    tags: ['Illustrator', 'Vector Graphics', 'Logo Design']
  },
  {
    id: 've101',
    title: 'Final Cut Pro Complete',
    category: 'creative-software',
    level: 'Intermediate',
    duration: '10 weeks (30 hours)',
    format: '3 hours/week',
    price: 250000,
    priceDisplay: 'UGX 250,000',
    description: 'Video editing, color grading, motion graphics, and professional video production.',
    outline: [
      { week: 'Week 1-2', topics: ['Interface', 'import', 'basic editing'] },
      { week: 'Week 3-4', topics: ['Advanced editing', 'multicam', 'audio'] },
      { week: 'Week 5-6', topics: ['Color correction', 'color grading'] },
      { week: 'Week 7-8', topics: ['Motion graphics', 'titles', 'effects'] },
      { week: 'Week 9-10', topics: ['Audio mixing', 'final output', 'delivery'] }
    ],
    instructor: 'Eng. Simon Mukasa',
    rating: 4.6,
    students: 167,
    image: '/images/courses/final-cut.jpg',
    tags: ['Video Editing', 'Final Cut Pro', 'Post-Production']
  },
  {
    id: 'dp101',
    title: 'Figma Complete',
    category: 'creative-software',
    level: 'Beginner',
    duration: '8 weeks (24 hours)',
    format: '3 hours/week',
    price: 350000,
    priceDisplay: 'UGX 350,000',
    description: 'UI/UX design, prototyping, design systems, and team collaboration in Figma.',
    outline: [
      { week: 'Week 1-2', topics: ['Interface', 'design basics', 'components'] },
      { week: 'Week 3-4', topics: ['Auto-layout', 'constraints', 'responsive design'] },
      { week: 'Week 5-6', topics: ['Prototyping', 'interactions', 'animations'] },
      { week: 'Week 7-8', topics: ['Design systems', 'collaboration', 'handoff'] }
    ],
    instructor: 'Grace Nakamya',
    rating: 4.8,
    students: 234,
    image: '/images/courses/figma-course.jpg',
    tags: ['Figma', 'UI Design', 'Prototyping'],
    featured: true
  },

  // LUGANDA LANGUAGE COURSES
  {
    id: 'lg101',
    title: 'Luganda Beginner',
    category: 'language',
    level: 'Beginner',
    duration: '12 weeks (36 hours)',
    format: '3 hours/week',
    price: 250000,
    priceDisplay: 'UGX 250,000',
    description: 'Luganda basics, Buganda culture, traditional greetings, and everyday conversations.',
    outline: [
      { week: 'Week 1-2', topics: ['Luganda pronunciation', 'traditional greetings', 'respect forms'] },
      { week: 'Week 3-4', topics: ['Noun classes', 'basic vocabulary', 'family terms'] },
      { week: 'Week 5-6', topics: ['Present tense', 'basic sentence structure'] },
      { week: 'Week 7-8', topics: ['Numbers', 'time', 'days of the week'] },
      { week: 'Week 9-10', topics: ['Food vocabulary', 'market conversations'] },
      { week: 'Week 11-12', topics: ['Buganda culture', 'traditional stories', 'proverbs'] }
    ],
    instructor: 'Ssebo John Kiggundu',
    rating: 4.8,
    students: 567,
    image: '/images/courses/luganda.jpg',
    tags: ['Luganda', 'Buganda Culture', 'African Languages'],
    featured: true
  },
  {
    id: 'lg102',
    title: 'Luganda Intermediate',
    category: 'language',
    level: 'Intermediate',
    duration: '14 weeks (42 hours)',
    format: '3 hours/week',
    price: 300000,
    priceDisplay: 'UGX 300,000',
    description: 'Advanced Luganda grammar, traditional ceremonies, business Luganda, and literature.',
    outline: [
      { week: 'Week 1-2', topics: ['Past and future tenses', 'complex verb forms'] },
      { week: 'Week 3-4', topics: ['Traditional ceremonies', 'cultural protocols'] },
      { week: 'Week 5-6', topics: ['Business Luganda', 'professional contexts'] },
      { week: 'Week 7-8', topics: ['Luganda literature', 'traditional poetry'] },
      { week: 'Week 9-10', topics: ['Formal speeches', 'traditional oratory'] },
      { week: 'Week 11-12', topics: ['Regional variations', 'dialects'] },
      { week: 'Week 13-14', topics: ['Cultural immersion', 'advanced conversations'] }
    ],
    instructor: 'Nnabakyala Sarah Namusoke',
    rating: 4.7,
    students: 234,
    image: '/images/courses/luganda-intermediate.jpg',
    tags: ['Luganda', 'Traditional Culture', 'Business']
  }
]

export const CATEGORIES = [
  { id: 'all', name: 'All Courses', icon: 'BookOpen', count: COURSES.length },
  { id: 'electrical', name: 'Electrical Engineering', icon: 'Zap', count: COURSES.filter(c => c.category === 'electrical').length },
  { id: 'mechanical', name: 'Mechanical Engineering', icon: 'Settings', count: COURSES.filter(c => c.category === 'mechanical').length },
  { id: 'computer', name: 'Computer Engineering', icon: 'Cpu', count: COURSES.filter(c => c.category === 'computer').length },
  { id: 'software', name: 'Software Engineering', icon: 'Code', count: COURSES.filter(c => c.category === 'software').length },
  { id: 'design', name: 'UI/UX Design', icon: 'Palette', count: COURSES.filter(c => c.category === 'design').length },
  { id: 'writing', name: 'Creative Writing', icon: 'PenTool', count: COURSES.filter(c => c.category === 'writing').length },
  { id: 'music', name: 'Music Production', icon: 'Music', count: COURSES.filter(c => c.category === 'music').length },
  { id: 'language', name: 'Languages', icon: 'Languages', count: COURSES.filter(c => c.category === 'language').length },
  { id: 'creative-software', name: 'Creative Software', icon: 'Layers', count: COURSES.filter(c => c.category === 'creative-software').length }
]
 