export const services = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/cloud-connection-abstract-concept-illustration_335657-3873.jpg?t=st=1709288253~exp=1709291853~hmac=ab41542d2428067bbc018ac3e75e724f7ddaf324ca5d52be87a31f4984f449ca&w=826",
    serviceName: "Virtual Machine",
    description:
      "Experience seamless cloud computing with our virtual machine service, offering scalable and flexible solutions tailored to your needs. Harness the power of virtualization to optimize your workflow and boost productivity.",
    path: "/virtual-machine",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg?t=st=1709291585~exp=1709295185~hmac=4e4a552f4f45d807f31358c91c838e95f431245fff7ccd3700aedc438d6071d7&w=826",
    serviceName: "Object storage",
    description:
      "Store, access, and manage your data effortlessly with our reliable object storage solution. Enjoy high durability, low latency, and unlimited scalability, ensuring your critical information is always available when you need it most.",
    path: "/object-storage",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-vector/cloud-information-storage-collocated-cloud-computing-data-synchronization-harmonization-available-accesssible-digital-connected-backup-vector-isolated-concept-metaphor-illustration_335657-2791.jpg?t=st=1709322547~exp=1709326147~hmac=e386d1b40db2724fcc6132be66d344f043709ba7f111870b28a35d47b1cee099&w=826",
    serviceName: "Array storage",
    description:
      "Maximize efficiency and performance with our array storage service, designed to handle vast amounts of data with ease. Our array storage solution provides unmatched reliability and speed for your storage needs.",
    path: "/array-storage",
  },
];

// vCPUS for product page
export const vCPUs = [
  { name: "1 vCPUs" },
  { name: "2 vCPUs" },
  { name: "4 vCPUs" },
  { name: "8 vCPUs" },
  { name: "12 vCPUs" },
  { name: "16 vCPUs" },
  { name: "24 vCPUs" },
  { name: "32 vCPUs" },
  { name: "48 vCPUs" },
  { name: "64 vCPUs" },
  { name: "96 vCPUs" },
];

// Memoru sizes for products page
export const memories = [
  { size: "2 GB" },
  { size: "4 GB" },
  { size: "8 GB" },
  { size: "16 GB" },
  { size: "24 GB" },
  { size: "32 GB" },
  { size: "48 GB" },
  { size: "64 GB" },
  { size: "96 GB" },
  { size: "128 GB" },
  { size: "256 GB" },
  { size: "384 GB" },
];

// Prodcts table
export const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];

export const rows = [
  { name: "s3.medium.2", vCPUs_memory: "1 vCPUs | 2 GB" },
  { name: "s3.medium.4", vCPUs_memory: "1 vCPUs | 4 GB" },
  { name: "s2.large.3", vCPUs_memory: "2 vCPUs | 4 GB" },
  { name: "s2.large.4", vCPUs_memory: "2 vCPUs | 8 GB" },
  { name: "s2.xlarge.2", vCPUs_memory: "4 vCPUs | 8 GB" },
  { name: "s2.xlarge.4", vCPUs_memory: "4 vCPUs| 16 GB" },
  { name: "s2.2xlarge.21", vCPUs_memory: "4 vCPUs | 16 GB" },
  { name: "s2.2xlarge.12", vCPUs_memory: "8 vCPUs | 16 GB" },
  { name: "s2.2xlarge.2", vCPUs_memory: "8 vCPUs | 32 GB" },
  { name: "s2.4xlarge.2", vCPUs_memory: "16 vCPUs | 32 GB" },
  { name: "s2.4xlarge.4", vCPUs_memory: "16 vCPUs | 64 GB" },
  { name: "s2.8xlarge.2", vCPUs_memory: "32 vCPUs | 64 GB" },
  { name: "s2.8xlarge.4", vCPUs_memory: "32 vCPUs | 128 GB" },
];
