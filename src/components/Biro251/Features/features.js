import {
  BusinessTwoTone,
  FolderTwoTone,
  LockTwoTone,
  PeopleTwoTone,
  PersonTwoTone,
  ShareTwoTone,
} from "@mui/icons-material";

export const features = [
  {
    title: "Secure Storage",

    description:
      "Get 3TB of storage with features like file recovery, password protection, and watermarking.",
    icon: (
      <div
        className={`w-fit text-rose-500 bg-purple-500/10 rounded-full p-2 flex justify-center items-center`}
      >
        <LockTwoTone size="large" />
      </div>
    ),
  },
  {
    title: "Seamless Sharing",
    description:
      "Easily share files, control access, and send large files without limits.",
    icon: (
      <div
        className={`w-fit text-lime-500 bg-purple-500/40 rounded-full p-2 flex justify-center items-center`}
      >
        <ShareTwoTone />
      </div>
    ),
  },
  {
    title: "Collaborate",
    description:
      "Organize data with advanced search, audit trails, and analytics.",
    icon: (
      <div
        className={`w-fit text-cyan-500 bg-purple-500/10 rounded-full p-2 flex justify-center items-center`}
      >
        <PeopleTwoTone />
      </div>
    ),
  },
  {
    title: "Data Management",
    description:
      "Organize data with advanced search, audit trails, and analytics.",

    icon: (
      <div
        className={`w-fit text-fuchsia-500 bg-purple-500/10 rounded-full p-2 flex justify-center items-center`}
      >
        <FolderTwoTone />
      </div>
    ),
  },
];
