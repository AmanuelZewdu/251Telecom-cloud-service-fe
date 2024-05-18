import VMImage from "../images/VMImage.webp";
import objectStorage from "../images/objectStorage.webp";
import arrayStorage from "../images/arrayStorage.webp";

export const services = [
  {
    id: 1,
    image: VMImage,
    serviceName: "Virtual Machine",
    description:
      "Experience seamless cloud computing with our virtual machine service, offering scalable and flexible solutions tailored to your needs. Harness the power of virtualization to optimize your workflow and boost productivity.",
    path: "/virtual-machine",
  },
  {
    id: 2,
    image: objectStorage,
    serviceName: "Object storage",
    description:
      "Store, access, and manage your data effortlessly with our reliable object storage solution. Enjoy high durability, low latency, and scalability, ensuring your critical information is always available when you need it most.",
    path: "/object-storage",
  },
  {
    id: 3,
    image: arrayStorage,
    serviceName: "Array storage",
    description:
      "Maximize efficiency and performance with our array storage service, designed to handle vast amounts of data with ease. Our array storage solution provides unmatched reliability, reselience and speed for your storage needs.",
    path: "/array-storage",
  },
];

export const vmDescription =
  "Virtual machines represent a cornerstone of modern computinginfrastructure, offering unparalleled flexibility and scalability for a diverse range of applications. Our virtual machine service provides users with the ability to deploy and manage virtualized computing environments effortlessly. Whether you're a small business or a large enterprise, virtual machines empower you to run multiple operating systems and applications on a single physical server, optimizing resource utilization and reducing infrastructure costs. Enjoy seamless migration, robust security features, and reliable performance as you leverage the power of virtualization to streamline your operations and drive innovation. With our virtual machine service, you can confidently scale your computing resources to meet the evolving needs of your business, ensuring maximum efficiency and agility in today's dynamic digital landscape.";

export const obDescription =
  "Object storage is a groundbreaking approach to data storage that eliminates the limitations of traditional file systems by organizing data as discrete objects, each with its own unique identifier and metadata. This method enables seamless scalability, making it ideal for storing vast amounts of unstructured data such as multimedia files, backups, and archives. Its distributed architecture ensures high availability and durability, making it a reliable solution for mission-critical applications. Object storage's rich metadata capabilities also facilitate advanced data management tasks, empowering organizations to extract valuable insights and streamline workflows.";

export const FAQ = [
  {
    id: 0,
    question: "How can I troubleshoot connectivity or performance issues?",
    answer: [
      "Refer to our comprehensive troubleshooting guides and knowledge base for expert ssistance in diagnosing and resolving common issues.",
      "Reach out to our dedicated support team through email, phone, or the support portal for personalized assistance with any connectivity or performance challenges you encounter.",
    ],
  },
  {
    id: 1,
    question: "What performance tier should I choose for my workload?",
    answer: [
      "Begin by assessing your workload's performance requirements, taking into account factors like IOPS, throughput, and latency.",
      "Evaluate our storage performance tiers, such as SSD or HDD, to find the best fit for your workload.",
      "Keep budget considerations in mind while selecting the appropriate tier to ensure it aligns with your performance needs.",
    ],
  },
  {
    id: 2,
    question: "What security features are available to protect my data?",
    answer: [
      "Our platform offers robust security measures to safeguard your data, including encryption options for both data at rest and in transit.",
      "Utilize our access controls and role-based permissions within the User dashboard to manage user access securely and control permissions to storage resources.",
    ],
  },
  {
    id: 3,
    question:
      "How can I monitor the health and performance of your storage resources?",
    answer: [
      "Take advantage of our monitoring and reporting capabilities available within the management console.",
      "Track essential metrics such as storage usage, performance indicators, and potential issues through user-friendly dashboards and detailed reports.",
      "Configure alerts to receive timely notifications for any deviations from expected behavior, enabling proactive management of storage health and performance.",
    ],
  },
  // {
  //   id: 4,
  //   question:
  //     "What are the billing and pricing structures for Cloud 251 services?",
  //   answer: [
  //     "What are the billing and pricing structures for Cloud 251 services?",
  //   ],
  // },
];
